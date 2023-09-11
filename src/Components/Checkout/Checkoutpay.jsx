import React, { useState, useEffect } from "react";
import ButtonCart from "../UI/Cart/Buttoncart";
import bank from "../../Assets/Qr Code.png";

const CheckoutPay = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=2")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" w-full lg:w-[80%] pt-3 py-3 font-poppins rounded-sm ">
      <div className=" flex flex-col gap-3  lg:py-3">
        {products.map((product) => {
          return (
            <div className="flex justify-between w-auto py-1 lg:py-2 items-center">
              <div className="flex items-center gap-2">
                <img
                  className="w-1/6 lg:w-[15%]"
                  src={product.image}
                  alt={product.title}
                />
                <p className="w-56 lg:w-96 h-auto px-3 text-sm lg:text-base">
                  {product.title}
                </p>
              </div>
              <h1>${product.price}</h1>
            </div>
          );
        })}
        {/* <div className="flex justify-between border-b-[1px] border-black border-opacity-40 py-1 lg:py-2">
              <h1>Subtotal</h1>
              <h1>$1750</h1>
            </div>
            <div className="flex justify-between border-b-[1px] border-black border-opacity-40 lg:py-2">
              <h1>Shiping</h1>
              <h1>free</h1>
            </div> */}
        <div className="flex justify-between py-2">
          <h1>Total</h1>
          <h1>$3500</h1>
        </div>
        <div className="flex justify-between items-center lg:py-2">
          <div className="flex gap-3">
            <input
              type="radio"
              name="payment"
              id="pay"
              className="w-5 accent-[#000000]"
            />
            <p>Purchase With Dana</p>
          </div>
          <img src={bank} alt="" />
        </div>
        <div className="flex gap-3  lg:py-2">
          <input
            type="radio"
            name="payment"
            id="pay"
            className="w-5 accent-[#000000]"
          />
          <p>Cash On Delivery</p>
        </div>
      </div>
      <div className="py-8 w-full h-auto">
        <div className="flex justify-between w-full h-auto lg:gap-2">
          <input
            className="border-2 h-10 lg:h-14 w-3/5 font-poppins text-xs lg:text-base"
            type="text"
            name=""
            id=""
            placeholder="Coupon code"
          />
          <button className="h-10 lg:h-14 w-2/5 font-poppins text-xs lg:text-base border-2 bg-[#DB4444] text-white lg:px-8 rounded hover:text-white hover:bg-[#DB4444] duration-500">
            Apply Coupon
          </button>
        </div>
        <div className="pt-5 lg:pt-3">
          <button
            className={`bg-[#DB4444] border-2 w-3/5 text-white font-poppins py-3 px-4 lg:py-2 lg:px-8 rounded  hover:text-white hover:bg-[#DB4444]  duration-500`}
          >
            Procees To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPay;
