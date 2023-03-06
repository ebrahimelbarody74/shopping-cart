import React from "react";
import "../../css/Fliter/Fliter.css";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";

import { handelSize, handelPrice } from "../../store/actions/products";

function Fliter(props) {
  return (
    <Flip left>
      {props.filterProducts && (
        <div className="fliter">
          <h2 className="filter-title">Filter</h2>
          <div className="row">
            <p>Number of Products: {props.filterProducts.length} Products</p>
            <div className="filter-size">
              <span>Filter</span>
              <select
                value={props.size}
                onChange={(e) =>
                  props.handelSize(props.products, e.target.value)
                }
              >
                <option value="All">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="filter-order">
              <span>Order</span>
              <select
                value={props.sort}
                onChange={(e) =>
                  props.handelPrice(props.filterProducts, e.target.value)
                }
              >
                <option value="Lastest">Lastest</option>
                <option value="Lowest">Lowest</option>
                <option value="highest">highest</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </Flip>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  { handelSize, handelPrice }
)(Fliter);
