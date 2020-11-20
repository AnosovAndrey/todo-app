import React from "react";

import "./Input.scss";

const Input = ({value, placeholder, onChange}) => {
  return (
    <input
      type="text"
      className="input-field"
      value={value}
      placeholder = {placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
