import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log('before useEffect');
  useEffect(()=>{
    // console.log('useEffect');
    const localStorageUserLoggedinInfo = parseInt(localStorage.getItem('userLoggedin'));
    if(localStorageUserLoggedinInfo === 1){
      // console.log('localStorageUserLoggedinInfo',localStorageUserLoggedinInfo);
      setIsLoggedIn(true);
    }
  },[]);
  // console.log('after useEffect');

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('userLoggedin',1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
