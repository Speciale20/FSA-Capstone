import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { json } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Cart from "./cart";

const shop = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  console.log("Cart in Shop:", cart);

  const handleAddToCart = (item) => {
    console.log("Adding item to cart:", item);
    // Update the cart state by adding the item
    setCart([...cart, item]);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("API data:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  }, []);

  return (
    <div>
      <center>
        <div className="container-search">
          <input
            type="search"
            name="src"
            placeholder="search products here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </center>
      <div className="container-cat">
        <div className="row-cat">
          <div className="col-cat">
            <button className="btn-cat">Men's</button>
          </div>
          <div className="col-cat">
            <button className="btn-cat ">Women's</button>
          </div>
          <div className="col-cat">
            <button className="btn-cat ">Jewelery</button>
          </div>
          <div className="col-cat">
            <button className="btn-cat ">Electronics</button>
          </div>
          <div className="col-cat">
            <button className="btn-cat ">All Products</button>
          </div>
        </div>
      </div>
      <div className="container-shop">
        {data
          .filter((row) => {
            if (search === "") {
              return row;
            } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
              return row;
            }
            return null;
          })
          .map((row, i) => (
            <div className="box" key={i}>
              <div className="content">
                <div className="item-title">
                  <h5 className="item-title">{row.title.substring(0, 20)}</h5>
                  <p className="item-description">{row.description}</p>
                  <p className="item-price">{row.price}</p>
                </div>
                <div>
                  <img
                    className="item-images"
                    src={row.image}
                    alt={row.image}
                  />
                  <button onClick={() => handleAddToCart(row)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default shop;
