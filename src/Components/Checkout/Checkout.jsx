import React, { Fragment } from "react";

import CheckoutLayout from "./Checkoutlayout";

const Checkout = (props) => {
  return (
    <Fragment>
      <div className="h-full w-full pl-[6%] pr-[6%]">
        <CheckoutLayout />
      </div>
    </Fragment>
  );
};

export default Checkout;
