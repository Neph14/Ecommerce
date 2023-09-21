import React, { useEffect, useState, useRef } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Body2 = () => {
  const swiperRef = useRef();

  const [category, setcategory] = useState([]);

  function getIconNameForCategory(category) {
    switch (category) {
      case "electronics":
        return "Laptop-outline";
      case "jewerly":
        return "diamond-outline";
      case "men's clothing":
        return "man-outline";
      case "women's clothing":
        return "woman-outline";
      default:
        return "bag-outline";
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setcategory(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  return (
    <div className="w-11/12 lg:w-5/6 h-full pt-10 lg:pt-20">
      <div className="flex items-center w-full gap-3 lg:pb-0">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className="text-sm lg:text-lg font-bold  text-[#DB4444]">
          Categories
        </p>
      </div>
      <div className="w-full h-full">
        <div className=" flex  flex-row items-start lg:items-center justify-between lg:py-8">
          <div className="flex items-center gap-36">
            <h2 className=" pl-2 lg:pl-0 text-sm lg:text-3xl  pt-4 lg:pt-0 font-semibold font-poppins  tracking-wider">
              Browser by category
            </h2>
          </div>

          <div className="gap-2 lg:gap-4 w-auto h-auto flex">
            <button
              className="h-10 w-10 rounded-full  bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button
              className="h-10 w-10 rounded-full  bg-neutral-100 flex items-center justify-center hover:bg-slate-400"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" grid-cols-1 gap-x-0 pt-5 lg:pt-0">
        <div>
          <Swiper
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <div>
              {category.map((category) => {
                return (
                  <SwiperSlide key={category}>
                    <div className="rounded overflow-hidden bg-white">
                      <div
                        className={`h-32 lg:h-36 w-full flex items-center justify-center flex-col border-2 hover:text-white transition-all duration-300 hover:bg-[#DB4444] shadow-sm p-10 `}
                      >
                        <div
                          className={`text-4xl flex flex-col items-center justify-start`}
                        >
                          <ion-icon
                            name={getIconNameForCategory(category)}
                          ></ion-icon>
                          <div className="text-xs lg:text-sm font-normal capitalize  text-center pt-3">
                            {category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Body2;
// className="w-full h-auto grid grid-rows-1 grid-cols-2 lg:grid-cols-6 justify-start items-start gap-5"
