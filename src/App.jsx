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

  return (
    <Routes>
      <Route path="/" element={<Layout handleLogout={handleLogout} />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="about" element={<About />} />

        <Route
          path="cart"
          element={
            token ? (
              <Cart cart={cart} updateCart={setCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="shop/products/:id" element={<ProductDetail />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
