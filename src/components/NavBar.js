import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const logOut = () => {
    localStorage.removeItem("token");
  };

  let auth = { token: JSON.parse(localStorage.getItem("token")) };

  return (
    <header>
      <div className="nav-header">
        <div></div>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <div className="links" ref={linksRef}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/todolist">ToDoList</Link>
          <Link to="/cart" className="icon-cart" title="Carts List">
            <FaShoppingCart />
          </Link>
          {auth.token ? (
            <Link to="/" className="icon-cart" title="LogOut" onClick={logOut}>
              <FaSignOutAlt />
            </Link>
          ) : (
            <Link to="/login" className="icon-cart" title="Login">
              <FaSignInAlt />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
