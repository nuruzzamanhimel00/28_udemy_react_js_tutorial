import React, { useState} from "react";
import Header from './Components/UI/Header.js'
import Meals from './Components/Meals/Meals.js'
import Cart from './Components/Cart/Cart.js'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true);
  }

  const hideCartHandler = () =>{
    setCartIsShow(false);
  }

  return (
    <>
      { cartIsShow && <Cart onClose={hideCartHandler} /> }
      
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
