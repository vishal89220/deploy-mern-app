import React from "react";
import Footers from '../Footer'
function About() {
  return (
    <>
    <div className='container  about-intro '>
      <div className='row'>
            <h4>About Us</h4>

        <div className='col-xl-7 col-lg-7 col-md-7'>
          <div className='row'>
          <div className='  about-data col-xl-12 col-lg-12 col-md-12'>

          <h6>TECHNOLOGY</h6>
           <h4>Sustainable Furniture Rocks This Words ! Check Out  New  Minimalistic Wooden  Collection</h4>
           <p>There is no denying that eco-friendly materials can easily conqure the market but can we  prduce enough  to fulfill the growing demands ? Can we create an astonishing look for the new collection of eco-friendly furniture? That is a tough question. But did make an effort!</p>
            <div className='para-line'>
                 <div></div>
           </div>
          </div>

          <div className=' about-data  col-xl-12 col-lg-12 col-md-12'>
            <h6>INTERIOR</h6>
            <h4>Primary Palette Can Allow You To Be Bold! Give Your Interior Artistic Edge</h4>
            <p>Use this well-known tip for mixing two primary colors with a trendy muted palette. Neutral spaces with wooden furniture can be changed within a minutes using the right set of vibrant colors. Such interior design helps you to stand out from ordinary palettes.</p>
            <div className='para-line'>
                 <div></div>
           </div>
          </div>

          <div className=' about-data  col-xl-12 col-lg-12 col-md-12'>
            <h6>DESIGN</h6>
            <h4>Check Out The Latest Design Trends! Minimalism, Stripes, and Sculptural Furniture</h4>
            <p>Let's mix stripes and checks - everyone's favorite patterns. New-season colors add the right balance to this awesome mix. Even in bedroom decor you can use this fun new trend along with classic cushions and delicate color scheme or love colorful decoration.</p>
            <div className='para-line'>
                 <div></div>
           </div>
          </div>
          </div>
           
        </div>

        <div className='col-xl-5 col-lg-5 col-md-5'>
          <div className='abt-img col-xl-12 col-lg-12 col-md-12'>
          <img  src='./images/about-img01.png'/>
          </div>
          <div className='abt-img  img02 col-xl-12 col-lg-12 col-md-12'>
          <img  src='./images/about-img01.png'/>
          </div>
         
        </div>
      </div>
    </div>
    <Footers/>
    </>
  )
}

export default About ;