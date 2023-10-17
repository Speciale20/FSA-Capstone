import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Cart = ({ cart, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)} - Quantity:{" "}
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item)}>-</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default Cart;
