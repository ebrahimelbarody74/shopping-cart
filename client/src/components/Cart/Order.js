import React from "react";
import Modal from "react-modal"

function Order({ order, setOrder, cartItems }) {
  return (
    <Modal isOpen={order} onRequestClose={() => setOrder(false)}>
      <div className="order-info">
        <span onClick={() => setOrder(false)}>&times;</span>
        <p className="alert-success">order done success</p>
        <table>
          <tr>
            <td>Name:</td>
            <td>{order.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{order.email}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              $
              {cartItems.reduce((e, a) => {
                return e + a.price * +a.Qty;
              }, 0)}
            </td>
          </tr>
          <tr>
            <td>total product</td>
            <td>
              {cartItems.map((e) => (
                <div className="cart-data">
                  <p>
                    Title of product is {e.title} and number is {e.Qty}
                  </p>
                </div>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </Modal>
  );
}

export default Order;
