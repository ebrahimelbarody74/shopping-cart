import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "./type";
import axios from "axios";
export const createOrder = async (order) => {
  return async (dispatch) => {
    const res = await axios.post(
      "https://shopping-cart-fi6j.onrender.com/api/orders",
      order
    );
    localStorage.clear("cartItems");
    dispatch({
      type: CREATE_ORDER,
      data: {
        order: res.data,
      },
    });
  };
};

export const clearOrder = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ORDER,
    });
  };
};
