import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet , Link , useNavigate } from 'react-router-dom';
import './Account.css';
import { AuthContext } from '../../context/authContext';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      <li>
          <NavLink to="dashboard">Dasboard</NavLink>
        </li>
        <li>
          <NavLink to="orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="info">Info</NavLink>
        </li>
        {/* <Link to="/admin">Adminac</Link> */}

      </ul>
    </div>
  );
};



export default function Account() {
  const {userId} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
   
    
   if(!userId){
     navigate("/")
   }
  
  },[userId])

  return (
    <div className="account">
    <Sidebar />
    <div className="user-info">

    </div>

    <div className="dashboard-content">

      <Outlet />

    </div>
  </div>
  );
}
