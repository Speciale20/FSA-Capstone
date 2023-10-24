// elimentate login req if there is not a token           complete
// login button on nav bar                                complete
// make a conformation for purchase button and screen     complete
// remove +- on Shop on each card                         complete
// update quanitiy of cart on the nav bar                 complete
// Cleanup unsued code on each file                       complete

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Cart from "./pages/cart";
import Login from "./pages/login";
import ProductDetail from "./pages/ProductDetail";
import Success from "./pages/Success";
import getCartTotal from "./utils";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  // Parse cart data from localStorage or initialize as an empty array
  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // Update token when localStorage changes
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/");
    console.log("After navigating");
  };

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    console.log("Cart cleared from local storage");
    setCart([]);
    console.log("Cart state cleared");

    navigate("/Success");
  };

  const handleIncreaseQuantity = (item) => {
    // Find the item in the cart
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout handleLogout={handleLogout} cart={cart} />}
      >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="about" element={<About />} />

        <Route
          path="cart"
          element={
            <Cart
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handlePlaceOrder={handlePlaceOrder}
              cart={cart}
              total={total}
              getCartTotal={getCartTotal}
            />
          }
        />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="shop/products/:id" element={<ProductDetail />} />
        <Route path="Success" element={<Success />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
