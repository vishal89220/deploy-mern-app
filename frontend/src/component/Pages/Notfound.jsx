import React from 'react'
import Instapage from '../../Instapage'

function Notfound() {
  return (
 <>
    <div className='container'>
            <div className=' page-404 '>
                <div className='row'>
                    
               <div className='col-xl-6 col-md-6 col-lg-6' ></div>
               
                <div className=' col-xl-6 col-md-6 col-lg-6  notify-404'>
                    <h3>OOPS!</h3>
                    <h4>Something's Missing</h4>
                    <p>Unfortunately, We cannot Find this Page You are looking for. Thought, we tried... </p>
                    <button>TAKE ME AWAY</button>
                </div>
                </div>
            </div>

    </div>

 <Instapage/>
 </>
  )
}

export default Notfound;