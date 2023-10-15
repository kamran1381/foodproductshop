
import React, { useEffect, useState, useContext, useRef } from 'react';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { AuthContext } from './context/AuthContext';
import { SearchQueryContext } from '../src/context/SearchQueryContext';
import reactStringReplace from 'react-string-replace';
function App() {
  const router = useRoutes(routes);
  const { setIsUserLoggedin, setUserId, setUserInfo } = useContext(AuthContext);
  const { SearchQuery } = useContext(SearchQueryContext);

  useEffect(() => {
    const userid = localStorage.getItem('userId');


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
      <div className='Main-application '>
      <div className="parallax-container" >
          <div className="foreground">
            {router}
          </div>
          <div className="background"></div>
        </div>
      </div>
    </>
  );
}

export default App;
