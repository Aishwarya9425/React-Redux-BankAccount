import { applyMiddleware, combineReducers, createStore } from "redux";
// 'createStore' is deprecated
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/* thunk -- middleware, b/w dispatcher and store, used for side effects before reaching the reducer and updating the store; */

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
