import React, { useState } from "react";
import "../../css/Products/Products.css";
import Modal from "react-modal";
import ProductModal from "./ProductModal";
export default function Products(props) {
  const [product, setProduct] = useState("");
  // const [isClose, setIsClose] = useState(true);

  const openProduct = (product) => {
    setProduct(product);
  };
  const close = () => {
    setProduct(false);
  };

  return (
    <div className="products">
      {props.products.map((product) => (
        <div className="cart" key={product.id}>
          <a href="#" onClick={() => openProduct(product)}>
            <img src={product.imageurl} alt={product.title}></img>
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
      <ProductModal product={product} close={close}></ProductModal>
    </div>
  );
}
