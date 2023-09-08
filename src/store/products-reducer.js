const initialProductsState = {
  allGenders: [],
  allCategories: [],
  allSizes: [],
  allProducts: [],
};

const productsActions = {
  PRODUCTS_SET_ALL: "PRODUCTS_SET_ALL",
  CLEAR_PRODUCTS: "CLEAR_PRODUCTS",
};

function productsReducer(state, action) {
  switch (action.type) {
    case productsActions.PRODUCTS_SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case productsActions.CLEAR_PRODUCTS:
      return {
        ...initialProductsState,
      };
    default:
      return state;
  }
}

export { initialProductsState, productsActions, productsReducer };
