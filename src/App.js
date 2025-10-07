// App.js
import React from "react";
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import Layoutheader from "./components/layout/Layoutheader";
import Cart from "./components/cart/Cart";
import CartItem from "./components/cart/CartItem";
import Product from "./components/shop/Product";
//import Ui from "./components/ui/Ui";
import Notification from "./components/cart/Notification";
import CartDataHandler from "./components/cart/CartDataHandler";
import { fetchCartData } from "./components/store/cartAction";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.isVisible);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
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
