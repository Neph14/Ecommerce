import React, { useState } from "react";

const CartProductItems = (props) => {
  const [quantity, setquantity] = useState(1);

  const quantityHandler = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setquantity(newQuantity);
  };

  const subtotal = props.price * quantity;
  const formatSubtotal = subtotal.toFixed(2);

  return (
    <div className=" text-sm lg:text-base font-poppins flex  justify-between w-full px-3 shadow py-2 text-center items-center">
      <div className=" flex flex-col lg:flex-row items-center w-3/12 pl-0 lg:pl-3 gap-2 lg:lg-0">
        <img
          className="object-contain object-center w-1/2 lg:w-[30%]"
          src={props.image}
          alt="ProductImage"
        />
        <p className="pl-0 lg:pl-4 font-poppins text-xs lg:text-base text-left">
          {props.nameProduct}
        </p>
      </div>
      <div className=" w-3/12  ">
        <h1>${props.price}</h1>
      </div>
      <div className="w-3/12 ">
        <div>
          <input
            type="number"
            id="quantity"
            min="1"
            max="100"
            value={quantity}
            className="border rounded-md px-2 w-4/5 text-gray-500 lg:w-1/2"
            onChange={quantityHandler}
          />
        </div>
      </div>
      <div className="w-3/12 ">
        <h1>${formatSubtotal}</h1>
      </div>
    </div>
  );
};

export default CartProductItems;
