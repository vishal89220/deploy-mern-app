
import { GrFormNextLink ,} from "react-icons/gr";
import { Link } from 'react-router-dom';
 function Bnrslider() {
  return (
   
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active myslide">
        <img src="./images/banr02.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption front-page ">
            <p>Chair</p>
          <h4>get all</h4>
          <h2>THE GOOD STUFF</h2>
          <Link to="/view"> <button className='slid-btn'><span>VIEW MORE <GrFormNextLink className='airow' /></span> </button> </Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/banr03.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption  front-page ">
        <p>Chair</p>
          <h4>get all</h4>
          <h2>THE GOOD STUFF</h2>
          <Link to="/view"> <button className='slid-btn'><span>VIEW MORE <GrFormNextLink className='airow' /></span></button> </Link> 
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/imgh3.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption front-page">
        <p>Chair</p>
          <h4>get all</h4>
          <h2>THE GOOD STUFF</h2>
          <Link to="/view"> <button className='slid-btn' ><span>VIEW MORE <GrFormNextLink className='airow' /></span></button></Link> 
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    
  )
}
export default Bnrslider;