import React, { useState } from "react";
import "./Cart.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Cart(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  const changeValue = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const closeForm = () => {
  //   ;
  // };
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
          <button onClick={() => setIsOpen(true)}>select products</button>
        </div>
      )}
      <CheckoutForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handelSubmit={handelSubmit}
        changeValue={changeValue}
      ></CheckoutForm>
    </div>
  );
}
export default Cart;
