import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item ||{};
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
if (!id) return null;
  return (
    <div className="cartitem_container">
      <div className="cartitem_layout">
        <h3>{title}</h3>
        <div>
          Rs. {totalPrice.toFixed(2)} (Rs. {price.toFixed(2)}/item)
        </div>
        <div>Qty: {quantity}</div>
      </div>
      <div className="btn_layout">
        <button className="decrement_btn" onClick={removeItemHandler}>
          −
        </button>
        <button className="increment_btn" onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;