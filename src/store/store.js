import combineReducers from "react-combine-reducers";
import { authReducer, initialAuthState } from "./auth-reducer";
import { initialSearchState, searchReducer } from "./search-reducer";
import { initialLayoutState, layoutReducer } from "./layout-reducer";
import { initialFeedState, feedReducer } from "./feed-reducer";

const [reducer, store] = combineReducers({
  auth: [authReducer, initialAuthState],
  search: [searchReducer, initialSearchState],
  layout: [layoutReducer, initialLayoutState],
  feed: [feedReducer, initialFeedState],
});

export { store, reducer };
