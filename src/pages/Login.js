import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "https://dummyjson.com/auth/login";
const Login = () => {
  const [signIn, setSignIn] = useState();

  const getLogin = () => {
    axios
      .get("url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      })
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    getLogin();
  });

  return (
    <>
      <NavBar />
      <main>
        <h1>
          <Link to="/">Home</Link> / Login
        </h1>
        <div className="login-wraper">
          <form className="login-form">
            <div className="login-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="enter your username"
              />
            </div>
            <div className="login-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
              />
              <Link to="#" className="forgot-pass">
                Forgot Your Password?
              </Link>
            </div>
            <button type="submit" className="btn btn-xl">
              Sign In
            </button>

            <div className="signup">
              <p>Don't have an account yet?</p>
              <Link to="#">
                <button className="btn">Sign Up!</button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
