import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import image from "../images/not-found.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Not Found
      </h1>
      <main>
        <img class="not-found" src={image} alt="Page not found" />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
