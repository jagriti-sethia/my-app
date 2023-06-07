
import React,{useContext, useEffect,  useState } from "react";
import"./header.css";
import {Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { FilterContext } from "../../contexts/filterContext";
import { AuthContext } from "../../contexts/authContext";



const Header = () => {

  const { productState } = useContext(ProductContext);
const { filterState, filterDispatch } = useContext(FilterContext);
const { authState } = useContext(AuthContext);

const [searchText, setSearchText] = useState("");


const navigate = useNavigate();

useEffect(() => {
  filterDispatch({ type: "SEARCH", payload: searchText });
}, [searchText, filterDispatch]);


  

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
        <NavLink to="/" className="nav-link">
            <h3 style={{color : "white"}}>Shopping cart</h3>
          </NavLink>
            <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search"
              value={searchText}
              type="search"
              name="search"
              onChange={(e) => {
                setSearchText(e.target.value);
                e.target.value.trim() !== "" && navigate("/products");
                filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
              }}
            />
          </div>
          <div className="nav-icons">
            <NavLink to="/products" className="icon-navlink">
              <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
            <NavLink to="/cart" className="icon-navlink">
              <i class="fa-solid fa-cart-shopping"></i>
              {productState?.cart?.length > 0 && (
                <span className="icon-badge">{productState?.cart?.length}</span>
              )}
            </NavLink>
            <NavLink to="/wishlist" className="icon-navlink">
              <i class="fa-solid fa-heart"></i>
              {productState?.wishlist?.length > 0 && (
                <span className="icon-badge">
                  {productState?.wishlist?.length}
                </span> 
               )}
            </NavLink>
            <NavLink
              to={
                authState?.isLoggedIn
                  ? "/account-details/userDetails"
                  : "/login"
              }
              className={authState?.isLoggedIn ? "login-user" : "icon-navlink"}  >
             
                
             {authState?.isLoggedIn ? (
                authState?.user.firstName
              ) : (
                <i class="fa-solid fa-user"></i>
              )}
            </NavLink>
          </div>
        </Container>
      </Navbar>

     
    </div>
  )
}

export default Header