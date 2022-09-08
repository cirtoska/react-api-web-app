import { actionConstants } from "../actioConstants";

export function addPayment(number) {
  return {
    type: actionConstants.INCREMENT,
    payload: number,
  };
}

export function removePayment(number) {
  return {
    type: actionConstants.DECREMENT,
    payload: number,
  };
}

export function resetPayment() {
  return {
    type: actionConstants.RESET,
  };
}

export function addObject(user) {
  return {
    type: actionConstants.ADDOBJECT,
    payload: user,
  };
}
