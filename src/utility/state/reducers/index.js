import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
// import { paymentReducer } from "./paymentReducer";

const reducer = combineReducers({
  // payment: paymentReducer,
  login: loginReducer,
});

export default reducer;
