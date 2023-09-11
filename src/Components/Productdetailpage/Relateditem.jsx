import { useState, useContext, useRef, useEffect } from "react";
import { Cartcontext } from "../UI/Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Body1 = () => {
  const [products, setproducts] = useState([]);
  const discountPercentage = 30;
  const swiperRef = useRef();
  const navigate = useNavigate();
  const sliderSettings = {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const GlobalState = useContext(Cartcontext);
  const dispatch = GlobalState.dispatch;
  console.log(GlobalState);

  return (
    <div className="pt-10 lg:pt-20 w-11/12 h-full">
      <div className="flex items-center w-full gap-3">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className=" text-sm lg:text-lg font-bold text-red-600 "> Today's</p>
      </div>
      <div className="w-full h-full py-5 lg:py-10">
        <div className="pt-50 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between ">
          <div className="flex items-center gap-8 lg:gap-24 ">
            <h2 className=" pl-2 lg:pl-0 text-sm lg:text-4xl font-inter font-semibold tracking-wider">
              Flash Sales
            </h2>
            <div>
              <div className="grid  grid-flow-col gap-1 lg:gap-2 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-transparent rounded-box text-neutral-content">
                  <h1 className="text-left font-poppins lg:text-xs">Days</h1>
                  <span className="countdown font-inter text-sm lg:text-4xl font-bold">
                    <span>03</span>
                  </span>
                </div>
                <span className="countdown font-inter text-sm lg:text-4xl font-bold text-rose-500 pt-7 lg:pt-5">
                  <span>:</span>
                </span>
                <div className="flex flex-col p-2 bg-transparent rounded-box text-neutral-content">
                  <h1 className="text-left font-poppins lg:text-xs">Hours</h1>
                  <span className="countdown font-inter text-sm lg:text-4xl font-bold">
                    <div>
                      <span>23</span>
                    </div>
                  </span>
                </div>
                <span className="hidden lg:block countdown font-inter text-sm lg:text-4xl font-bold text-rose-500 pt-7 lg:pt-5">
                  <span>:</span>
                </span>
                <div className="hidden lg:flex flex-col p-2 bg-transparent rounded-box text-neutral-content">
                  <h1 className="text-left font-poppins lg:text-xs">Minutes</h1>
                  <span className="countdown font-inter text-sm lg:text-4xl font-bold">
                    <span>19</span>
                  </span>
                </div>
                <span className="hidden lg:block countdown font-inter text-sm lg:text-4xl font-bold text-rose-500 pt-7 lg:pt-5">
                  <span>:</span>
                </span>
                <div className="hidden lg:flex flex-col p-2 bg-transparent rounded-box text-neutral-content">
                  <h1 className="text-left font-poppins lg:text-xs">Seconds</h1>
                  <span className="countdown font-inter lg:text-4xl font-bold">
                    <span>56</span>
                  </span>
                </div>
                <span className="block lg:hidden countdown font-inter text-sm lg:text-4xl font-bold text-rose-500 pt-7 lg:pt-5">
                  <span>:</span>
                </span>
                <div className="lg:hidden flex flex-col p-2 bg-transparent rounded-box text-neutral-content ">
                  <h1 className="text-left font-poppins lg:text-xs">Min</h1>
                  <span className="countdown font-inter text-sm lg:text-4xl font-bold">
                    <span>19</span>
                  </span>
                </div>
                <span className="block lg:hidden countdown font-inter text-sm lg:text-4xl font-bold text-rose-500 pt-7 lg:pt-5">
                  <span>:</span>
                </span>
                <div className="lg:hidden flex flex-col p-2 bg-transparent rounded-box text-neutral-content ">
                  <h1 className="text-left font-poppins lg:text-xs">Sec</h1>
                  <span className="countdown font-inter lg:text-4xl font-bold">
                    <span>56</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden gap-4 lg:flex">
            <button
              className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button
              className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="gap-4 flex justify-center pb-4 lg:hidden">
        <button
          className="h-10 w-10 rounded-full  bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
        </button>
        <button
          className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </div>
      {products.length > 0 && (
        <Swiper
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-1 lg:gap-10 gap-4">
            {products.map((product, index) => {
              const originalPrice = product.price;
              const discountAmount = (originalPrice * discountPercentage) / 100;
              const discountedPrice = originalPrice - discountAmount;
              const formattedDiscountedPrice = discountedPrice.toFixed(2);

              return (
                <SwiperSlide key={index}>
                  <div className="rounded overflow-hidden w-full flex flex-col lg:w-full h-72 lg:h-96 items-end justify-end bg-white border">
                    <div className="relative overflow-hidden h-32 w-full lg:h-52 mt-1 pb-3 rounded-md">
                      <div className="bg-red-600 rounded top-0 text-white left-0  absolute ml-1 lg:ml-2 mt-1 lg:mb-1 h-4 lg:h-5 w-8 lg:w-11 flex items-center justify-center text-xs">
                        -{discountPercentage}%
                      </div>
                      <div className="grid grid-cols-1 absolute top-0 right-0 z-20">
                        <button className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-400 lg:text-xl pt-1 mr-1 lg:mr-2 mt-1 lg:mt-2">
                          <span>
                            <ion-icon
                              name="heart-outline"
                              className="w-8 h-8 pt-1"
                            ></ion-icon>
                          </span>
                        </button>
                        <Link to={`/productdetailpage/${product.id}`}>
                          <button className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-400 lg:text-xl pt-1 mr-1 lg:mr-2 mt-1 lg:mt-2">
                            <span>
                              <ion-icon
                                name="eye-outline"
                                className="w-8 h-8 pt-1"
                              ></ion-icon>
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div className="absolute bottom-0 left-0 z-20">
                        <button
                          className="h-6 lg:h-8 w-6 lg:w-8 text-md rounded-full flex items-center justify-center hover:bg-slate-200 lg:text-xl pt-1 ml-1 mb-1 lg:hidden"
                          onClick={() => {
                            GlobalState.dispatch({
                              type: "ADD",
                              payload: product,
                            });
                            // navigate("/cart");
                          }}
                        >
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
                        alt={product.title}
                        className="w-full h-full object-contain z-0"
                      />
                      <div className="absolute hidden w-full h-full lg:flex z-10 justify-center items-end mx-auto bottom-0 opacity-0 hover:opacity-100">
                        <button
                          className="text-white flex bg-black w-full h-10 font-medium items-center justify-center"
                          onClick={() => {
                            dispatch({
                              type: "ADD",
                              payload: product,
                            });
                            // navigate("/cart");
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-40 lg:h-44 bg-white grid place-content-between place-items-start p-2">
                      <div className="lg:font-medium text-sm lg:text-base mb-2">
                        {product.title}
                      </div>
                      <div className="flex gap-2">
                        <p className="font-normal xl:text-semibold text-sm lg:text-base text-red-500">
                          ${formattedDiscountedPrice}
                        </p>
                        <p className="font-normal xl:text-semibold text-sm lg:text-base line-through text-slate-400">
                          ${originalPrice}
                        </p>
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
                </SwiperSlide>
              );
            })}
            {/* </div> */}
          </div>
        </Swiper>
      )}
      <div className="pt-10 flex justify-center">
        <Button>View all product</Button>
      </div>
    </div>
  );
};

export default Body1;
