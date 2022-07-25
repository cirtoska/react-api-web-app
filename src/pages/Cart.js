import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/carts/${id}`;
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        const cart = response.data;
        setCart(cart);
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

  if (cart.length === 0) return null;
  const {
    total,
    products,
    totalProducts,
    totalQuantity,
    diacountTotal,
    userId,
  } = cart;
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / <Link to="/cart">Carts</Link> / Cart #
        {userId}
      </h1>
      <main>
        <div className="product-card single-product">
          <div className="item-titles">
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Discount</p>
            <p>Discount Price</p>
            <p></p>
          </div>
          {products.map((product) => {
            const {
              id,
              title,
              userId,
              price,
              quantity,
              discountedPrice,
              discountPercentage,
              total,
            } = product;
            return (
              <div className="shopping-items" key={id}>
                <h4>{title}</h4>
                <p className="cart-price">${price}</p>
                <p className="quantity">{quantity}</p>
                <p className="cart-price">${total}</p>
                <p className="cart-price">%{discountPercentage}</p>
                <p className="cart-price">
                  <strong>${discountedPrice}</strong>
                </p>
                <p className="icon-bin">
                  <IoTrashBin />
                </p>
              </div>
            );
          })}
          <div className="item-titles">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>
              <strong>Order Total:</strong>
            </p>
            <p>
              <strong>${total}</strong>
            </p>
          </div>
          <div className="chekout">
            <button className="btn">continue shopping</button>
            <button className="btn">chekout</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
