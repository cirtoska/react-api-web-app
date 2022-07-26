import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../components/Footer";
import Loading from "../utility/Loading";

const Product = () => {
  let { id } = useParams();
  let { pathname } = useLocation();

  const url = `https://dummyjson.com/products/${id}`;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [thumbnail, setThubnail] = useState();

  const fetchProduct = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const product = data;
    console.log(product);
    setLoading(false);
    setProduct(product);
    setThubnail(product.thumbnail);
  };

  useEffect(() => {
    fetchProduct();
  }, [pathname]);

  if (loading) {
    return <Loading />;
  }
  const { title, description, price, category, brand, images, rating } =
    product;

  const addItem = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeItem = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // console.log(addItem);
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
        {title}
      </h1>
      <main id="product">
        <div className="product-card single-product">
          <div className="product-wrap">
            <div className="product-info">
              <h2>{title}</h2>
              <div className="product-header">
                <span className="category">{category}</span>
                <span className="brand">{brand}</span>
                <span className="rating">
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  {rating}
                </span>
              </div>
              <p className="description">{description}</p>
              <div className="line"></div>
              <div className="shop-item">
                <div className="counter">
                  <button onClick={removeItem}>
                    <FaMinus />
                  </button>
                  <span>{count}</span>
                  <button onClick={addItem}>
                    <FaPlus />
                  </button>
                </div>
                <button type="submit" className="price">
                  add to card
                </button>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={thumbnail} className="thumbnail" alt="main product" />
              <div className="img-gallery">
                {images.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt="products"
                      key={index}
                      onClick={() => setThubnail(image)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-navigation">
          <Link to={`/products/${parseInt(id) - 1}`}>
            <button className="btn-prev"></button>
          </Link>
          <Link to={`/products/${parseInt(id) + 1}`}>
            <button className="btn-next"></button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
