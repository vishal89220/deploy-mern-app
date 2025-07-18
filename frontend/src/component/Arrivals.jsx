import React from 'react'

function Arrivals() {
  return (
   <>
   <section className='container-fluid   main-arriv'>
    <div className='row'>
         
      <div className=' arriv01 col-xl-6 col-lg-6 col-md-6'>
         <p>NEWS AND INSPIRATION</p>
            <h1> <span className='' > NEW</span> ARRIVALS</h1>
            <div className='arriv-dash' ></div>

            <div className='arriv-time'>
                <div className='box'>
                <span>12</span>
                <p>days</p>  
                </div>

                <div className='box'>
                <span>08</span>
                <p>hours</p>  
                </div >

                <div className='box'>
                <span>45</span>
                <p>mins</p>  
                </div>

                <div className='box'>
                <span>55</span>
                <p>secs</p>  
                </div>
                    
            </div>


<p className='flat'>
  <strike>$140,56</strike>
  <span className='d-inline'>$70</span>
</p>

            </div>
            <div className='arriv02  arriv-img  col-xl-6 col-lg-6 col-md-6 col-sm-6 '>
              
         </div>
    </div>
   </section>
   
   </>
  )
}

export default Arrivals;