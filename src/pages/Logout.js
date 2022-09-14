import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { logout } from "../utility/state/actions/loginAction";

const Logout = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.login, shallowEqual);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log("logout store", store);
  };
  return (
    <>
      <NavBar />
      <main id="login">
        <h1>
          <Link to="/">Home</Link> / Login
        </h1>
        <div className="login-wraper">
          <div className="login-container"></div>
          <div className="login-container"></div>

          <div>
            <button type="submit" className="btn btn-xl" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Logout;
