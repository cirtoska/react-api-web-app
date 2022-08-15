import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import apiClient from "../utility/apiCall";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const notify = (type, message) => toast[type](message);

  let navigate = useNavigate();

  const getLogin = (e) => {
    e.preventDefault();
    apiClient
      .post("https://dummyjson.com/auth/login", {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        console.log("res", res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        notify("success", "success");
        navigate(`/users/`, { replace: true });
      })
      .catch((error) => {
        notify("error", error.response.data.message);
        console.log("error", error);
      });
  };
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <>
      <NavBar />
      <ToastContainer />
      <main>
        <h1>
          <Link to="/">Home</Link> / Login
        </h1>
        <div className="login-wraper">
          <form className="login-form" onSubmit={getLogin}>
            <div className="login-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="enter your username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="login-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
