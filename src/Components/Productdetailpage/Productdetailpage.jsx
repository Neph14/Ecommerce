import React, { Fragment, useState, useEffect } from "react";

import Truck from "../../Assets/icon-delivery.png";
import Return from "../../Assets/Icon-return.png";
import { useParams } from "react-router";
import Relateditem from "./Relateditem";

function Productdetailpage() {
  const [products, setproducts] = useState("");
  const [count, setcount] = useState(0);
  const { productId } = useParams();
  console.log(productId);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        console.log(data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Fragment>
      <div className="w-screen h-auto py-28 lg:py-44 flex flex-col gap-0 items-center justify-center bg-white max-h-min">
        <div className="w-5/6 h-full  grid-cols-1 grid-rows-3 gap-y-1">
          <div>
            <p className="w-full h-6 text-black">
              <a href="/" className="opacity-50 text-xs lg:text-base">
                Account
              </a>
              <span className="opacity-50 text-xs lg:text-base"> / </span>
              <a href="/" className="opacity-50 text-xs lg:text-base">
                Gaming
              </a>
              <span className="opacity-50 text-xs lg:text-base"> / </span>
              <a href="/" className="opacity-100 text-xs lg:text-base">
                {products.title}
              </a>
            </p>
          </div>
          <div className="w-full h-auto grid lg:flex lg:justify-center lg:items-center pt-8 lg:pt-16">
            <div className="w-full lg:w-2/12 h-full ">
              <div className="w-full h-max flex lg:grid grid-cols-1 grid-rows-4 gap-1 lg:gap-4">
                <img
                  src={products.image}
                  alt="First"
                  className="w-1/4 lg:w-40 h-14 lg:h-28 border bg-white object-contain object-center"
                />
                <img
                  src={products.image}
                  alt="First"
                  className="w-1/4 lg:w-40 h-14 lg:h-28 border bg-white object-contain object-center"
                />
                <img
                  src={products.image}
                  alt="First"
                  className="w-1/4 lg:w-40 h-14 lg:h-28 border bg-white object-contain object-center"
                />
                <img
                  src={products.image}
                  alt="First"
                  className="w-1/4 lg:w-40 h-14 lg:h-28 border bg-white object-contain object-center"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12 h-96 pt-2 lg:pt-0">
              <img
                src={products.image}
                alt="Fifth"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="w-full lg:w-5/12 h-full lg:pt-0 lg:pl-12">
              <p className="font-inter font-semibold text-xl">
                {products.title}
              </p>
              <div className="flex items-center lg:pt-3">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div className="flex justify-center items-center">
                  <p className="pl-2 text-xs">
                    (120) Reviews |{" "}
                    <span className="text-green-500">In Stock</span>
                  </p>
                </div>
              </div>
              <p className="font-inter py-2">${products.price}</p>
              <p className="font-poppins text-xs text-justify pb-1">
                {products.description}
              </p>
              <div className="w-auto py-5">
                <hr className="w-full" />
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <p>Colours: </p>
                <div className="flex gap-2">
                  <button className="w-4 h-4 rounded-full bg-blue-200 hover:bg-blue-500 hover:border hover:border-rounded-full"></button>
                  <button className="w-4 h-4 rounded-full bg-rose-200 hover:bg-[#DB4444] hover:border hover:border-rounded-full"></button>
                </div>
              </div>
              <div className="flex items-center gap-x-3 py-3">
                <p className="pr-1">Size:</p>
                <div className="w-7 h-7 flex items-center justify-center max-w-sm rounded overflow-hidden hover:text-white transition-all duration-300 hover:bg-[#DB4444] font-medium text-xs border">
                  XS
                </div>
                <div className="w-7 h-7 flex items-center justify-center max-w-sm rounded overflow-hidden hover:text-white transition-all duration-300 hover:bg-[#DB4444] font-medium text-xs border">
                  S
                </div>
                <div className="w-7 h-7 flex items-center justify-center max-w-sm rounded overflow-hidden hover:text-white transition-all duration-300 hover:bg-[#DB4444] font-medium text-xs border">
                  M
                </div>
                <div className="w-7 h-7 flex items-center justify-center max-w-sm rounded overflow-hidden hover:text-white transition-all duration-300 hover:bg-[#DB4444] font-medium text-xs border">
                  L
                </div>
                <div className="w-7 h-7 flex items-center justify-center max-w-sm rounded overflow-hidden hover:text-white transition-all duration-300 hover:bg-[#DB4444] font-medium text-xs border">
                  XL
                </div>
              </div>
              <div className="w-auto h-auto flex items-center justify-between">
                <div className="flex items-center justify-start w-auto h-11">
                  <button
                    onClick={decrement}
                    className="border mt-auto mb-auto w-7 h-7 hover:bg-[#DB4444] hover:text-white"
                  >
                    <ion-icon name="remove-outline" />
                  </button>
                  <p className="w-14 h-7 text-center text border">{count}</p>
                  <button
                    onClick={increment}
                    className="border mt-auto mb-auto w-7 h-7 hover:bg-[#DB4444] hover:text-white"
                  >
                    <ion-icon name="add-outline" />
                  </button>
                </div>
                <button className="w-32 h-7 bg-[#DB4444] hover:bg-rose-700 text-xs text-white">
                  Buy Now
                </button>
                <div className="w-7 h-7 border text-xl text-center hover:bg-slate-400">
                  <ion-icon name="heart-outline" />
                </div>
              </div>
              <div className="w-full h-20 border mt-5 flex items-center gap-x-3 pl-3">
                <img src={Truck} alt="Delivery Truck" className="w-9 h-9" />
                <div>
                  <p className="text-sm">Free Delivery</p>
                  <a href="/" className="underline text-xs">
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <div className="w-full h-20 border-b border-x flex items-center gap-x-3 pl-3">
                <img src={Return} alt="Return Delivery" className="w-9 h-9" />
                <div>
                  <p className="text-sm">Return Delivery</p>
                  <p className="text-xs">
                    Free 30 Days Delivery Returns.
                    <a href="/" className="underline">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <Relateditem />
        </div>
      </div>
    </Fragment>
  );
}

export default Productdetailpage;
