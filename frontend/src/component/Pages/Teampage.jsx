import React from 'react'
import Instapage from '../../Instapage'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'

function Teampage() {
     const teamcart =[
        {
           image:"./imgpages/person1.jpg",
           name: "Andreas Walter",
           position: "CEO / Art Creative Manager",
           icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
        },
        {
            image:"./imgpages/person2.jpg",
            name: "Phoenix Houston",
            position: "Founder / World Traveller",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person3.jpg",
            name: "Maria Lennon",
            position: "Design Consult",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person4.jpg",
            name: "John-James Mosley",
            position: "Digital Marketing Guru",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person5.jpg",
            name: "Daryl Peters",
            position: "Director of Operation",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person6.jpg",
            name: "Arianne Savage",
            position: "Project Manager / Technical Lead",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person7.jpg",
            name: "Anisa Devine",
            position: "Director of Showroom Design",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         },
         {
            image:"./imgpages/person8.jpg",
            name: "Ashwin Chaney",
            position: "Customer Service Manager",
            icons : [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>]
         }
     ]

     const team = teamcart.map( (Tdata)=> (
              <div className='col-xl-3 col-lg-3 col-md-3'>
                <div className='team-set'>
                    <img src={Tdata.image}/>
                    <h6>{Tdata.name}</h6>
                    <p>{Tdata.position}</p>
                     <span>{Tdata.icons[0]}</span>
                     <span>{Tdata.icons[1]}</span>
                     <span>{Tdata.icons[2]}</span>
                </div>
              </div>
     ) )
  return (
 <>
    <div className='container team-head'>

        <h3>Meet the team who dares to create differently.</h3>
    <div className='row'>
            {team}
    </div>
    </div>

 <Instapage/>
 </>
  )
}

export default Teampage