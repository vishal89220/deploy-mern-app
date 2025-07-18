
import Bnrslider from './Bnrslider'
import Arrivals from './Arrivals'
import Selling from './Selling'
import Service from './Service';
import Blog from './Blog';
import Instapage from '../Instapage';
import Products from './Products';

import Footers from './Footer'

function Main({allList,setAllList}) {


  return (
    <>
   
      <Bnrslider />
      <Products allList={allList} setAllList={setAllList} />
      <Arrivals />
      <Selling />
      <Service />
      <Blog />
      <Instapage />
      <Footers/>
    </>
  )
}

export default Main;