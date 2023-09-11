import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#DB4444] text-white font-sans py-2 px-6 rounded lg:ml-8 hover:bg-red-800 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
