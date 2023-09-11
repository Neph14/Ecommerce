import React, { useState, useEffect } from "react";

const Cardcategory = (props) => {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setcategory(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="w-full h-auto flex justify-start items-start">
      {category.map((category) => {
        return (
          <div className="flex items-start justify-start max-w-sm rounded overflow-hidden hover:text-white w-screen h-96 transition-all duration-300 hover:bg-[#DB4444] ">
            <div
              className={`h-full w-full flex items-center justify-center flex-col border-2 shadow-sm p-10 `}
            >
              <div
                className={`text-4xl flex flex-col w-full h-full min-h-full items-center`}
              >
                <ion-icon name="${category}"></ion-icon>
                <div className="text-xs lg:text-sm font-normal text-center pt-3">
                  {category}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardcategory;
