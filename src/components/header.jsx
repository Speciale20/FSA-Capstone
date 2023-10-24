import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Shamazon-Logo.jpg";
import { BsFillCartFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";

const removeToken = () => {
  localStorage.removeItem("userToken");
};

const header = ({ cart }) => {
  const navigate = useNavigate();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

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
              <Link to={"/login"}>
                <span>Login</span>
                <BiLogIn />
              </Link>
              <Link onClick={handleLogout}>
                <HiOutlineLogout />
                <span>Log Out</span>
              </Link>
              <Link to={"/cart"}>
                <BsFillCartFill />
                <span>CART ({totalQuantity})</span>
              </Link>
            </div>
          </header>
        </center>
      </div>
    </>
  );
};

export default header;
