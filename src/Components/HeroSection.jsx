import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import RightMain from "./RightMain";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [shoeRotation, setShoeRotation] = useState(-22);
  const [activeButton, setActiveButton] = useState(2); // Initially set to 2

  useEffect(() => {}, []);

  const handleRotate = (degrees, btn) => {
    setRotation(degrees);
    setShoeRotation(-degrees - 22);
    setActiveButton(btn);
  };

  const getScale = (btn) => {
    return btn === activeButton ? 4.8 : 1;
  };

  return (
    <Wrapper>
      <div className={"mt-5 relative bg-slate-50 w-full h-[650px] rounded-xl"}>
        <div
          className="big"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* 1st img */}
          <div
            className="small small1"
            style={{ transform: `scale(${getScale(1)})`, transitionDuration: "1s" }}
          >
            <img
              style={{ transform: `rotate(${shoeRotation}deg)`, transitionDuration: "1s" }}
              className={`object-fill  w-full -mb-7 mr-7 `}
              src="/assets/pic-3.png"
            />
          </div>
          {/* 2st img */}
          <div
            className="small small2"
            style={{ transform: `scale(${getScale(2)})`, transitionDuration: "1s" }}
          >
            <img
              style={{ transform: `rotate(${shoeRotation}deg)`, transitionDuration: "1s" }}
              className=" object-fill w-full mb-6 mr-6  "
              src="/assets/pic-2.png"
            />
          </div>
          {/* 3st img */}
          <div
            className="small small3"
            style={{ transform: `scale(${getScale(3)})`, transitionDuration: "1s" }}
          >
            <img
              style={{ transform: `rotate(${shoeRotation}deg)`, transitionDuration: "1s" }}
              className=" w-full object-fill mb-7 -mr-8  "
              src="/assets/pic-1.png"
            />
          </div>
        </div>

        <RightMain handleRotate={handleRotate} />
      </div>
    </Wrapper>
  );
};

export default HeroSection;
