import React from "react";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";

function CheckoutForm(props) {
  const { isOpen, setIsOpen, handelSubmit, changeValue } = props;
  return (
    <div>
      {isOpen && (
        <div className="checkout-form">
          <span onClick={() => setIsOpen(false)}>&times;</span>
          <Zoom left>
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
          </Zoom>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
