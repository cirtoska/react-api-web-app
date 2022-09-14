import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = useSelector((store) => store.login, shallowEqual);
  console.log(user);
  // let auth = { token: JSON.parse(localStorage.getItem("token")) };
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
  return <>{user.value ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
