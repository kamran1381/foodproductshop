import React, { useContext } from 'react';
import { NavLink, Outlet , Link , useNavigate } from 'react-router-dom';
import './Adminp.css';
import {AuthContext} from '../../context/AuthContext'

const Sidebar = () => {
  const {setIsUserLoggedin , setUserId , setUserInfo} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogOut = () =>{
    setIsUserLoggedin(prev => !prev)
    setUserId(null)
    setUserInfo(null)
    navigate('/')
    console.log('you have logged off')
  }

  return (
    <div className="sidebar">
      <ul>

        <li>
          <NavLink to="productadd">ProductAdd</NavLink>
        </li>

        <li>
          <button className='bg-gray-500' onClick={handleLogOut} >log out</button>
        </li>

      </ul>
    </div>
  );
};



export default function Adminac() {

  return (
    <div className="account">
    <Sidebar  />
    <div className="user-info">

    </div>

    <div className="dashboard-content">

      <Outlet />

    </div>
  </div>
  );
}
