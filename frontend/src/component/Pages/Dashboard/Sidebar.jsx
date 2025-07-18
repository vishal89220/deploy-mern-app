import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { IoArrowDownOutline, IoDocumentTextOutline, IoHome, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosGift } from "react-icons/io";
const Sidebar = ({openSide ,OpenSidebar}) => {
  return (
    <>
    <aside id="sidebar" className={openSide ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> FlatLogic
        </div>
        <span className='icon close-icon' onClick={OpenSidebar}>x</span>

        </div>
        <ul className='sidebar-list'>
           <li className='sidebar-list-item'>
            <a href=''> <IoHome className='icon'/>Home</a>
          </li>

          <li className='sidebar-list-item'>
            <a href=''> <IoArrowDownOutline className='icon'/>Order</a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <IoArrowDownOutline className='icon'/>Feedback</a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <IoArrowDownOutline className='icon'/>Blog </a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <BsCart3 className='icon'/>Products</a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <FaRegUser className='icon'/>Users</a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <CgMenuLeftAlt className='icon'/>Category</a>
          </li>
          <li className='sidebar-list-item'>
            <a href=''> <IoDocumentTextOutline className='icon'/>MyProfile</a>
          </li>
           <li className='sidebar-list-item'>
            <a href=''> <IoSettingsOutline className='icon'/>Change Password</a>
          </li>
          
           <li className='sidebar-list-item'>
            <a href=''> <IoIosGift className='icon'/>Documentation</a>
          </li>
        </ul>
    </aside>
    </>
  )
}

export default Sidebar
