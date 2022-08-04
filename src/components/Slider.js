import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Discount from "./Discount";

const url = "https://dummyjson.com/products/category/laptops";
const Slider = () => {
  const [laptops, setLaptops] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchLaptops = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const laptops = data.products;
    setLaptops(laptops);
  };
  useEffect(() => {
    fetchLaptops();
  }, []);

  useEffect(() => {
    const lastIndex = laptops.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, laptops]);
  return (
    <section className="slider">
      <div className="slider-center">
        {laptops.map((laptop, laptopIndex) => {
          const { id, title, thumbnail, discountPercentage, description } =
            laptop;

          let position = "nextSlide";
          if (laptopIndex === index) {
            position = "activeSlide";
          }
          if (
            laptopIndex === index - 1 ||
            (index === 0 && laptopIndex === laptops.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div className="home-slide">
                <div className="slider-image">
                  <img src={thumbnail} alt={title} />
                  <div className="discount">
                    <p>- {discountPercentage}%</p>
                    <Discount />
                  </div>
                </div>
                <div className="slider-text">
                  <h2 className="slider-title">{title}</h2>
                  <p className="slider-description">{description}</p>
                  <Link to={`/products/${id}`}>
                    <button className="btn">read more</button>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
