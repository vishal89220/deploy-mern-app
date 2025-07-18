
import React from "react";

import { FaRegHeart, FaSearchPlus } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import {Link} from "react-router-dom";


import productlist from './Pages/Data';
import { toast } from "react-toastify";

function Products({ allList, setAllList }) {
  const handleClick = (addProduct) => {

    setAllList([...allList, addProduct])
    toast.success('product added to wishList')
      
  }
  return (
    <div className='container  product-pg'>

      <h3 className="text-center fw-bold mb-4">New Arrivals</h3>
      <div className="justify-content-center mb-2 row">
        <div className="col-sm-8">
          <p className="text-center  mb-4">Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more. The new collection brings an informal elegance to your home.</p>

        </div>
      </div>

      <div className='row'>
        {
          productlist.map((product, index) => {
            
            return (
              <div key={product.id} className="col-md-3 col-sm-3 col-xl-3">
                <div className="card-set" >
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                   
                  <p className="card-text">{product.description}</p>
                    <h5 className="card-title text-black">{product.title}</h5>
                    
                    <p className="card-txt">Price: ${product.price}</p>

                    <div className='prd-icons' >
                      <div className='ic-area'>


                        <FaRegHeart className=' ic' onClick={() => handleClick(product)} />
                       <Link to="pop" >    <FaSearchPlus className='ic'/>  </Link> 
                        <FiShoppingCart className=' ic' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )

          })
        }
            
      </div>
      <button className='prd-btn'> <span>VIEW MORE</span></button>
    </div>


  )
}

export default Products;