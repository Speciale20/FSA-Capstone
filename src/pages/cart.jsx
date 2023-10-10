import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Cart = ({ cart, updateCart }) => {
  const handleIncreaseQuantity = (item) => {
    // Find the item in the cart
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    updateCart(updatedCart);
  };

  const handleDecreaseQuantity = (item) => {
    // Find the item in the cart
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    // Remove the item from the cart if quantity becomes 0
    const filteredCart = updatedCart.filter(
      (cartItem) => cartItem.quantity > 0
    );
    updateCart(filteredCart);
  };

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
