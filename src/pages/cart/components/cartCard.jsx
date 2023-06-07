import React from 'react'
import { useNavigate } from "react-router-dom";
import phm2 from "../../../assets/phm2.jpg";
import "./cartCard.css";
const CartCard = () => {

  const navigate = useNavigate();
  return (
    <div>
       <div
    // key={_id}
    className="cart-card-container"
  >
    <div className="cart-card-content">
      
      <img src={phm2} alt= "hello" onClick={() => navigate(`/products`)}/>
      
      <div className="cart-card-right-container">
        <h4>
            {/* {name.length > 50 ? name.substring(0, 50) + "..." : name} */}
            product name
            </h4>
        <p className="size">ram</p>
        <p className="price-text">
          MRP: <strong>₹-price</strong>{" "}
          <span className="originalPrice">₹-originalPrice</span> |{" "}
          <span className="off"> Off</span>
        </p>
        <div className="qty">
          <button
            className="minus"
        //     onClick={() =>{
        //       if(product.qty > 1) {
        //       handleCartQuantityChange(productDispatch, _id, "decrement");
        //       toast.success("Decreased quantity of item in cart!");
        //     }
        //   }
        //   }
        //     disabled={product.qty > 1 ? false : true}
        //     style={{ cursor: product.qty <= 1 && "not-allowed" }}
          >
            -
          </button>
          <span className="qty-count">product-qty</span>
          <button
            className="add"
        //     onClick={() => {
        //       handleCartQuantityChange(productDispatch, _id, "increment");
        //       toast.success("Increased quantity of item in cart!");
        //     }
        //   }
          >
            +
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div className="cart-card-horizontal-btn">
      <button
        className="remove-cart-btn"
        // onClick={() => {
        //   removeFromCartHandler(productDispatch, _id);
        //   toast.success("Item is removed from Cart!");
        // }}
      >
        Remove From Cart
      </button>
      <button
        className="add-wishlist-btn"
        // onClick={() => {
        //   if (isItemInWishlist(productState?.wishlist, _id)) {
        //     navigate("/wishlist");
        //   } else {
        //     addToWishlistHandler(product, productDispatch);
        //     toast.success("Item is added to Wishlist!");
        //   }
        // }}
      >
        {/* {isItemInWishlist(productState?.wishlist, _id)
          ? "Go To Wishlist"
        : "Add To Wishlist"} */}
          add to wishlist
      </button>
    </div>
  </div>
  </div>
  )
}

export default CartCard