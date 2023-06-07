import React from 'react'
import "./cart.css";
import CartCard from "./components/cartCard";
import CartPrice from "./components/cartPrice";

const Cart = () => {
  return (
    <div>
      
   

      <div className="cart">
      <h1>Cart
         {/* ({productState?.cart?.length}) */}
         </h1>
      <div className="cart-container">
        <div className="cart-item-container">
          {/* {productState?.cart?.length > 0 &&
            productState?.cart?.map((product) => (
              <CartCard key={product._id} product={product} />
            ))} */}
            <CartCard />
        </div>
        {/* {productState?.cart?.length > 0 && (
          <CartPrice setCouponModal={setCouponModal} />
        )} */}
           <CartPrice />
      </div>
      {/* {couponModal && <CouponModal setCouponModal={setCouponModal} />} */}
    </div>
    </div>
  )
}

export default Cart