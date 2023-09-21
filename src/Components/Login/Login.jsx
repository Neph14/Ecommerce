import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Image from "../../Assets/Side Image.png";
import { toast } from "react-toastify";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      seterror("Please Enter Both Username And Password.");
      return;
    }

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", json.token);
          console.log("Token:", json.token);
          toast.success("login success");
          navigate("/");
          window.location.reload();
        } else {
          seterror("Invalid username or password.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        seterror("Authentication failed.");
      });
  };

  const Token = localStorage.getItem("token");

  return (
    <>
      {!Token ? (
        <div className="mt-32 lg:-ml-[99px] h-auto w-screen">
          <div className="bg-white p-8 ">
            <div className="flex items-center">
              <div className="hidden lg:block ">
                <img src={Image} alt="Side Image" />
              </div>

              <div className="my-auto mx-auto  w-72">
                <div className="ml-2 ">
                  <h1 className="text-3xl font-medium font-inter">
                    Log in to Exclusive
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
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center border-b  mb-4 pt-4">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                </form>

                <div className="grid lg:flex lg:justify-between items-end mt-8">
                  <button
                    className="bg-[#DB4444] text-white font-sans py-2 px-6 rounded hover:bg-red-800 duration-500"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>

                  <p className="text-sm text-gray-500 lg:text-center">
                    <a href="#" className="text-[#DB4444] hover:underline">
                      Forgot Password?
                    </a>
                  </p>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-auto bg-white mt-40 flex flex-col items-center pb-24 pt-5">
          <div className="w-11/12 lg:w-5/6 h-full">
            <div className="w-full h-full flex flex-col items-center justify-center gap-5 pt-16">
              <p className="text-8xl font-medium">You Already Login</p>
              <p className="py-5">Your Try To Login Again? That's Ilegal</p>
              <Link to="/">
                <button className="bg-[#DB4444] text-white font-medium text-sm w-56 h-11">
                  Back To Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
