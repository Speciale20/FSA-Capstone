import React from "react";
import "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import logo from "../images/Shamazon-Logo.jpg";
import { BsFillCartFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const removeToken = () => {
  localStorage.removeItem("userToken");
};

const header = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging out...");
    // Call a function to remove the token
    removeToken();
    // Redirect to the home page after logout
    navigate("/");
  };
  return (
    <>
      <div>
        <center>
          <header>
            <div className="container">
              <div>
                <Link to="/">
                  {" "}
                  <img src={logo} alt="" className="Logo" />
                </Link>
              </div>
              <div className="Link">
                <Link to={"/"}>HOME</Link>
              </div>
              <div className="Link">
                <Link to={"/shop"}>SHOP</Link>
              </div>
              <div className="Link">
                <Link to={"/about"}>ABOUT</Link>
              </div>
              <Link onClick={handleLogout}>
                <HiOutlineLogout />
                <span>Log Out</span>
              </Link>
              <Link to={"/cart"}>
                <BsFillCartFill />
                <span>CART</span>
              </Link>
            </div>
          </header>
        </center>
      </div>
    </>
  );
};

export default header;
