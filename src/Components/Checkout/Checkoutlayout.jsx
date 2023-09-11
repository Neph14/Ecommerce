import React from "react";
import FormCheckout from "./Formcheckouts";
import CheckoutPay from "./Checkoutpay";

const CheckoutLayout = () => {
  return (
    <div className="w-full h-full mt-28 lg:pt-20 ">
      <div>
        <h2 className="font-poppins text-xs  lg:text-base w-auto space-x-2">
          <a href="/account" className="opacity-50">
            Account
          </a>
          <span className="opacity-50">/</span>
          <a href="/myaccount" className="opacity-50">
            My Account
          </a>
          <span className="opacity-50">/</span>
          <a href="/product" className="opacity-50">
            Product
          </a>
          <span className="opacity-50">/</span>
          <a href="/cart" className="opacity-50">
            View Cart
          </a>
          <span className="opacity-50">/</span>
          <a href="/checkout">Checkout</a>
        </h2>
      </div>
      <div className="lg:flex justify-between">
        <div className="  lg:w-1/2">
          <FormCheckout />
        </div>
        <div className="w-full lg:w-1/2 pt-10 ">
          <CheckoutPay />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
