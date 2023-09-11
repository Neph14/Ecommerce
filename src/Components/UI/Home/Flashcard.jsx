import React, { useState, useEffect } from "react";

const Flashcard = (props) => {
  const [products, setproducts] = useState([]);
  const discountPercentage = 30;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-screen h-auto flex gap-x-10">
      {products.map((product) => {
        const originalPrice = product.price;
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const discountedPrice = originalPrice - discountAmount;
        const formattedDiscountedPrice = discountedPrice.toFixed(2);

        return (
          <div className="rounded overflow-hidden w-1/4 h-full">
            <div className="relative overflow-hidden bg-neutral-100 lg:h-56  rounded-md">
              <div className="bg-red-600 rounded top-0 text-white left-0  absolute ml-1 lg:ml-2 mt-1 lg:mt-2 h-4 lg:h-5 w-8 lg:w-11 flex items-center justify-center text-xs">
                -{discountPercentage}%
              </div>
              <div className="grid grid-cols-1 absolute top-0 right-0">
                <button className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full bg-white flex items-center justify-center hover:bg-slate-200 lg:text-xl pt-1 mr-1 lg:mr-2 mt-1 lg:mt-2">
                  <span>
                    <ion-icon
                      name="heart-outline"
                      className="w-8 h-8 pt-1"
                    ></ion-icon>
                  </span>
                </button>
                <button className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full bg-white flex items-center justify-center hover:bg-slate-200 lg:text-xl pt-1 mr-1 lg:mr-2 mt-1 lg:mt-2">
                  <span>
                    <ion-icon
                      name="eye-outline"
                      className="w-8 h-8 pt-1"
                    ></ion-icon>
                  </span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0">
                <button className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-200 lg:text-xl pt-1 ml-1 mb-1 lg:hidden">
                  <span>
                    <ion-icon
                      name="cart-outline"
                      className="w-8 h-8 pt-1"
                    ></ion-icon>
                  </span>
                </button>
              </div>
              <img
                src={product.image}
                alt="Laptop"
                className="object-contain object-center w-full h-full"
              />
              {/* <div className="absolute h-[41px] w-full bg-black px-6 flex items-center justify-center text-start -bottom-10 group-hover:bottom-0  opacity-0 hover:opacity-100 transition-all duration-300">
            <button className="text-white mb-10 px-5">Add to cart</button>
          </div> */}
              <div className="absolute hidden lg:flex justify-center items-center bottom-0 opacity-0 hover:opacity-100 hover:bg-black w-full h-10">
                <button className="text-white flex">Add To Cart</button>
              </div>
            </div>

            <div className="w-full h-full py-4">
              <div className="font-medium text-sm lg:text-base mb-2">
                {product.title}
              </div>
              <div className="flex gap-2">
                <p className="text-semibold text-red-500">
                  {formattedDiscountedPrice}
                </p>
                <p className="line-through text-slate-400">{originalPrice}</p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                ({product.rating.count})
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flashcard;
