import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { productsActions } from "store/products-reducer";
import { storeContext } from "components/provider/Provider";

const { REACT_APP_API_URL } = process.env;

const extractProductSizes = (product) => {
  const productSizes = [];
  product.variants.forEach((variant) => {
    variant.option_values.forEach((optionValue) => {
      if (!productSizes.includes(optionValue.presentation)) {
        productSizes.push(optionValue.presentation);
      }
    });
  });

  return productSizes.join(", ");
};

const handleProductObject = (product) => ({
  id: product.id,
  name: product.name,
  thumb:
    product?.master?.images[0]?.mini_url ||
    product?.variants[0]?.images[0]?.mini_url,
  sku: product?.master?.sku,
  price: product?.master?.price,
  salePrice: product?.master?.cost_price,
  category: product?.classifications[0]?.taxon?.name,
  sizes: extractProductSizes(product),
});

const Orders = () => {
  const { state, dispatch } = useContext(storeContext);
  const [pageBuilding] = useState(true);

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/api/products`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: productsActions.PRODUCTS_SET_ALL,
            payload: {
              allProducts: res.data.products.map((product) =>
                handleProductObject(product)
              ),
            },
          });
        }
      })
      .catch(() => {});
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
      headerName: "Product Sizes",
      sortable: false,
      width: 200,
    },
    {
      field: "addProduct",
      headerName: "Add Product",
      description: "Click to add a new product",
      sortable: false,
      width: 200,
    },
  ];

  return pageBuilding ? (
    <p>Së shpejti</p>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <DataGrid
          rows={state.products?.allProducts}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Grid>
    </Grid>
  );
};

export default Orders;
