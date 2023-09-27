import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { json } from "react-router-dom";

const shop = () => {
  // const [category, setCategory] = useState("");
  // const fetchProducts = (category) => {
  //   fetch(`https://fakestoreapi.com/products/category/${category}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Failed to fetch products.");
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.log([error.message]);
  //     });
  // };

  // useEffect(() => {
  //   if (category === "") {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         } else {
  //           throw new Error("Failed to fetch products.");
  //         }
  //       })
  //       .then((data) => {
  //         setProducts(data);
  //       })
  //       .catch((error) => {
  //         console.log([error.message]);
  //       });
  //   } else {
  //     fetchProducts(category);
  //   }
  // }, [category]);

  // fetch all products

  const [fake, setFake] = useState([]);

  // console.log(fake);
  useEffect(() => {
    const fakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      const jsonData = await response.json();
      console.log(jsonData);
      setFake(jsonData);
    };
    fakeStore();
  }, []);
  const [menCategory, setMenCategory] = useState([]);
  const menCat = () =>
    useEffect(() => {
      const mensCategory = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/men's%20clothing"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setMenCategory(jsonData);

        // .then((res) => res.json())
        // .then((json) => console.log(json));
      };
      mensCategory();
    }, []);

  return (
    <>
      <>
        <div className="container-cat">
          <div className="row-cat">
            <div className="col-cat">
              <button className="btn-cat">{menCat}Men's</button>
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
      </>
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
