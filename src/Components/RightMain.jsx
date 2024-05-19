import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const RightMain = ({ handleRotate }) => {
  return (
    <div className=" absolute top-0 right-0  w-1/2 py-7 pl-20 pr-32">
      <h3 className=" font-bold my-2 mb-4 text-lg ">Man's Shoes</h3>
      <h1 className=" font-normal bebas text-6xl leading-tight w-[300px]">NIKE AIR MAX 90 FUTURA</h1>
      <h2 className="font-normal bebas text-2xl py-3">$199</h2>
      <p className="mr-2">
        Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit,
        these kicks ensure you'll always be on point.
      </p>
      <div className=" h-32 -mt-5 mb-3">
        <div className="btns z-10">
          <button
            className="btn1"
            onClick={() => handleRotate(90, 1)}
          >
            <img
              className=" object-fill  w-full"
              src="/assets/smallpic-1.png"
            />
          </button>{" "}
          <button
            className="btn2"
            onClick={() => handleRotate(0, 2)}
          >
            <img
              className=" object-fill w-full"
              src="/assets/smallpic-2.png"
            />
          </button>{" "}
          <button
            className="btn3"
            onClick={() => handleRotate(-90, 3)}
          >
            <img
              className=" w-full object-fill"
              src="/assets/smallpic-3.png"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 w-full">
        <div className="flex gap-2 items-center justify-center font-medium shadow-md w-[40%] p-2 rounded-md">
          US: 8.5
          <FaChevronDown />
        </div>
        <div className="flex gap-2 items-center justify-center font-medium w-[50%] rounded-md bg-zinc-800 text-white p-2">
          <FaCartShopping />
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default RightMain;
