import React, { useState, useContext } from "react";
import { Cartcontext } from "../UI/Context/Context";
import { Link } from "react-router-dom";

const CartProduct = (props) => {
  const [quantity, setquantity] = useState("1");
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;

  const quantityHandler = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setquantity(newQuantity);
  };

  const subtotal = props.price * quantity;
  const formatSubtotal = subtotal.toFixed(2);
  return (
    <div className=" w-full h-full flex flex-col gap-6 pt-5 lg:pt-10">
      <div className=" text-sm lg:text-base font-poppins flex text-center">
        <div className="w-3/12">Product</div>
        <div className="w-3/12">Price</div>
        <div className="w-3/12">Quantity</div>
        <div className="w-3/12">SubTotal</div>
      </div>
      <div>
        {state.map((item, index) => {
          return (
            <div
              key={index}
              className=" text-sm lg:text-base font-['Poppins'] flex  justify-between w-full px-3 shadow py-2 text-center items-center"
            >
              <div className=" flex flex-col  lg:flex-row lg:items-center w-3/12  pl-3  gap-2 lg:lg-0  ">
                <img
                  className="bg-cover w-[90%] lg:w-[30%]"
                  src={item.image}
                  alt=""
                />
                <p className="lg:pl-4 text-xs text-left ">{item.title}</p>
              </div>
              <div className=" w-3/12  ">
                <h1>${item.price}</h1>
              </div>
              <div className="w-3/12">
                <div>
                  <input
                    onChange={(e) => setquantity(e.target.value)}
                    type="number"
                    id="quantity"
                    min="1"
                    max="100"
                    className="border border-gray-500 rounded-md px-2 w-11/12 lg:w-1/5 p-2"
                  />
                </div>
              </div>
              <div className="w-3/12 ">
                {/* <h1>${item.price * quantity}</h1> */}
                <h1>${item.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-x-32">
        <button
          className={`border-2 text-black font-poppins rounded  hover:text-white hover:bg-[#DB4444] h-10 lg:h-12 w-28 lg:w-[210px] duration-500 text-xs lg:text-base`}
        >
          Return To Shop
        </button>
        <button
          className={`border-2 text-black font-poppins rounded hover:text-white hover:bg-[#DB4444] h-10 lg:h-12 w-28 lg:w-[210px] duration-500 text-xs lg:text-base`}
        >
          Update Cart
        </button>
      </div>
      <div className="lg:flex justify-between w-full h-auto lg:pt-10">
        <div className="flex justify-between w-full lg:w-2/5 h-auto lg:gap-2">
          <input
            className="border border-black h-10 lg:h-14 w-3/5 font-poppins text-xs lg:text-base pl-2 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="Coupon code"
          />
          <button className="h-10 lg:h-14 w-2/5 font-poppins text-xs lg:text-base bg-[#DB4444] text-white lg:px-8 rounded-md hover:text-white hover:bg-red-500 duration-500">
            Apply Coupon
          </button>
        </div>
        <div className="pt-4 lg:pt-0">
          <div className=" w-[100%] pt-3 py-3 font-poppins border border-black rounded-sm ">
            <div className=" flex flex-col gap-3 px-4  lg:py-3">
              <h1 className="font-medium lg:font-bold text-sm lg:text-base">
                Cart Total
              </h1>
              <div className="flex justify-between border-b-[1px] border-gray-500 border-opacity-40 py-1 lg:py-2 text-sm lg:text-base">
                <h1>Subtotal:</h1>
                <h1>$1750</h1>
              </div>
              <div className="flex justify-between border-b-[1px] border-gray-500 border-opacity-40 py-1 lg:py-2 text-sm lg:text-base">
                <h1>Shipping:</h1>
                <h1>Free</h1>
              </div>
              <div className="flex justify-between lg:py-2 text-sm lg:text-base">
                <h1>Total</h1>
                <h1>$3000</h1>
              </div>
              <div className=" pt-3 flex justify-center lg:px-36">
                <Link to="/checkout">
                  <button
                    className={`bg-[#DB4444] border-2 text-white font-poppins py-1 lg:py-2 px-4 lg:px-8 rounded hover:text-white hover:bg-[#DB4444] h-auto duration-500 text-sm lg:text-base`}
                  >
                    Procees To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
