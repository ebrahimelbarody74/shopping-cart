import React from "react";
import "./Cart.scss";

export default function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-title">
        <h3>There is {props.add.length} Items In Cart</h3>
      </div>
      {props.add.map((p) => (
        <div className="box" key={p.id}>
          <img src={p.imageurl} />
          <div className="cart-info">
            <span>{p.title}</span>
            <span>Qty:{p.Qty}</span>
            <span>Price: ${p.price}</span>
          </div>
          <button onClick={() => props.removeProduct(p)}>Remove</button>
        </div>
      ))}
      {props.add.length > 0 && (
        <div className="total">
          <span>total Price: ${props.price}</span>
          <button>select products</button>
        </div>
      )}
    </div>
  );
}
