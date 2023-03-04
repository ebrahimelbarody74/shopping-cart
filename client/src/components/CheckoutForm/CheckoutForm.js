import React from "react";
import Input from "../Input/Input";

function CheckoutForm(props) {
  const { isOpen, setIsOpen, handelSubmit, changeValue } = props;
  return (
    <div>
      {isOpen && (
        <div className="checkout-form">
          <span onClick={() => setIsOpen(false)}>&times;</span>
          <form onSubmit={handelSubmit}>
            <Input
              type="text"
              name="name"
              label="Name"
              changeValue={changeValue}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              changeValue={changeValue}
            />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
