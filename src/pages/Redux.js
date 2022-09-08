import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  addPayment,
  removePayment,
  resetPayment,
} from "../utility/state/actions/paymentAction";

const Redux = () => {
  const store = useSelector((store) => store.payment, shallowEqual);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addPayment(5));
  };
  const decrement = () => {
    dispatch(removePayment(5));
  };
  const reset = () => {
    dispatch(resetPayment());
  };
  const addObject = () => {
    const addUser = {
      firstName: "Alex",
      lastName: "Chi",
    };
    dispatch(addObject(addUser));
  };
  return (
    <>
      <h1>{store.value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addObject}>addObject</button>
    </>
  );
};

export default Redux;
