import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartData = {
    items: [],
    totalAmount: 0,
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
