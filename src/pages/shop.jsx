import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortingOption, setSortingOption] = useState("desc");
  console.log(cart);
  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: parseInt(cartItem.quantity) + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      const cartItem = {
        id: item.id,
        title: item.title,
        img: item.image,
        price: item.price,
        quantity: 1, // Initial quantity
      };
      setCart([...cart, cartItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, cartItem]));
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSortingChange = (e) => {
    setSortingOption(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${sortingOption}`
        )
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log("API error:", error);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products?sort=${sortingOption}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log("API error:", error);
        });
    }
  }, [selectedCategory, sortingOption]);

  return (
    <div>
      <center>
        <div className="container-search">
          <input
            type="search"
            name="src"
            placeholder="Search products here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </center>

      {/* Category buttons */}
      <center>
        <div className="container-cat">
          <div className="row-cat">
            <button
              className={`btn-cat ${
                selectedCategory === "men's clothing" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("men's clothing")}
            >
              Men's
            </button>
            <button
              className={`btn-cat ${
                selectedCategory === "women's clothing" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("women's clothing")}
            >
              Women's
            </button>
            <button
              className={`btn-cat ${
                selectedCategory === "jewelery" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("jewelery")}
            >
              Jewelry
            </button>
            <button
              className={`btn-cat ${
                selectedCategory === "electronics" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("electronics")}
            >
              Electronics
            </button>
            <button
              className={`btn-cat ${selectedCategory === "" ? "active" : ""}`}
              onClick={() => handleCategoryClick("")}
            >
              All Products
            </button>
          </div>
        </div>

        {/* Sorting dropdown */}
        <div className="container-sort">
          <select value={sortingOption} onChange={handleSortingChange}>
            <option value="">Default</option>
            <option value="desc">Sort by Price (High to Low)</option>
            <option value="asc">Sort by Price (Low to High)</option>
          </select>
        </div>
      </center>

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
                  <p className="item-price">${row.price.toFixed(2)}</p>
                </div>
                <div>
                  <Link to={`/shop/products/${row.id}`}>
                    <img
                      className="item-images"
                      src={row.image}
                      alt={row.image}
                    />
                  </Link>
                  <div>
                    <button onClick={() => handleAddToCart(row)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Shop;
