"use client";
import React from "react";
import { backgroundPictures } from "../pictures";
import { useState } from "react";

const Background = () => {
  const [pictures, setPictures] = useState(backgroundPictures);

  const [index, setIndex] = useState<string>("");

  const handleBackgroundIamge = (id: number) => {
    setIndex("/background/fullbg" + id + ".png");
    console.log(index);
  };

  return (
    <div
      className="w-full  bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${index})` }}
    >
      <div className="w-[350px] bg-yellow-500 rounded-[10px] pb-[20px]">
        <div className="ml-[10px] mr-[10px]">
          <h1 className="mt-[15px] mb-[15px]">Choose Background</h1>
          <div className=" grid grid-rows-3  grid-flow-col gap-y-4">
            {pictures.map((item, index) => (
              <li key={index} className="list-none gap-4 ">
                <div
                  className="w-[105px] h-[80px] rounded-[10px] bg-red-500 cursor-pointer"
                  style={{ backgroundImage: `url(${item.url})` }}
                  onClick={() => handleBackgroundIamge(index + 1)}
                ></div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
