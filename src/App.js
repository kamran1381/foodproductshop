
import React, { useEffect, useState, useContext, useRef } from 'react';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { AuthContext } from './context/AuthContext';
import { SearchQueryContext } from '../src/context/SearchQueryContext';
import Layout from './Components/Layout/Layout';
function App() {
  const router = useRoutes(routes);
  const { setIsUserLoggedin, setUserId, setUserInfo } = useContext(AuthContext);
  const { SearchQuery } = useContext(SearchQueryContext);

  useEffect(() => {
    const userid = localStorage.getItem('userId');
    // const threescript = document.createElement('script');
    // threescript.id = 'threescript';
    // threescript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';

    // Append the script tag to the end of the body
    // document.body.appendChild(threescript);
  
    //  return () =>{
    //   const scriptElement = document.getElementById('threescript');
    //   if (scriptElement) {
    //     scriptElement.remove();
    //   }
    //  }

    // if (userid) {
    //   setIsUserLoggedin(true);
    //   setUserId(userid);
    //   fetch(`http://localhost:3500/users/${userid}`)
    //     .then((res) => res.json())
    //     .then((userData) => setUserInfo(userData));
    // } else {
    //   setIsUserLoggedin(false);
    //   setUserId(null);
    //   setUserInfo(null);
    // }
  },[]);

  return (
    <>
     <Layout>
      <div className='Main-application '>
      <div className="parallax-container" >
          <div className="foreground">
            {router}
          </div>
          <div className="background"></div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default App;
