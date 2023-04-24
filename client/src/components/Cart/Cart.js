import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeToCart } from "../../store/actions/cart";
import Modal from "react-modal";
import Order from "./Order";
import { createOrder, clearOrder } from "../../store/actions/order";

function Cart(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");
  // const [order, setOrder] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    props.createOrder(order);
  };
  const closeModel = () => {
    props.clearOrder();
    setIsOpen(false);
  };
  const changeValue = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Bounce bottom cascade>
      <div className="cart">
        <div className="cart-title">
          <h3>There is {props.add.length} Items In Cart</h3>
        </div>
        <Order
          order={props.order}
          closeModel={closeModel}
          // setOrder={setOrder}
          cartItems={props.cartItems}
        ></Order>
        {props.cartItems.map((p) => (
          <div className="box" key={p.id}>
            <img src={p.imageurl} />
            <div className="cart-info">
              <span>{p.title}</span>
              <span>Qty:{p.Qty}</span>
              <span>Price: ${p.price}</span>
            </div>
            <button onClick={() => props.removeToCart(p)}>Remove</button>
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
    </Bounce>
  );
}
export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
      order: state.order.order,
    };
  },
  { removeToCart, createOrder, clearOrder }
)(Cart);
