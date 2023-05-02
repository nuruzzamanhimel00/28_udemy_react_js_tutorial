import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "add") {
  } else if (action.type == "remove") {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartStateAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartStateAction({
      type: "add",
      item: item,
    });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartStateAction({
      type: "remove",
      id: id,
    });
  };

  const cartData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
