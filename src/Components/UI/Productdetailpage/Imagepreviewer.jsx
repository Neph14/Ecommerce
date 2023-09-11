import React, { useState } from "react";

import First from "../../../Assets/first.png";
import Second from "../../../Assets/second.png";
import Third from "../../../Assets/third.png";
import Fourth from "../../../Assets/fourth.png";
import Fifth from "../../../Assets/Fifth.png";

function Imagepreviewer() {
  const images = [{ First }, { Second }, { Third }, { Fourth }, { Fifth }];

  const [selectedImage, setselectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setselectedImage(image);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-2/12 h-1/5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              className="w-full h-full cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="w-5/12 h-full">
          <img src={selectedImage} alt="First" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Imagepreviewer;
