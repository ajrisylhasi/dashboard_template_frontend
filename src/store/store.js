import combineReducers from "react-combine-reducers";
import { authReducer, initialAuthState } from "./auth-reducer";
import { initialSearchState, searchReducer } from "./search-reducer";
import { initialProductsState, productsReducer } from "./products-reducer";
import { initialStockState, stockReducer } from "./stock-reducer";
import { initialLayoutState, layoutReducer } from "./layouts-reducer";

const [reducer, store] = combineReducers({
  auth: [authReducer, initialAuthState],
  search: [searchReducer, initialSearchState],
  products: [productsReducer, initialProductsState],
  stock: [stockReducer, initialStockState],
  layout: [layoutReducer, initialLayoutState],
});

export { store, reducer };
