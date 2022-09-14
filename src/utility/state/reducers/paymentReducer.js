import { actionConstants } from "../actioConstants";

const initialState = {
  payment: [],
  login: [],
};

export const paymentReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case actionConstants.INCREMENT:
      return {
        value: state.value + action.payload,
      };
    case actionConstants.DECREMENT:
      return {
        value: state.value - action.payload,
      };
    case actionConstants.RESET:
      return {
        value: 0,
      };
    case actionConstants.ADDOBJECT:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
};
