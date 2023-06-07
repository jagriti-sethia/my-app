import React from 'react'
import { NavLink } from "react-router-dom";
import "./wishlist.css";
import emptyWishlistImg from "../../assets/empty-wishlist.png";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const navigate = useNavigate();
  return (
    <div>

<div className="wishlist">
      <h1>Wishlist </h1>
      <div className="wishlist-container">
        {/* <div className="wishlist-list">
          {productState?.wishlist?.map((product) => (
            <li>
              <ProductCard productsData={product} key={product._id} />
            </li>
           ))} 
        </div> */}
         <div className="emptyWishlist">
      <img src={emptyWishlistImg} alt="empty-wishlist" />
      <h2>Your Wishlist is Empty!</h2>
      <p>Explore exclusive products and add your favourites to Wishlist!</p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Wishlist