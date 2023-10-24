import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handlePlaceOrder,
}) => {
  return (
    <div>
      <center>
        <h2>Your Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <ul key={index}>
                {item.title} - ${item.price.toFixed(2)} - Quantity:{" "}
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
              </ul>
            ))}
          </ul>
        ) : (
          <div>Your cart is empty.</div>
        )}
        <button onClick={handlePlaceOrder}>Order Now!</button>
      </center>
    </div>
  );
};

export default Cart;
