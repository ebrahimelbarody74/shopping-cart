import React from "react";
import "../../css/Fliter/Fliter.css";
export default function Fliter(props) {
  return (
    <div className="fliter">
      <h2 className="filter-title">Filter</h2>
      <div className="row">
        <p>Number of Products: 4 Products</p>
        <div className="filter-size">
          <span>Filter</span>
          <select value={props.size} onChange={props.handelSize}>
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
          <select value={props.order} onChange={props.handelOrder}>
            <option value="Lastest">Lastest</option>
            <option value="Lowest">Lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
