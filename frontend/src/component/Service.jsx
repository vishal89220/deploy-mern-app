import React from 'react'
import { FaRecycle } from 'react-icons/fa'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri'

function Service() {
  return (
    <div className='container' >
    <div className='row  serv-line'>
      
      <div className='service  col-xl-4 col-md-4 col-lg-4'>
      <span><MdOutlineLocalShipping className='serv-logo'/></span>
      <div className='serv-info'>
      <h5> FREE SHIPPING</h5>
      <p>on all orders of $ 150</p>
      </div>
      
      </div>
      <div className='service col-xl-4 col-md-4 col-lg-4'>
      <span><RiCustomerService2Line className='serv-logo' /></span> 
      <div className='serv-info'>
      <h5> 24/7 SUPPORT</h5>
      <p>Get help when you need it</p>
      </div>

      </div>  

      <div className='service col-xl-4 col-md-4 col-lg-4'>
      <span><FaRecycle className='serv-logo' /></span>

      <div className='serv-info'>
      <h5> 100% MONEY BACK</h5>
      <p>on all orders of $ 150</p>
      </div>
     
      </div>

    </div>
    </div>
  )
}

export default Service