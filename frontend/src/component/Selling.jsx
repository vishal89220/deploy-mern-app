import React from 'react'


function Selling() {
  const  sellprd =[
    {
      image:"./images/sell-prd02.jpg"

    },
    {
      image:"./images/sell-prd03.jpg"

    },
    {
      image:"./images/sell-prd04.jpg"

    },
    {
      image:"./images/sell-prd05.jpg",

    }
   
  ]
  
  const  sell_data =sellprd.map((data, index)=> (
    <div key={index} className='col-xl-6  col-lg-6 col-md-6 mt-2' >
      <div className='prdcart-set'>
      <img src={data.image} className='prd-image'  />
      
      </div>
    </div>
))
  return (
    <>
    <section className='container' >
        <div className='row'>
            <div className='sell-intro col-xl-12 col-lg-12 col-md-12'>
            <h3>Top Selling Products</h3>
            <p>These funrniture sets will because an essential part of an ecosystem of 
                element in your home your domesstic space will easily embrace these tables chairs and bookshleesvs 
            </p>
            </div>
            <div className='sell-img01 col-xl-6 col-lg-6 col-md-6'>
              
                  <h5>   ALL NEW</h5>
                  <h3>SPRING THINGS</h3>
                  <div className='sell-dash' ></div>
                  <p>Save up to 30%</p>
               
            </div>

            <div className='sell-img02 col-xl-6 col-md-6 col-lg-6'>
                  
                  
                <div className=' row sell-image '>
                  
                     {sell_data}

                </div>

            </div>

        </div>
    </section>
   
    </>
  )
}

export default Selling