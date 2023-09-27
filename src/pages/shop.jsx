import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { json } from "react-router-dom";

const shop = () => {
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    const fakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      const jsonData = await response.json();
      // console.log(jsonData);
      setFake(jsonData);
    };
    fakeStore();
  }, []);

  // fakeStore();
  return (
    <>
      <div className="container-shop">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5 className="item-title">{values.title}</h5>
                  <p className="item-description">{values.description}</p>
                  <p className="item-price">{values.price}</p>
                </div>
                <img className="item-images" src={values.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default shop;
