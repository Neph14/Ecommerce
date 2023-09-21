import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topheader from "../Navbar/Topheader";
import { SlBasket } from "react-icons/sl";
import { toast } from "react-toastify";

const Nav = () => {
  let [open, setopen] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);

  const LocalStorageToken = localStorage.getItem("token");

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout success");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  let Links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Sign Up", link: "/sign_up" },
  ];

  // const searchHandler = () => {
  //   console.log("Not Working Yet");
  // };

  return (
    <Fragment>
      <div className="border-2 w-full fixed top-0 right-0 left-0 z-50 bg-white">
        <div>
          <Topheader />
        </div>
        <div className="lg:flex items-center justify-between w-full  pt-2 lg:pt-6 pb-2 lg:px-10 px-5">
          <a
            className="font-bold text-2xl cursor-pointer w-1/5 h-full flex items-center font-inter lg:pl-12 text-gray-800"
            href="/"
          >
            Exclusive
          </a>
          <div
            onClick={() => setopen(!open)}
            className="text-3xl absolute right-8 bottom-0 cursor-pointer lg:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div className="w-2/5">
            <ul
              className={`-z-20 lg:flex lg:items-center font-poppins lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-0" : " left-[120%]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="hover:underline underline-offset-8 transition-all duration-400 lg:ml-8 text-sm lg:text-lg font-medium lg:my-0 my-7"
                >
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <div className="relative flex sm:hidden pb-3 lg:pb-0">
                <span className=" absolute lg:top-0 lg:right-0 ml-4 mt-1  lg:bottom-10 text-lg ">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="What are you looking for?"
                  className=" border-2 form-input h-8 w-[100%]lg:w-1/2 px-8 lg:px-0 rounded-md"
                ></input>
              </div>
              <div className="pt-2 lg:pt-4">
                <a className=" text-xl sm:hidden lg:pt-0" href="/like">
                  <ion-icon name="heart-outline" />
                </a>
                <button
                  className="text-xl pt-5 sm:hidden"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <SlBasket />
                </button>
              </div>
            </ul>
          </div>
          <div>
            <div className="hidden w-96 h-full lg:flex justify-center gap-3 items-center text-justify">
              <div className="relative hidden lg:flex items-center justify-between">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="what are you looking for?"
                  className="bg-neutral-100 text-sm form-input h-7 w-1/2 lg:w-full pl-8 lg:pl-4 pr-8 py-5 text-center rounded-sm"
                ></input>
                <span className="absolute top-2 right-1 text-2xl my-auto">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
              </div>
              <button
                className="top-2 right-1 text-2xl h-7 my-auto"
                onClick={() => {
                  navigate("/like");
                }}
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button
                className="top-2 right-1 text-2xl h-7 my-auto"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <SlBasket />
              </button>
              {LocalStorageToken !== null ? (
                <div className="relative">
                  <button onClick={() => setshowDropdown(!showDropdown)}>
                    <span className="pt-1 hidden md:block top-2 right-1 text-2xl h-8">
                      <ion-icon name="person-outline"></ion-icon>
                    </span>
                  </button>
                  <div className={showDropdown ? "opacity-100" : "opacity-0"}>
                    <div className=" text-white bg-black  left-[-220px] top-12 hidden  w-[250px] h-52 rounded-md backdrop-blur-3xl font-semibold text-sm shadow-xl bg-opacity-50 px-10 lg:flex flex-col items-start absolute">
                      <div className="flex gap-3 ">
                        <div className="text-2xl pt-2">
                          <ion-icon name="person-outline"></ion-icon>
                        </div>
                        <button>Manage My Account</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="bag-handle-outline"></ion-icon>
                        </div>
                        <button>My Order</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="trash-bin-outline"></ion-icon>
                        </div>
                        <button>My Cancellations</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <button>My Reviews</button>
                      </div>
                      <div className="flex  gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="log-out-outline"></ion-icon>
                        </div>
                        <button onClick={() => logoutHandler()}>Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <button className="text-white bg-red-600 hover:bg-red-700 h-auto py-1 px-3 rounded-md">
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
