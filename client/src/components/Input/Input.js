import React from "react";

function Input(props) {
  const { label, type, name, changeValue } = props;
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} onChange={changeValue} required></input>
    </div>
  );
}

export default Input;
