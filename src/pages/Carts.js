import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

const Carts = () => {
  const url = "https://dummyjson.com/carts";
  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const carts = response.data.carts;
        console.log(carts);
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
        <h1>Carts</h1>
        <ul className="container">
          {carts.map((cart) => {
            const { id, total, products, userId } = cart;
            return (
              <Link to={`/cart/${id}`} key={id}>
                <li className="product-card products">
                  <h2>{userId}</h2>

                  {products.map((product) => {
                    const { id, title, price, discountPrice, quantity, total } =
                      product;
                    return (
                      <div key={id}>
                        <h3>{title}</h3>
                        <p>total: ${total}</p>
                      </div>
                    );
                  })}
                  <p>Total: ${total}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Carts;
