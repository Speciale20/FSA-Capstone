import React from "react";

const Cart = ({ cart }) => {
  console.log("Cart items:", cart);
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default Cart;
