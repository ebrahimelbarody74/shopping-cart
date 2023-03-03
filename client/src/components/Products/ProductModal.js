import React from "react";
import Modal from "react-modal";

export default function ProductModal({ product, close }) {
  return (
    <Modal isOpen={product ? true : false}>
      <div className="product-info">
        <span onClick={() => close()}>&times;</span>
        <img src={product.imageurl} alt={product.title}></img>
        <p>{product.title}</p>
        <p>Price : ${product.price}</p>
      </div>
    </Modal>
  );
}
