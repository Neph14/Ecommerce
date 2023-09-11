import React from "react";

const Buttoncart = (props) => {
  return (
    <button
      className={`${props.warna} border-2  ${props.text}  font-poppins py-3 px-8  lg:py-2 lg:px-8 rounded  hover:text-white hover:bg-[#DB4444]  duration-500`}
    >
      {props.children}
    </button>
  );
};

export default Buttoncart;
