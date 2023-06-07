import React from "react";
import "./App.css";
// eslint-disable-next-line
import logo from "./logo.png";
import Mockman from "mockman-js";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Header from './components/Header/Header';
import Footer from './components/footer/footer';
import Signup from "./pages/signup/signup";
import Home from './pages/home/home';
import Productcard from './components/productcard/productcard';
import Sidebar from './components/sidebar/sidebar';
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/wishlist';
import Productlisting from './pages/Productlisting/productlisting';
import ProductDetails from "./pages/ProductDetails/productDetails";
import Userprofile from './components/userprofile/userprofile';
import { useContext } from "react";
import { ProductContext } from "./contexts/productContext";
import RequireAuth from "./components/Auth/requireAuth";
import AccountDetails from "./pages/AccountDetails/accountDetails";
import UserDetails from "./pages/AccountDetails/components/userDetails";
import AddressDetails from "./pages/AccountDetails/components/addressDetails";
import OrderHistory from "./pages/AccountDetails/components/orderHistory";

function App() {
  const { loader } = useContext(ProductContext);
  return (
    <div className="App">
   {/* {loader && <Loader />} */}
      < Header />
   
      <Routes>
      <Route path='/mockman' element={<Mockman />} />
      <Route exact path="/" element={< Home />} />
          <Route exact path="/userprofile" element={< Userprofile />} />
          <Route exact path="/products" element={< Productlisting />} />
          <Route exact path="/productcard" element={< Productcard />} />
          <Route exact path="/cart" element={<RequireAuth>< Cart /></RequireAuth>} />
          <Route exact path="/Wishlist" element={<RequireAuth>< Wishlist /></RequireAuth>} />
          <Route exact path="/productdetail" element={< ProductDetails />} />

          <Route
          path="/account-details"
          element={
            <RequireAuth>
              <AccountDetails />
            </RequireAuth>
          }
        >
          <Route path="userDetails" element={<UserDetails />} />
          <Route path="addressDetails" element={<AddressDetails />} />
          <Route path="orderHistory" element={<OrderHistory />} />
        </Route>
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     
    </div>
  );
}

export default App;