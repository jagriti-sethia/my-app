import React from 'react'
import"./carousel.css";
import { Carousel } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import phm1 from "../../assets/phm1.jpg";
import phm2 from "../../assets/phm2.jpg";
import phm3 from "../../assets/phm3.jpg";
import phm4 from "../../assets/phm4.jpg";


const Slideshow = () => {

  
  return (
    <div>
  <Carousel fade>
  <Carousel.Item style={{height:280}} className='carouseldiv1'  interval={3000}>
    <div className='carouseldiv' >
        <img 
        className='gallery'
        src={phm1}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className="shopnow-btn">
                <NavLink  to="/products">
                  <span>Shop Now</span>
                </NavLink>
              </button>
        </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item style={{height:280}} interval={3000}>
    <div className='carouseldiv'> 
    <img className='gallery'
      src={phm2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="shopnow-btn">
            <NavLink  to="/products">
              <span>Shop Now</span>
            </NavLink>
          </button>
    </Carousel.Caption>

    </div>
    
  
  </Carousel.Item>
  <Carousel.Item style={{height:280}} className='carouseldiv3' interval={3000}>
  <div className='carouseldiv'>
  <img
      className='gallery'
      src={phm3}
      alt="Third slide"
    />
    <Carousel.Caption style={{color : 'black'}}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <button className="shopnow-btn">
            <NavLink  to="/products">
              <span>Shop Now</span>
            </NavLink>
          </button>
    </Carousel.Caption>

  </div>
    
   
  </Carousel.Item>
  <Carousel.Item style={{height:280 }} interval={3000}>
  <div className='carouseldiv' >
  <img
      className='gallery'
      src={phm4}
      alt="Third slide"
    />
     <Carousel.Caption>
      <h3 >fourth slide label</h3>
      <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <button className="shopnow-btn">
            <NavLink to="/products">
              <span>Shop Now</span>
            </NavLink>
          </button>
          </Carousel.Caption>
  </div>
   
   
  </Carousel.Item>

  
</Carousel>

<div className='custom_banners'>
  <div className='banner-wrap' style={{background:'#00bcf2'}}>
  <span className='featured-thumbnail'>
    <img src="https://livedemo00.template-help.com/woocommerce_49164/wp-content/uploads/2014/04/icon_1.png" title="Iphones" alt=""/></span>
    <h5 style={{margin:18,fontSize:38}}>Iphones</h5>
    <p style={{paddingTop:45}}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</p>
 
  </div>

  <div className='banner-wrap'  style={{background:'#68217a'}}>
  <span className='featured-thumbnail'><img src="https://livedemo00.template-help.com/woocommerce_49164/wp-content/uploads/2014/04/icon_2.png" title="Windows Phones" alt="" /></span>
  <h5 style={{margin:18,fontSize:38}}>Windows Phones</h5>
  <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</p>
  </div>

  <div className='banner-wrap'  style={{background:'#8bc017'}}>
  <span className='featured-thumbnail'><img src="https://livedemo00.template-help.com/woocommerce_49164/wp-content/uploads/2014/04/icon_3.png" title="Android Phones" alt=""/></span>
  <h5 style={{margin:18, fontSize:38}}>Android Phones</h5>
  <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</p>
  </div>
</div>
</div>
  )
  }

export default Slideshow