import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { login } from "../utility/state/actions/loginAction";
import apiClient from "../utility/apiCall";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = (type, message) => toast[type](message);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const store = useSelector((store) => store.login, shallowEqual);
  console.log(store);
  const handleSubmit = (e) => {
    e.preventDefault();

    apiClient
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("res", res.data);

        dispatch(
          login({
            name: username,
            password: password,
          })
        );
        console.log("store", res.data);

        notify("success", "success");
        navigate("/");
      })
      .catch((error) => {
        notify("error", error.response.data.message);
        console.log("error", error);
      });
  };

  return (
    <>
      <NavBar />
      <ToastContainer />
      <main id="login">
        <h1>
          <Link to="/">Home</Link> / Login
        </h1>
        <div className="login-wraper">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="#" className="forgot-pass">
                Forgot Your Password?
              </Link>
            </div>

            <div>
              <button type="submit" className="btn btn-xl">
                Sign In
              </button>
            </div>
            <div className="signup">
              <p>Don't have an account yet?</p>
              <Link to="#">
                <button className="btn">Sign Up!</button>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
