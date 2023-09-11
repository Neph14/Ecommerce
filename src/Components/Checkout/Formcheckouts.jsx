import React from "react";
import InputCheckout from "../UI/Checkout/Inputcheckout";

const Formcheckout = () => {
  return (
    <div className="pt-10 ">
      <h1 className="font-medium text-3xl tracking-wide font-inter">
        Billing Details
      </h1>
      <form action="" className="pt-5 lg:pt-0">
        <div className="flex flex-col gap-4">
          <InputCheckout name="First Name*"></InputCheckout>
          <InputCheckout name="Company Name*"></InputCheckout>
          <InputCheckout name="Street Address*"></InputCheckout>
          <InputCheckout name="Apartment, floor, etc. (optional)*"></InputCheckout>
          <InputCheckout name="Town/City*"></InputCheckout>
          <InputCheckout name="Phone Number**"></InputCheckout>
          <InputCheckout name="Email Address*"></InputCheckout>
          <div className=" flex items-center gap-1">
            <input
              type="checkbox"
              name="save"
              value="save"
              className="bg-red"
            />
            <label
              htmlFor="save accent-[#50d71e]"
              className="text-sm lg:text-base"
            >
              {" "}
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formcheckout;
