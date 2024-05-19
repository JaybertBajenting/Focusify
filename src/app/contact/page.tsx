"use client";

import Navbar from "../components/ui/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="max-w-[1920px] mx-[auto] pl-[50px] pr-[50px]">
      <Navbar />

      <h1 className="font-bold text-[20px] text-center mt-[50px]">
        Contact <span className="text-skyblue">Us</span>
      </h1>
      <p className="text-center mt-[40px]">
        Got a question, suggestion, or just want to say hello? Reach out to us
        through our Contact Us page. We're here <br /> to make your experience
        with Focusify even better. Let's stay connected and keep the
        conversation going!
      </p>

      <div className="ml-[200px] mr-[200px] mt-[100px] pr-[20px] flex justify-between">
        <div className="space-y-3 w-[200px] h-[150px] ">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faMobileScreenButton} size="2xl" />
          </div>
          <h1 className="text-center">Call Us On</h1>
          <p className="text-center">+639957682369</p>
        </div>

        <div className="space-y-3 w-[200px] h-[150px] ">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </div>
          <h1 className="text-center">Email Us At</h1>
          <p className="text-center">focusify@gmail.com</p>
        </div>

        <div className="space-y-3 w-[200px] h-[150px] ">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faLocationDot} size="2xl" />
          </div>
          <h1 className="text-center">Visit Office</h1>
          <p className="text-center">123,Amoa Stret, Skina</p>
        </div>
      </div>

      <div className="mt-[100px] space-y-[30px]">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Your Name"
            className="w-[650px] h-[50px] px-[15px] rounded-md border-[1px]"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-[650px] h-[50px] px-[15px] rounded-md border-[1px]"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Subject"
            className="w-[1820px] h-[50px] px-[15px] rounded-md border-[1px]"
          />
        </div>

        <div className="flex justofy-center">
          <textarea
            placeholder="Enter Message"
            className=" w-[1820px] h-[100px] px-[15px] rounded-md border-[1px]"
          />
        </div>
      </div>
      <div className="mt-[100px] mb-[50px] flex justify-center">
        <button className="bg-skyblue text-white rounded-md box-border px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact;
