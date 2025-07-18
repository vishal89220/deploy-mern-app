
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


import Products from "../Products";
import Instapage from "../../Instapage";
import Service from "../Service";
import Footer from "../Footer"
import productlist from "./Data";



 function Viewmore() {
  return (
    <>
   <div className="container-fluid pt-4">
    <div className="row">
  
  <div className="col-xl-3 col-lg-3 col-md-3   sidebar">
       <h3>CATEGORIES</h3>

   <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item to="#" >
            <input   type="checkbox" />
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item to="#"   labelColor="dark">
          <input type="checkbox" />
            Kanban
          </Sidebar.Item>
          <Sidebar.Item to="#" label="3">
          <input type="checkbox" />
            Inbox
          </Sidebar.Item>
          <Sidebar.Item to="#" >
          <input type="checkbox" />
            Users
          </Sidebar.Item>
          <Sidebar.Item to="#" >
          <input type="checkbox" />
            Products
          </Sidebar.Item>
          <Sidebar.Item to="#" >
          <input type="checkbox" />
            Sign In
          </Sidebar.Item>
          <Sidebar.Item to="#">
          <input type="checkbox" />
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>


  <div  className="col-xl-9 col-md-9 col-lg-9">
  <div className="container-fluid">
    <div className="row">
     {
      productlist.map((item) => {
        return(
          <div key={item.id}  className="  col-md-3 col-sm-3 col-lg-3 col-xl-3 " > 
            <div>
            <div className="">
  <img src={item.image} alt="image" className="img-fluid" />
</div>

             
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              
            </div>
          </div>
        )
      })
     }

    </div>
    </div>  
  
  </div>
    <div className="container-fluid px-0 py-5">
            <Service/>
     </div>
 

    <Instapage/>
    <Footer/>


    </div>
   </div>
 
   </>
  )
}
export default Viewmore ;