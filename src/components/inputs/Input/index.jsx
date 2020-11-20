import React from "react";

import "./Input.scss";

const Input = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      name={name}
      type="text"
      className="input-field"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
