import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <Fragment>
      <div className="w-screen h-auto bg-white mt-40 flex flex-col items-center pb-24">
        <div className="w-5/6 h-full">
          <div>
            <p className="w-full h-6 text-black">
              <a href="/" className="opacity-50 text-xs lg:text-base">
                Account
              </a>
              <span className="opacity-50 text-xs lg:text-base"> / </span>
              <a href="/" className="opacity-100 text-xs lg:text-base">
                Error
              </a>
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-5 pt-16">
            <p className="text-8xl font-medium">404 Not Found</p>
            <p className="py-5">
              Your visited page not found. You may go home page.
            </p>
            <Link to="/">
              <button className="bg-[#DB4444] text-white font-medium text-sm w-56 h-11">
                Back To Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Notfound;
