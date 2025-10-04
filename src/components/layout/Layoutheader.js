import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Layoutheader.css";

const Layoutheader = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };


  return (
    <div className="layout_container">
        <div className="nav_layout">
            <div className="nav_bar">
                <h1 className="text_myshop">My Shop</h1>
                <button className="totalquntity_btn" onClick={toggleCartHandler}>
                    My Cart ({totalQuantity})
                </button>
            </div>
        </div>
    </div>
  );
};

export default Layoutheader;