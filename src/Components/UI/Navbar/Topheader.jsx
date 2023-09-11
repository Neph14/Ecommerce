import React from "react";

const Topheader = () => {
  return (
    <div className=" bg-black flex w-screen h-full justify-center  lg:justify-end lg:pr-20">
      <div className=" lg:pl-7 py-1 bg-black lg:text-xl z-50 flex items-center  lg:gap-96">
        <div className="text-white  text-[0.6em] text-center  lg:text-[0.7em]   lg:text-center  ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="text-white    font-bold pl-2">ShopNow</span>
        </div>
        <div className=" items-center  lg:pl-0  pl-3   ">
          <select
            name="bahasa Indonesia"
            id="bahasa Indonesia"
            className="text-white h-full bg-black text-[0.6em] lg:text-[0.7em]  py-2 "
          >
            <option value="volvo">English</option>
            <option value="saab">Bahasa</option>
            <option value="mercedes">Arabic</option>
            <option value="audi">Melayu</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
