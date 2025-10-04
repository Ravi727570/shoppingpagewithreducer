import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []);


  return (
    <div className="cart_container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
            price: item.price,
          }}
        />
      ))}
    </div>
  );
};

export default Cart;