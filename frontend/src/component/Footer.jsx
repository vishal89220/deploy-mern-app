import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Footers() {
  return (
    <>
    <section className=' footer-box'>
      <div className='container'>
    <div className='row'>
   
       <div className='col-xl-12 col-lg-12'>
        <div className='row'>
      <div className='foot-main01 col-xl-6 col-lg-6 col-md-6'>
         <h5>Many desktop publishing</h5>
         <p>Do you want to receive exclusive email offers? Subscribe to our newsletter! You will receive a unique promo code which gives you a 20% discount on all our products in 10 minutes.</p>
      </div>
      <div className='foot-main02 col-xl-6 col-lg-6 col-md-6'>
        <input  type='text' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
      </div>
      <hr/>
      </div>
      
      <div className='row'>
        <div className=' foot-main03 col-xl-5 col-lg-5 col-md-5'>
        <h5>Flatlogic</h5>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>  

          <ul className='logos'>
            <Link to="googal.com"><li><FaGoogle /></li></Link>
            <li><FaTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaFacebookF /></li>
          </ul>
        </div>

        <div className=' foot-main03 col-xl-2 col-lg-2 col-md-2'>
            <h6>COMPANY</h6>
            <ul>
                <li>What We Do  </li>
                <li>Available Service</li>
                <li>Letest Posts</li>
                <li>FAQs</li>
            </ul>
            </div>

        <div className=' foot-main03 col-xl-2 col-lg-2 col-md-2'>
            <h6>MY ACCOUNT</h6>
            <ul>
                <li>Sign in </li>
                <li>View Cart</li>
                <li>Order Tracking</li>
                <li>Help & Support</li>
            </ul>
            </div>

        <div className=' foot-main03 col-xl-3 col-lg-3 col-md-3'>
            <h6>CUSTOMER SERVICE</h6>
            <ul>
                <li>Help & Contact Us </li>
                <li>Returns & Refunds</li>
                <li>Online Stores</li>
                <li>Term & Condition</li>
            </ul>
        </div>
        <hr/>
        
      </div>
      <div className='name'>
      <p> @copyright 2024 Created by Vishal yadav </p>
      </div>
      
    </div>
    </div>
    </section>
    </>
  )
}

export default Footers