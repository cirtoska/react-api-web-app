import { combineReducers } from "redux";
import { paymentReducer } from "./paymentReducer";

const reducer = combineReducers({
  payment: paymentReducer,
});

export default reducer;
