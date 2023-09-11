import React from "react";
import CartProduct from "./Cartproduct";

const CartLayout = () => {
  return (
    <div className="w-full h-full mt-28 lg:pt-20">
      <div>
        <h2 className="font-poppins text-sm  lg:text-base ">
          <span className="opacity-50">Home </span>
          <span className="opacity-100"> / </span>
          <span className="opacity-100"> Cart</span>
        </h2>
      </div>
      <CartProduct />
    </div>
  );
};

export default CartLayout;
