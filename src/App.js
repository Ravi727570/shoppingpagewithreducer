// App.js
import React from "react";
import { useSelector } from "react-redux";
import Layoutheader from "./components/layout/Layoutheader";
import Cart from "./components/cart/Cart";
import CartItem from "./components/cart/CartItem";
import Product from "./components/shop/Product";
//import Ui from "./components/ui/Ui";

function App() {
  const showCart = useSelector((state) => state.cart.isVisible);

  return (
    <div>
      <Layoutheader />
      <Product/>
      {showCart && <Cart />}
      <CartItem />
    </div>
  );
}

export default App;
