import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/Shamazon-Logo.jpg";
import { BsFillCartFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

const header = () => {
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
              <form className="d-flex" role="search" />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <Link to={"/Login"}>
                <RiAccountCircleFill />
                <span>ACCOUNT</span>
              </Link>
              <Link to={"/Cart"}>
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
