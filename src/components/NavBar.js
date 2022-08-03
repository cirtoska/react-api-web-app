import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  // const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
  // useAuth0();
  // console.log({ isAuthenticated, user, isLoading });
  // const isUser = isAuthenticated && user;
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/cart" className="icon-cart" title="Carts List">
        <FaShoppingCart />
      </Link>
      {/* {isUser ? (
        <button
          className="btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
      )} */}
      <Link to="/login" className="icon-cart" title="Login">
        <FaSignInAlt />
      </Link>
    </header>
  );
};

export default NavBar;
