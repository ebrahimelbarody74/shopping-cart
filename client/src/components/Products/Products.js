import React from "react";
import "../../css/Products/Products.css";
export default function Products(props) {
  return (
    <div className="products">
      {props.products.map((product) => (
        <div className="cart" key={product.id}>
          <img src={product.imageurl} alt={product.title}></img>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}
