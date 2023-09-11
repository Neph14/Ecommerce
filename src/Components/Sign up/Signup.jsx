import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Image from "../../Assets/Side Image.png";
import Google from "../../Assets/google.png";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          // console.log("Token:", json.token);
          navigate("/");
        } else {
          console.error("Authentication failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mt-32 lg:-ml-[99px] h-auto w-screen">
      <div className="bg-white p-8 ">
        <div className="flex items-center">
          <div className="hidden lg:block ">
            <img src={Image} alt="Side Image" />
          </div>

          <div className="my-auto mx-auto  w-72">
            <div className="ml-2 ">
              <h1 className="text-3xl font-medium font-inter">
                Create an account
              </h1>
              <p className="text-sm mt-3 mb-7 font-normal font-sans ">
                Enter your details below.
              </p>
            </div>
            <form>
              <div className="flex items-center border-b mb-4 ">
                <input
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
                  type="text"
                  id="email"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center border-b mb-4 pt-4">
                <input
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
                  type="text"
                  id="email"
                  placeholder="Email or Phone Number"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center border-b  mb-4 pt-4">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            <div className="lg:grid lg:place-items-center lg:place-content-center mt-8 w-full">
              <div className="bg-[#DB4444] hover:bg-rose-800 h-11 w-72 text-center pt-2 pb-4">
                <button
                  onClick={handleLogin}
                  className="w-max h-auto text-white font-poppins text-xs "
                >
                  Create Account
                </button>
              </div>
              <div className="bg-white hover:bg-slate-300 h-11 w-72 text-black border flex justify-center items-center mt-3">
                <button
                  onClick={handleLogin}
                  className="w-max h-auto font-poppins text-xs flex items-center gap-x-2"
                >
                  <span className="text-xl">
                    <img
                      src={Google}
                      alt="Google"
                      className="object-contain object-center w-5 h-5"
                    />
                  </span>
                  <p>Sign Up With Google</p>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Already Have Account?
                <a
                  href="/login"
                  className="text-black underline underline-offset-8 pl-2"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
