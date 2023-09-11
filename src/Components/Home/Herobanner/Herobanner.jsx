import React, { Fragment, useRef, use } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Iphone from "../../../Assets/Iphone.jpg";
import Rightwhite from "../../../Assets/right-arrow.png";
import Apple from "../../../Assets/apple.png";

function Herobanner() {
  const swiperRef = useRef();

  const sliderSettings = {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };
  return (
    <Fragment>
      <div className="mt-24 w-11/12 h-48 lg:h-60 flex justify-between items-center mx-auto">
        <Swiper
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="w-full h-full bg-black">
              <div className="w-full h-full flex">
                <div className="w-1/2 lg:w-1/3 h-full text-white grid place-content-center place-items-center pl-10 pb-4 lg:pb-8">
                  <div className="w-full h-full ">
                    <p className=" flex items-center justify-start w-full text-sm pb-3">
                      <img
                        src={Apple}
                        className="h-6 lg:h-8 w-6 lg:w-8"
                        alt=""
                      />
                      <span className="pt-1 lg:pt-0 pl-1 lg:pl-0 text-xs lg:text-base">
                        iPhone 14 series
                      </span>
                    </p>
                    <p className="text-xl lg:text-5xl font-semibold">
                      Up to 10% off Voucher
                    </p>
                    <a
                      href="/productdetailpage"
                      className="flex items-center justify-start space-x-3"
                    >
                      <p className="underline underline-offset-4 lg:underline-offset-8 pt-2 pl-2">
                        Shop Now
                      </p>
                      <img
                        src={Rightwhite}
                        className="w-4 h-4 mt-3 lg:mt-0"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-2/3 h-full bg-contain bg-center lg:bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${Iphone})` }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-black">
              <div className="w-full h-full flex">
                <div className="w-1/2 lg:w-1/3 h-full text-white grid place-content-center place-items-center pl-10 pb-4 lg:pb-8">
                  <div className="w-full h-full ">
                    <p className=" flex items-center justify-start w-full text-sm pb-3">
                      <img
                        src={Apple}
                        className="h-6 lg:h-8 w-6 lg:w-8"
                        alt=""
                      />
                      <span className="pt-1 lg:pt-0 pl-1 lg:pl-0 text-xs lg:text-base">
                        iPhone 14 series
                      </span>
                    </p>
                    <p className="text-xl lg:text-5xl font-semibold">
                      Up to 10% off Voucher
                    </p>
                    <a
                      href="/productdetailpage"
                      className="flex items-center justify-start space-x-3"
                    >
                      <p className="underline underline-offset-4 lg:underline-offset-8 pt-2 pl-2">
                        Shop Now
                      </p>
                      <img
                        src={Rightwhite}
                        className="w-4 h-4 mt-3 lg:mt-0"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-2/3 h-full bg-contain bg-center lg:bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${Iphone})` }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-black">
              <div className="w-full h-full flex">
                <div className="w-1/2 lg:w-1/3 h-full text-white grid place-content-center place-items-center pl-10 pb-4 lg:pb-8">
                  <div className="w-full h-full ">
                    <p className=" flex items-center justify-start w-full text-sm pb-3">
                      <img
                        src={Apple}
                        className="h-6 lg:h-8 w-6 lg:w-8"
                        alt=""
                      />
                      <span className="pt-1 lg:pt-0 pl-1 lg:pl-0 text-xs lg:text-base">
                        iPhone 14 series
                      </span>
                    </p>
                    <p className="text-xl lg:text-5xl font-semibold">
                      Up to 10% off Voucher
                    </p>
                    <a
                      href="/productdetailpage"
                      className="flex items-center justify-start space-x-3"
                    >
                      <p className="underline underline-offset-4 lg:underline-offset-8 pt-2 pl-2">
                        Shop Now
                      </p>
                      <img
                        src={Rightwhite}
                        className="w-4 h-4 mt-3 lg:mt-0"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-2/3 h-full bg-contain bg-center lg:bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${Iphone})` }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
}

export default Herobanner;
