import { actionConstants } from "../actioConstants";

export const initionalStore = {
  login: {
    value: [],
  },
};

export const loginReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case actionConstants.LOGIN:
      return {
        value: action.payload,
      };

    case actionConstants.LOGOUT:
      return {
        value: null,
      };

    default:
      return state;
  }
};

export const selectUser = (state) => state.login;
