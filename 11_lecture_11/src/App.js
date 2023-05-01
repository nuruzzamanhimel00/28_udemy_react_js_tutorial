import React, { useState } from "react";
import Header from "./Components/UI/Header.js";
import Meals from "./Components/Meals/Meals.js";
import Cart from "./Components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}

      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
