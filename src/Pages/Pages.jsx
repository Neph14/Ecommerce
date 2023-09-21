import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Components/Home/Home";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";
import Notfound from "./Notfound";
import Productdetailpage from "../Components/Productdetailpage/Productdetailpage";
import Login from "../Components/Login/Login";
import Signup from "../Components/Sign up/Signup";
import { toast } from "react-toastify";

function Pages() {
  const [authenticated, setauthenticated] = useState(false);

  const Token = localStorage.getItem("token");

  useEffect(() => {
    // Periksa apakah ada token di localStorage atau tidak
    if (Token) {
      setauthenticated(true);
    } else {
      // alert("Belum Login");
      toast.error("Login Dahulu");

      setauthenticated(false);
    }
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={authenticated ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={authenticated ? <Checkout /> : <Navigate to="/checkout" />}
        />
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
