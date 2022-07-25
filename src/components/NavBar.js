import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/cart" className="icon-cart">
        <FaShoppingCart />
      </Link>
    </header>
  );
};

export default NavBar;
