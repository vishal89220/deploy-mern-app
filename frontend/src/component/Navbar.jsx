
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

 function Navbar() {
      
    //web link 
   // https://flatlogic-ecommerce.herokuapp.com/
  return (
    <>

<nav className="navbar navbar-expand-lg sticky-top ">
  <div className="container navlist">
    <div>
    <a className="navbar-brand" href="#">Flatlogic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          < Link to="/home" className="nav-link active" aria-current="page" onClick={()=>toast.success('HomeClick')}>Home</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/About" className="dropdown-item">About us </Link></li>
            <li><Link to="/Teampage" className="dropdown-item">About team</Link></li>
            <li><Link to="/Contact" className="dropdown-item">Contact team</Link></li>
            <li><Link to="/Faqs" className="dropdown-item">FAQs</Link></li>
            <li><Link to="/*" className="dropdown-item">404</Link></li>
            <li><Link to="/wishlist" className="dropdown-item">Wishlist</Link></li>
            <li><Link to="/login" className="dropdown-item">Login</Link></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/sidenav" className="dropdown-item" >Shop</Link></li>
            <li><Link to="" className="dropdown-item" >Categories</Link></li>
            <li><Link to="" className="dropdown-item" >Account</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button">
            Blog
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="" className="dropdown-item" href="#">Blog</Link ></li>
            <li><Link to="" className="dropdown-item" href="#">Blog Article</Link ></li>
          </ul>
        </li>
      </ul>
      
    </div>
    
    {/* icons div start */}
    <div className='nav-icon'>
    <i className="fa-solid fa-magnifying-glass"></i>
   <Link to='/login'> <i className="fa-regular fa-user"></i></Link>
    <i className="fa-solid fa-cart-shopping"></i>
    
    </div>

  </div>
</nav>
    <Outlet/>
    </>
  ) 
} 
export default Navbar;