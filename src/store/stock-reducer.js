const initialStockState = {
  allStock: [],
};

const stockActions = {
  STOCK_SET_ALL: "STOCK_SET_ALL",
  CLEAR_STOCK: "CLEAR_STOCK",
};

function stockReducer(state, action) {
  switch (action.type) {
    case stockActions.STOCK_SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case stockActions.CLEAR_STOCK:
      return {
        ...initialStockState,
      };
    default:
      return state;
  }
}

export { initialStockState, stockActions, stockReducer };
