"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { IoPause } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

function Timer() {
  const [remainingTime, setRemainingTime] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);
  const inputRef = useRef<any | null>(null);

  useEffect(() => {
    let intervalId: any;
    if (remainingTime > 0 && !isPaused) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
      }, 1000);
    }

    return () => clearInterval(intervalId); 
  }, [remainingTime, isPaused]); 

  const handleEditClick = () => {
    inputRef.current.focus(); 
    setIsPaused(!isPaused);
  };

  const handleTimeChange = (event: any) => {
    const newTime = event.target.value;
    const timeParts = newTime.split(":");
    if (timeParts.length === 3) {
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);
      const seconds = parseInt(timeParts[2], 10);
      if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setRemainingTime(totalSeconds);
      } else {
        alert("Invalid time format. Please use HH:MM:SS.");
      }
    } else {
      alert("Invalid time format. Please use HH:MM:SS.");
    }
  };

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const hours = Math.floor(remainingTime / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = Math.floor((remainingTime % (60 * 60)) % 60);

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="w-[300px] h-[125px] bg-white rounded-[10px]">
      <h1 className="text-center mb-[30px] font-bold pt-[10px]">
        Personalize Timer
      </h1>
      <div className="flex space-x-[5px] justify-center">
        <input
          ref={inputRef}
          type="text"
          value={formattedTime}
          onChange={handleTimeChange}
          className="w-[150px] text-[28px] font-bold"
        />

        <MdOutlineEdit
          onClick={handleEditClick}
          className="cursor-pointer w-[30px] h-[30px] mt-[5px]"
        />
        {isPaused ? (
          <FaPlay
            onClick={handlePauseClick}
            className="cursor-pointer w-[30px] h-[30px] mt-[5px]"
          />
        ) : (
          <IoPause
            onClick={handlePauseClick}
            className="cursor-pointer w-[30px] h-[30px] mt-[5px]"
          />
        )}
      </div>
    </div>
  );
}

export default Timer;
