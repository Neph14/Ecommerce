import React from "react";
import { Link } from "react-router-dom";

const CartTotal = (props) => {
  return (
    <div className=" w-[100%] pt-3 py-3 font-poppins border-[2px] rounded-sm ">
      <div className=" flex flex-col gap-3 px-4  lg:py-3">
        <h1 className="font-bold">Cart Total</h1>
        <div className="flex justify-between border-b-[1px] border-gray-500 border-opacity-40 py-1 lg:py-2">
          <h1>Subtotal</h1>
          <h1>${props.formatSubtotal}</h1>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-500 border-opacity-40 lg:py-2">
          <h1>Shiping</h1>
          <h1>free</h1>
        </div>
        <div className="flex justify-between  lg:py-2">
          <h1>Total</h1>
          <h1>$3000</h1>
        </div>
        <div className=" pt-3   flex justify-center lg:px-36">
          <Link to="/checkout">
            <button
              className={`bg-[#DB4444] border-2 text-white font-poppins py-3 px-8  lg:py-2 lg:px-8 rounded  hover:text-white hover:bg-[#DB4444]  duration-500`}
            >
              Procees To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
