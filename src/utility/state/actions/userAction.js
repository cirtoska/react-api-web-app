import { actionConstants } from "../actioConstants";

export function login(username) {
  return {
    type: actionConstants.LOGIN,
    payload: username,
  };
}
