import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  Button,
  Chip,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Dropzone from "react-dropzone";
import axios from "axios";
import { productsActions } from "store/products-reducer";
import { storeContext } from "components/provider/Provider";
import { layoutActions } from "store/layouts-reducer";

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

const ProductForm = () => {
  const { state, dispatch } = useContext(storeContext);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productSalePrice, setProductSalePrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [allSizes, setAllSizes] = useState([]);

  const findFirstValidTaxon = (categories) =>
    categories.filter((taxon) => taxon.taxons.length === 0)[0];

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/api/taxons/`)
      .then((res) => {
        if (res.status === 200) {
          const categories = res.data.taxons.filter(
            (taxon) => taxon.taxonomy_id === 1 && taxon.taxons.length === 0
          );
          dispatch({
            type: productsActions.PRODUCTS_SET_ALL,
            payload: {
              allCategories: categories,
            },
          });
          setSelectedCategory(findFirstValidTaxon(categories));
        }
      })
      .catch(() => {});

    axios
      .get(`${REACT_APP_API_URL}/api/taxonomies/`)
      .then((res) => {
        if (res.status === 200) {
          const genders = res.data.taxonomies.filter(
            (tax) => tax.name === "Gjinia"
          )[0]?.root?.taxons;
          dispatch({
            type: productsActions.PRODUCTS_SET_ALL,
            payload: {
              allGenders: genders,
            },
          });
          console.log(genders);
          setSelectedGender(genders[0]);
        }
      })
      .catch(() => {});
  }, []);

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const handleAcceptedFiles = (files) => {
    setAcceptedFiles(files);
  };

  const disabledTaxon = (taxon) => taxon.taxons.length !== 0;

  const handleSelectCategory = (taxon) => {
    setSelectedCategory(taxon);
  };

  const handleSelectGender = (taxon) => {
    setSelectedGender(taxon);
  };

  useEffect(() => {
    if (selectedCategory) {
      setSelectedSizes([]);
      const categoryName = selectedCategory?.permalink.split("/")[1];
      axios
        .get(
          `${REACT_APP_API_URL}/api/option_types/?q[name_cont]=${categoryName}`
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: productsActions.PRODUCTS_SET_ALL,
              payload: {
                allSizes: res.data[0]?.option_values,
              },
            });
            setAllSizes(res.data[0]?.option_values);
          }
        })
        .catch(() => {});
    }
  }, [selectedCategory]);

  const handleUploadProduct = () => {
    const categoryName = selectedCategory?.permalink.split("/")[1];
    const data = {
      product: {
        name: productName,
        price: productPrice,
        cost_price: productSalePrice,
        shipping_category_id: 1,
        option_types: [`${categoryName}-size`],
        taxon_ids: `${selectedCategory?.id}, ${selectedGender?.id}`,
        variants: selectedSizes.map((size) => ({
          track_inventory: true,
          price: productPrice,
          cost_price: productSalePrice,
          options: [
            {
              name: `${categoryName}-size`,
              value: size.name,
            },
          ],
        })),
      },
    };

    axios
      .post(`${REACT_APP_API_URL}/api/products/`, data)
      .then(async (res) => {
        dispatch({
          type: productsActions.PRODUCTS_SET_ALL,
          payload: {
            allProducts: [
              ...state.products.allProducts,
              handleProductObject(res.data),
            ],
          },
        });
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: false,
            signalMessage: "Produkti u ruajt!",
          },
        });
        Promise.all(
          acceptedFiles.map((file) =>
            axios
              .post(
                `${REACT_APP_API_URL}/api/products/${res.data?.id}/images`,
                {
                  image: {
                    attachment: file,
                  },
                },
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then(() => {
                dispatch({
                  type: layoutActions.LAYOUT_SET_ALL,
                  payload: {
                    openMessage: true,
                    error: false,
                    signalMessage: "Fotot e produktit u rajtën!",
                  },
                });
              })
              .catch(() => {
                dispatch({
                  type: layoutActions.LAYOUT_SET_ALL,
                  payload: {
                    openMessage: true,
                    error: true,
                    signalMessage: "Ka ndodhë një gabim.",
                  },
                });
              })
          )
        );
      })
      .catch((res) => {
        console.log(res);
        dispatch({
          type: layoutActions.LAYOUT_SET_ALL,
          payload: {
            openMessage: true,
            error: true,
            signalMessage: "Ka ndodhë një gabim.",
          },
        });
      });
  };

  return (
    <DialogContent>
      <form>
        <TextField
          label="Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          fullWidth
        />
        <TextField
          label="Price on Sale"
          type="number"
          value={productSalePrice}
          onChange={(e) => setProductSalePrice(e.target.value)}
          fullWidth
        />

        {selectedCategory && (
          <Select label="Category" fullWidth value={selectedCategory?.id}>
            {state.products.allCategories.map((taxon) => (
              <MenuItem
                key={taxon.id}
                value={taxon.id}
                disabled={disabledTaxon(taxon)}
                onClick={() => handleSelectCategory(taxon)}
              >
                {taxon.name}
              </MenuItem>
            ))}
          </Select>
        )}
        {selectedGender && (
          <Select label="Gjinia" fullWidth value={selectedGender?.id}>
            {state.products.allGenders.map((taxon) => (
              <MenuItem
                key={taxon.id}
                value={taxon.id}
                onClick={() => handleSelectGender(taxon)}
              >
                {taxon.name}
              </MenuItem>
            ))}
          </Select>
        )}

        {selectedCategory && (
          <>
            <InputLabel>Zgjedh Madhësinë</InputLabel>
            <Select
              label="Size"
              fullWidth
              value={selectedSizes}
              onChange={() => {}}
              multiple
              renderValue={(selected) => (
                <div style={{ display: "flex", flexWrap: "wrap", zIndex: 2 }}>
                  {selected.map((value) => {
                    const selectedSize = allSizes.find(
                      (size) => size.id === value.id
                    );
                    return (
                      <div
                        key={value.id}
                        style={{ margin: "2px", pointerEvents: "none" }}
                      >
                        <Chip
                          key={value.id}
                          label={selectedSize?.name}
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            >
              {state.products.allSizes?.map((size) => (
                <MenuItem
                  key={size.id}
                  value={size}
                  selected
                  onClick={() => {
                    handleSizeClick(size);
                  }}
                >
                  {size.presentation}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
        <Dropzone onDrop={handleAcceptedFiles} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop images here</p>
            </div>
          )}
        </Dropzone>
        {acceptedFiles.length > 0 && (
          <div>
            <h4>Uploaded Images:</h4>
            {acceptedFiles.map((file) => (
              <img
                key={file.name}
                src={URL.createObjectURL(file)}
                alt={file.name}
                height="100"
              />
            ))}
          </div>
        )}
        <Button color="primary" onClick={handleUploadProduct}>
          Add Product
        </Button>
      </form>
    </DialogContent>
  );
};

const Products = () => {
  const { state, dispatch } = useContext(storeContext);
  const [isPopupOpen, setPopupOpen] = useState(false);

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

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
      renderHeader: () => (
        <IconButton onClick={openPopup}>
          <AddCircleOutlineIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <DataGrid
          rows={state.products?.allProducts}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <Dialog open={isPopupOpen} onClose={closePopup}>
          <ProductForm />
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Products;
