import React from "react";

const InputCheckout = (props) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="firstname"
        className="font-poppins font-medium  text-sm opacity-40"
      >
        {props.name}
      </label>
      <input
        type="firstname"
        className=" w-full lg:w-[80%] h-12 bg-neutral-100 "
      />
    </div>
  );
};

export default InputCheckout;
