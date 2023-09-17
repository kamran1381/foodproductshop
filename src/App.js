import React, { useEffect, useState , useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import {AuthContext} from './context/AuthContext'

function App() {
  const router = useRoutes(routes);
  const {setIsUserLoggedin ,  setUserId , setUserInfo}  = useContext(AuthContext)
  useEffect(() => {
    const userid = localStorage.getItem('userId')

    if(userid){
      setIsUserLoggedin(true)
      setUserId(userid)
      fetch(`http://localhost:3500/users/${userid}`)
      .then(res => res.json())
      .then(userData => setUserInfo(userData))
    }else{
      setIsUserLoggedin(false)
      setUserId(null)
      setUserInfo(null)

    }
  
    

  }, []);


  return (
   
      <>
        <div className='Main-application'>
          {router}
        </div>
      </>
   
  );
}

export default App;
