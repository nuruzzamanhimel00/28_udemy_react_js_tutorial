import React from "react";
import Header from './Components/UI/Header.js'
import Meals from './Components/Meals/Meals.js'
import Cart from './Components/Cart/Cart.js'

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
