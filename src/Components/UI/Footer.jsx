import React, { Fragment } from "react";

import QR from "../../Assets/Qr Code.png";
import PlayStore from "../../Assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import AppStore from "../../Assets/download-appstore.png";
import Facebook from "../../Assets/Icon-Facebook.png";
import Twitter from "../../Assets/Icon-Twitter.png";
import Instagram from "../../Assets/icon-instagram.png";
import Linkedin from "../../Assets/linkedin.png";
import C from "../../Assets/Capsule-Corp.png";

function Footer() {
  return (
    <Fragment>
      <div className="w-screen h-full bg-black text-neutral-100 bottom-0 left-0 right-0 grid gap-12 lg:gap-20 mt-20">
        <div className="w-full h-full flex justify-center items-start lg:items-center pt-5 lg:pt-0">
          <div className="w-11/12 lg:w-5/6 h-4/6 grid grid-cols-2 gap-y-6 lg:flex">
            <div className="w-1/2 lg:w-1/5 h-full grid place-content-start place-items-start">
              <div className="font-bold text-xl lg:text-2xl cursor-pointer flex items-center font-inter pb-4 lg:pb-6">
                Exclusive
              </div>
              <div className="font-medium text-lg lg:text-xl cursor-pointer flex items-center font-poppins pb-6">
                Subscribe
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Get 10% off your first order
              </div>
              <div className="w-full lg:w-56 h-full bg-black border-2 border-white rounded flex items-center justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black lg:py-2 lg:pl-2 w-full lg:w-48 text-white lg:text-base font-normal font-poppins hidden lg:block"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="bg-black lg:py-2 pl-1 lg:pl-2 w-full lg:w-48 text-white lg:text-base font-normal font-poppins block lg:hidden"
                />
                <div className="text-lg lg:text-xl pt-1 lg:pt-0 mr-2">
                  <ion-icon name="send-outline" />
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/5 h-full">
              <div className="font-medium text-lg lg:text-xl cursor-pointer flex items-center font-poppins pb-6">
                Support
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex w-44 items-center font-poppins pb-4">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                exclusive@gmail.com
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                +88015-88888-9999
              </div>
            </div>
            <div className="w-1/2 lg:w-1/5 h-full">
              <div className="font-medium text-lg lg:text-xl cursor-pointer flex items-center font-poppins pb-6">
                Account
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                My Account
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Login / Register
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Cart
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Wishlist
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Shop
              </div>
            </div>
            <div className="w-1/2 lg:w-1/5 h-full">
              <div className="font-medium text-lg lg:text-xl cursor-pointer flex items-center font-poppins pb-6">
                Quick Link
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Privacy Policy
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4 ">
                Terms Of Use
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                FAQ
              </div>
              <div className="font-normal text-sm lg:text-base cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Contact
              </div>
            </div>
            <div className="w-screen lg:w-1/5 h-full grid place-content-center lg:place-content-start place-items-center lg:place-items-start gap-2 lg:gap-4 pr-6 lg:pr-0">
              <div className="font-medium text-lg lg:text-xl cursor-pointer flex items-center font-poppins pb-0 lg:pb-2">
                Download App
              </div>
              <div className="font-medium text-xs cursor-pointer text-left lg:text-justify flex items-center font-poppins pb-4">
                Save $3 with App New User Only
              </div>
              <div className="w-full h-full flex gap-x-2">
                <div className=" bg-white min-w-fit w-20 h-20 flex justify-center items-center">
                  <img src={QR} alt="QR" className="w-20 h-20 object-cover" />
                </div>
                <div className="grid w-full h-auto place-content-start place-items-start gap-y-2">
                  <div>
                    <img src={PlayStore} alt="PlayStore" />
                  </div>
                  <div>
                    <img src={AppStore} alt="AppStore" />
                  </div>
                </div>
              </div>
              <div className="w-40 pr-3 h-6 flex pt-3 lg:pt-5 justify-between items-center">
                <img src={Facebook} alt="FaceBook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Instagram} alt="Instagram" />
                <img src={Linkedin} alt="Linkedin" className="w-fit h-fit" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-10 flex justify-center gap-x-32 items-end shadow-xl lg:shadow-white">
          <div className="bg-black flex justify-center items-center text-gray-500 pb-3 lg:pb-1">
            <img
              src={C}
              alt="C"
              className="w-5 h-5 mr-2 opacity-50 font-poppins"
            />
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
