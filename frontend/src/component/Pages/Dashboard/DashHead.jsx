import React, { useEffect, useState } from 'react'
import { BsFillBellFill, BsFillEnvelopePaperFill, BsJustify, BsPersonCircle, BsSearch } from "react-icons/bs";
import { IoSettingsOutline } from 'react-icons/io5';

import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
const DashHead = ({OpenSidebar}) => {

  const [logPage , setLogPage] = useState(false)

  const UserLogs = ()=> {
    setLogPage(pre => !pre)
  }

  const closeModal = () => {
    setLogPage(false);
  };






  const  navigate = useNavigate()
  const [UserLogged , setUserLogged] =useState('')
      
 useEffect( ()=> {
  setUserLogged(localStorage.getItem('UserLoggedIn'))
 },[]);

 const handleLogout = ()=> {
    setUserLogged(localStorage.removeItem('UserLoggedIn'));
    setUserLogged(localStorage.removeItem('token'))
    setTimeout( ()=>{
      navigate('/login')
    } , 1000)
 }

  return (
    <>
    <header className='header'>
        <div className='menu-icons'>
        <CgMenuLeftAlt className="menu-icon" onClick={OpenSidebar} />

        </div>
        <div className='header-left '>
        {/* <BsSearch className="search-icon" /> */}
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
        <div className='header-right'>
         
          <BsPersonCircle  className='UserIcon'/>
          <span className='username'>{UserLogged}</span>
          <IoSettingsOutline 
           onClick={UserLogs}
          className='icon'
          style={{ cursor: 'pointer' }}
          />
          {logPage && (
            <div className="settings-modal">
              <div className="modal-header">
            
                <IoMdClose onClick={closeModal} className="close-btn" />
              </div>
              <ul>
                <li>Account</li>
                <li>Profile</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
    </header>
    </>
  )
}

export default DashHead
