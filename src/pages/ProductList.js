import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useFetch from "../utility/useFetch";
import Paginate from "../utility/Paginate";

const ProductList = () => {
  const url = "https://dummyjson.com/products";
  const { data } = useFetch(url);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  useEffect(() => {
    setProducts([]);
  }, [url]);

  if (products.length === 0) return null;

  // Get current posts
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = products.products.slice(
    indexOfFirstPosts,
    indexOfLastPosts
  );

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Products
      </h1>
      <main id="products">
        <ul>
          {currentPosts.map((product) => {
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
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={products.products.length}
          paginate={paginate}
        />
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
