import React from "react";
import Productitem from "./Productitem";
import "./Product.css";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Fancy Chair", price: 49, description: "Ergonomic, stylish" },
  { id: "p2", title: "Gaming Laptop", price: 999, description: "Powerful machine for gaming" },
  { id: "p3", title: "Coffee Mug", price: 5, description: "Ceramic mug for hot drinks" },
];

const Product = () => {

  return (
    <div className="product_container">
      <h2 className="product_text" >Buy Your Favorite Products</h2>
      {DUMMY_PRODUCTS.map((product) => (
        <Productitem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Product;