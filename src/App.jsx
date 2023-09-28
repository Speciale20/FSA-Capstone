import React, { useState } from "react";
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

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("userToken");
    setToken(null);
    console.log("Token after logout:", token);
    navigate("/");
    console.log("After navigating");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout handleLogout={handleLogout} />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route
          path="cart"
          element={token ? <Cart /> : <Navigate to="/login" />}
        />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
