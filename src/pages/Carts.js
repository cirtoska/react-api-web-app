import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Footer from "../components/Footer";

const Carts = () => {
  const url = "https://dummyjson.com/carts";
  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const carts = response.data.carts;
        setCarts(carts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }

  if (carts.length === 0) return null;

  return (
    <>
      <NavBar />
      <main>
        <h1>
          <Link to="/">Home</Link> / User Carts
        </h1>
        <ul className="container">
          {carts.map((cart) => {
            const { id, total, products, userId } = cart;
            return (
              <li className="product-card products" key={id}>
                <p className="user-title">User Shopping Bag</p>
                <h2>
                  <FaShoppingBag /> #{userId}
                </h2>
                <Link to={`/cart/${id}`}>
                  <button className="btn">Proceed to CheckOut</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Carts;
