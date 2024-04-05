import React from "react";

const Input = ({ placeholder, type, className, handleInputChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={handleInputChange}
    />
  );
};

export default Input;
