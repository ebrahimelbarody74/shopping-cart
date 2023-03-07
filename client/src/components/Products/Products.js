import React, { useEffect, useState } from "react";
import "../../css/Products/Products.css";
import Bounce from "react-reveal/Bounce";
import ProductModal from "./ProductModal";
import { connect } from "react-redux";
import { fetchProduct } from "../../store/actions/products";
import { addToCart } from "../../store/actions/cart";

function Products(props) {
  const [product, setProduct] = useState("");

  const openProduct = (product) => {
    setProduct(product);
  };
  const close = () => {
    setProduct(false);
  };
  useEffect(() => {
    props.fetchProduct();
  }, []);

  return (
    <Bounce left cascade>
      <div className="products">
        {props.products && props.products.length
          ? props.products.map((product) => (
              <div className="cart" key={product.id}>
                <a href="#" onClick={() => openProduct(product)}>
                  <img src={product.imageurl} alt={product.title}></img>
                </a>
                <div className="product-desc">
                  <p>{product.title}</p>
                  <span>${product.price}</span>
                </div>
                <button onClick={() => props.addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))
          : "loading"}
        <ProductModal product={product} close={close}></ProductModal>
      </div>
    </Bounce>
  );
}

export default connect(
  (state) => {
    return {
      products: state.products.filterProducts,
    };
  },
  { fetchProduct, addToCart }
)(Products);
