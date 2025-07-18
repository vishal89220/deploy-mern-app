import React from 'react'

function Blog() {
  return (
   <>
   <div  className='container   main-blog'>
     <h3>From our Blogs</h3>
    <p>Design your home interior story! Here are the latest trends, tips, and design tricks to help you out.</p>
    <div className='row' >
       <div className='blog-box01  col-xl-4 col-lg-4 col-md-4'>
          <div className='blog-box'> 
            <img src='./images/blog01-img.jpg' className='blog-img' />
            </div>
            <p>March 12, 2020</p>
            <h6>What is Shabby Chic?</h6>
            <a>Read More</a>
       </div>
       <div className='blog-box01 col-xl-4 col-lg-4 col-md-4'>
          <div className='blog-box'>
            <img src='./images/blog02-img.jpg' className='blog-img' />
            </div>
            <p>March 12, 2020</p>
            <h6>Best Examples of Maximalism</h6>
            <a>Read More</a>
       </div>
       <div className='blog-box01 col-xl-4 col-lg-4 col-md-4'>
          <div className='blog-box'>
            <img src='./images/blog03-img.jpg' className='blog-img' />
            </div>
            <p>March 12, 2020</p>
            <h6>What is Lorem Ipsum?
            </h6>
            <a>Read More</a>
       </div>
            
    </div>
    <button className='blog-btn'>VIEW MORE</button>
   </div>
   
   </>
  )
}

export default Blog