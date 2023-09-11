import React, { Fragment } from "react";

import Herobanner from "./Herobanner/Herobanner";
import Body1 from "../Home/Body/Body1";
import Body2 from "../Home/Body/Body2";
import Body3 from "../Home/Body/Body3";

function Home() {
  return (
    <Fragment>
      <div className="w-screen h-full overflow-x-hidden">
        <div className="w-screen h-full flex pt-9">
          <Herobanner />
        </div>
        <div className="w-screen h-full flex justify-center items-center">
          <Body1 />
        </div>
        <div className="w-screen h-full flex justify-center items-center">
          <Body2 />
        </div>
        <div className="w-screen h-full flex justify-center items-center">
          <Body3 />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
