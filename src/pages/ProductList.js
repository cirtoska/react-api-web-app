import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useFetch from "../utility/useFetch";

const ProductList = () => {
  const url = "https://dummyjson.com/products";
  const { data } = useFetch(url);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  useEffect(() => {
    setProducts([]);
  }, [url]);

  if (products.length === 0) return null;
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Products
      </h1>
      <main id="products">
        <ul>
          {products.products.map((product) => {
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
