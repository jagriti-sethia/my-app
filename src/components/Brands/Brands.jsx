import React from 'react'
import "./Brands.css";
import apple from "../../assets/Apple_brand.jpg";
import Huwaie from "../../assets/HUwai_Brand.jpg";
import lg from "../../assets/LG_brand.jpg";
import motorola from "../../assets/Motorola_Brand.jpg";
import Sony from "../../assets/Sony_brand.jpg";
import Xiaomi from "../../assets/Xiaomi_brand.jpg";
import { useNavigate } from "react-router-dom";
const Brands = () => {
    const navigate = useNavigate();

  return (
    <div>Brands


<div className="top-brands">
      <img
        src={apple}
        alt="apple"
        onClick={
            navigate("/products")
          }
      />
      <img
        src={Huwaie}
        alt="huwaie"
        onClick={
            navigate("/products")
          }
      />
      <img
        src={lg}
        alt="LG"
        onClick={
            navigate("/products")
          }
      />
      <img
        src={motorola}
        alt="motorola"
        onClick={
            navigate("/products")
          }
      />
      <img
        src={Sony}
        alt="Sony"
        onClick={
            navigate("/products")
          }
      />
      <img
        src={Xiaomi}
        alt="Xiaomi"
        onClick={
          navigate("/products")
        }
      />
      
      
    </div>
    </div>
  )
}

export default Brands