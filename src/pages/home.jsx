import React from "react";
import { Link } from "react-router-dom";
import shop from "./shop";

const home = () => {
  return (
    <>
      <section className="banner ">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details"></div>
            <h1 className="welcome-text">Welcome to Shamazon</h1>
            <span className="welcome-text1">
              Unbeatable Deals, Speedy Delivery!
            </span>
            <span className="welcome-text2">
              Shop with confidence and embrace the future of online shopping!
            </span>
            <Link to={"/shop"} className="Shop-Now-btn" role="button">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
