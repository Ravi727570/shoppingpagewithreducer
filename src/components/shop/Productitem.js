import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Productitem.css";

const Productitem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  
  return (
    <div className="productitem_container">
      <div className="productitem_layout">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>Rs. {props.price.toFixed(2)}</p>
      </div>
      <button className="add_btn" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default Productitem;