"use client";
import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import { songsData } from "@/app/audios";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { GiNextButton } from "react-icons/gi";
import { FaBackwardStep } from "react-icons/fa6";
const Music = () => {
  const [songs, setSongs] = useState(songsData);

  const [index, setIndex] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioElem = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);

    if (isPlaying != true) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioElem.current) {
      audioElem.current.currentTime = parseFloat(e.target.value);
      setCurrentTime(parseFloat(e.target.value));
    }
  };

  const handleTimeUpdate = () => {
    if (audioElem.current) {
      setCurrentTime(audioElem.current.currentTime);
      setDuration(audioElem.current.duration);
    }
  };

  function formattedDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioElem.current?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElem.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleNext = () => {
    const nextIndex = (index + 1) % songs.length;
    setIndex(nextIndex);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleBack = () => {
    const prevIndex = (index - 1 + songs.length) % songs.length;
    setIndex(prevIndex);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const onDurationChangeHandler = (e: any) => {
    const seconds = Math.floor(e.target.duration);
    setDuration(seconds);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[350px] rounded-[10px] bg-white bg-opacity-70">
        <div className="ml-[10px] mr-[10px]">
          <img src={songs[index].pic} alt="" className="mt-[30px] mb-[10px]" />
          <h1>{songs[index].title}</h1>
          <p className="text-[12px] mb-[10px]">{songs[index].artist}</p>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-[330px]"
          />
          <div className="flex justify-between">
            <p>{formattedDuration(currentTime)}</p>
            <p>{formattedDuration(duration)}</p>
          </div>
          <div className="flex justify-between mb-[20px] mt-[15px]">
            <FaBackwardStep
              className="w-[50px] h-[25px] cursor-pointer"
              onClick={handleBack}
            />
            <div className="w-[50px] h-[50px] border-[5px] border-skyblue bp rounded-[50%] flex justify-center items-center">
              <button onClick={handlePlay}>
                {isPlaying ? (
                  <CiPause1 className="w-[25px] h-[25px] " color="red" />
                ) : (
                  <CiPlay1 className="w-[25px] h-[25px]" color="red" />
                )}
              </button>
            </div>
            <GiNextButton
              className="w-[50px] h-[25px] cursor-pointer"
              onClick={handleNext}
            />
          </div>
          <audio
            src={songs[index].url}
            ref={audioElem}
            onDurationChange={onDurationChangeHandler}
          />
        </div>
      </div>

      
    </div>
  );
};

export default Music;
