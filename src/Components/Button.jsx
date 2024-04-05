import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={"px-[60px] py-2 rounded-md text-white bg-primary mt-3"}>
      {children}
    </button>
  );
};

export default Button;
