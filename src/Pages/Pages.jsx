import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";
import Notfound from "./Notfound";
import Productdetailpage from "../Components/Productdetailpage/Productdetailpage";
import Login from "../Components/Login/Login";
import Signup from "../Components/Sign up/Signup";

function Pages() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/productdetailpage/:productId"
          element={<Productdetailpage />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Fragment>
  );
}

export default Pages;
