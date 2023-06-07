import React from 'react'
import "./productDetails.css";
import phm2 from "../../assets/phm2.jpg";//htade
const ProductDetails = () => {
  return (
    <div>P

<div className="product-details">
      <img src={phm2} alt='name' />
      <div className="details">
        <div className="details-tag">
          {/* {isBestSeller && <span className="card-badge">BESTSELLER</span>} */}
          <button
            // disabled={!inStock && true}
            // style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
            // className={`${
            //   isItemInWishlist(productState?.wishlist, _id)
            //     ? `wishlist-toggle`
            //     : `wishlist-icon`
            // }`}
            // onClick={() => {
            //   if (authState.isLoggedIn) {
            //     if (isItemInWishlist(productState?.wishlist, _id)) {
            //       removeFromWishlistHandler(productDispatch, _id);
            //       toast.success("Item is removed from Wishlist!");
            //     } else {
            //       addToWishlistHandler(singleProduct, productDispatch);
            //       toast.success("Item is added to Wishlist!");
            //     }
            //   } else {
            //     toast.warn("Please login to proceed!");
            //     navigate("/login");
            //   }
            // }}
          >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        </div>
        <div className="details-content">
          <h2>//name//</h2>
          <div className="size-brand-reviews">
            <p>//size//</p>
            <p>Brand: brand</p>
            <p>
              {/* {ratings?.value}  */}rat value
              <i className="fa fa-star"></i>
               {/* ({ratings?.count}{" "}
              reviews) */}
            </p>
          </div>
          <p className="price-content">
            MRP: <strong>//₹price//</strong>{" "}
            <span className="originalPrice">//₹originalPrice//</span> |{" "}
            <span className="off"> Off</span>
          </p>
          {/* {offer && */}
           <li className="product-offer">Offer:offer</li>
          <div className="facility-div">
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery
            </span>
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All
              Taxes
            </span>
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Cash On Delivery
              Available
            </span>
          </div>
          <p>
            Availability:{" "}
            <span className="in-stock">//inStock && "In Stock"//</span>
            <span className="out-of-stock">//!inStock && "Out of Stock"//</span>
          </p>
          <button
            // disabled={!inStock && true}
            // style={{
            //   cursor: !inStock && "not-allowed",
            //   opacity: !inStock && "0.5",
            // }}
            // className={`${
            //   isItemInCart(productState?.cart, _id)
            //     ? `go-to-cart`
            //     : `add-to-cart`
            // }`}
            // onClick={() => {
            //   if (authState.isLoggedIn) {
            //     if (isItemInCart(productState?.cart, _id)) {
            //       navigate("/cart");
            //     } else {
            //       addToCartHandler(singleProduct, productDispatch);
            //       toast.success("Item is added to Cart!");
            //     }
            //   } else {
            //     toast.warn("Please login to proceed!");
            //     navigate("/login");
            //   }
            // }}
          >
            <i className="fa fa-shopping-cart"></i>{" "}
            {/* {isItemInCart(productState?.cart, _id)
              ? "Go to Cart"
              : "Add to Cart"} */} add to cart
          </button>
        </div>
      </div>
    </div>
    //
    </div>
  )
}

export default ProductDetails;