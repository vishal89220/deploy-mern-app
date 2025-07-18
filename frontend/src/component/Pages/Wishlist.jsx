import React from 'react'
import Service from '../Service'
import Instapage from '../../Instapage'




function Wishlist({ allList,setAllList }) {

  console.log(allList)

  const removeFromWishlist = (id) => {
    const updatedList = allList.filter(product => product.id !== id);
    setAllList(updatedList);
  }
 
  return (
    <>
      <div className='container'>
        <div className='row  wishlist-data'>

          <h3>Wishlist</h3>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
           
                <th>Title</th>
                <th>Stock Status</th>

              </tr>
            </thead>
            <tbody>

              {
                allList.map((product) => {
                  return (
                    // <>
                      <tr>
                        <td>
                          <div className='whishlist-img' >
                            <img src={product.image}  />
                          </div>
                        </td>
                      
                        <td>{product?.price}</td>
                        <td>{product?.description}</td>
                        <td>{product?.title}</td>

                        <td>
                          <button className='btn btn-danger' onClick={()=> removeFromWishlist(product.id)}>Remove</button>
                        </td>
                      </tr>
                    // </>


                  )
                })
              }

            </tbody>
          </table>
        </div>
      
      </div>


      <Service />
      <Instapage />

    </>
  )
}

export default Wishlist