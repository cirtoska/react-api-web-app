import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
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
  if (products.length === 0) return null;
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Products
      </h1>
      <main id="products">
        <ul>
          {products.map((product) => {
            const { id, title, description, thumbnail, price } = product;
            return (
              <li className="display-list" key={id}>
                <img src={thumbnail} alt="" className="product-thumbnail" />
                <div className="product-info">
                  <h2 className="product-title">
                    {title ? title : `${title.substring(0, 40)}...`}
                  </h2>
                  <p className="product-price">${price}</p>
                  <p className="product-text">{`${description.substring(
                    0,
                    90
                  )}...`}</p>
                  <Link to={`/products/${id}`}>
                    <button className="btn">details</button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
