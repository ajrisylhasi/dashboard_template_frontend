import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { storeContext } from "components/provider/Provider";
import { stockActions } from "store/stock-reducer";
import { layoutActions } from "store/layouts-reducer";

const { REACT_APP_API_URL } = process.env;

const extractProductSizes = (stock) => {
  const productSizes = [];
  stock.variant.option_values.forEach((optionValue) => {
    if (!productSizes.includes(optionValue.presentation)) {
      productSizes.push(optionValue.presentation);
    }
  });

  return productSizes.join(", ");
};

const handleStockObject = (stock) => ({
  id: stock.id,
  name: stock?.variant?.name,
  thumb: stock?.variant?.images[0]?.mini_url,
  sku: stock?.variant?.sku,
  price: stock?.variant?.price,
  salePrice: stock?.variant?.cost_price,
  category: stock?.variant?.option_values[0]?.option_type_presentation,
  sizes: extractProductSizes(stock),
  unchangedStock: stock?.variant?.total_on_hand || 0,
  stock: stock?.variant?.total_on_hand || 0,
});

const Stock = () => {
  const { state, dispatch } = useContext(storeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${REACT_APP_API_URL}/api/stock_locations/1/stock_items`)
      .then((res) => {
        const formattedStock = res.data.stock_items
          .filter((stock) => !stock?.variant?.is_master)
          .map(
            (stock) =>
              stock?.variant?.is_master === false && handleStockObject(stock)
          );
        dispatch({
          type: stockActions.STOCK_SET_ALL,
          payload: {
            allStock: formattedStock,
          },
        });
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {}, [state.stock.allStock]);

  const handleProcessRowUpdateError = () => {
    dispatch({
      type: layoutActions.LAYOUT_SET_ALL,
      payload: {
        openMessage: true,
        error: true,
        signalMessage: "Stoku per këtë produkt nuk është ruajtur!",
      },
    });
  };

  const processRowUpdate = useCallback((newRow) => {
    setLoading(true);
    const stockDifference = newRow.stock - newRow.unchangedStock;
    axios
      .patch(`${REACT_APP_API_URL}/api/stock_items/${newRow?.id}`, {
        stock_item: { stick_item: newRow?.id, count_on_hand: stockDifference },
      })
      .then(() => {
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: false,
            signalMessage: "Stoku per produktin u ruajt!",
          },
        });
        setLoading(false);
      })
      .catch(() => {
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: false,
            signalMessage: "Stoku per produktin nuk është ruajtur!",
          },
        });
        setLoading(false);
      });

    return newRow;
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "thumb",
      headerName: "Product thumbnail",
      sortable: false,
      width: 190,
      editable: false,
      renderCell: (params) => (
        <img src={params.value} alt={`Thumbnail for ${params.row.name}`} />
      ),
    },
    {
      field: "name",
      headerName: "Product name",
      sortable: true,
      width: 190,
    },
    {
      field: "sku",
      headerName: "Product SKU",
      sortable: true,
      width: 190,
    },
    {
      field: "price",
      headerName: "Product Price",
      sortable: false,
      type: "number",
      width: 140,
    },
    {
      field: "salePrice",
      headerName: "Product Sale Price",
      sortable: false,
      type: "number",
      width: 200,
    },
    {
      field: "category",
      headerName: "Product Category",
      sortable: true,
      width: 190,
    },
    {
      field: "sizes",
      headerName: "Product Size",
      sortable: false,
      width: 200,
    },
    {
      field: "stock",
      headerName: "Product Stock",
      sortable: false,
      type: "number",
      editable: true,
      width: 200,
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <DataGrid
          rows={state.stock?.allStock}
          columns={columns}
          sx={{
            minHeight: 200,
          }}
          loading={loading}
          pageSize={5}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Grid>
    </Grid>
  );
};

export default Stock;
