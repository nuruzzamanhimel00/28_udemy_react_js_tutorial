import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{},
    onLogin: (email, password) =>{}
});

export const AuthContextProvider = (props) =>{
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

    return (<AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin : loginHandler
    }}>
        {props.children}
        </AuthContext.Provider>)
}

export default AuthContext;