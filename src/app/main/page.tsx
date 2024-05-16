"use client";

import useAuth from "../context/userAuth";
import { useRouter } from "next/navigation";
import Sidebar from "../components/ui/Sidebar";
import { Logo } from "../components/ui/Navbar";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import Timer from "../components/ui/Timer";
import Goal from "../components/ui/Goal";
import Music from "../components/ui/Music";
import { SlPicture } from "react-icons/sl";
import { CiMusicNote1 } from "react-icons/ci";
import { BsChatQuote } from "react-icons/bs";
import { backgroundPictures } from "../pictures";
import { useEffect, useState } from "react";

const Main = () => {
  const { onLogout } = useAuth();
  const router = useRouter();

  const [backgroundModal, setBackgroundModal] = useState<boolean>(true);
  const [quoteModal, setQuoteModal] = useState<boolean>(false);
  const [musicModal, setMusicModal] = useState<boolean>(false);

  const [quote,setQuote] = useState<string>("");

  
  const [pictures, setPictures] = useState(backgroundPictures);
  const[index,setIndex] = useState<string>("/background/fullbg1.png");
  
  
  
  

  const handleBackgroundIamge = (id: number) => {
    setIndex("/background/fullbg" + id + ".png");
    console.log(index);
  }


  const handleQuote = async () =>{
      try{

          const response = await fetch("https://api.quotable.io/random");
          const data = await response.json();
          setQuote(data.content);
      }catch(error){
        console.log(error);
      }
  }

  


  useEffect(() =>{
    handleQuote();

  },[quoteModal])



  const handleLogout = () => {
    onLogout();
  };




  const handleMusicModal = () => {
        setMusicModal(true);
        setQuoteModal(false);
        setBackgroundModal(false);
  };

  const handleQuoteModal = () =>{
    
      setQuoteModal(true);
      setMusicModal(false);
      setBackgroundModal(false);
  }

  
  const handleBackgroundModal = () =>{
    setBackgroundModal(true);
    setMusicModal(false);
    setQuoteModal(false);
      
  }
  
  


  return (
    <div className="w-full h-screen  max-w-[1920px] mx-auto bg-no-repeat bg-cover" style={{backgroundImage: `url(${index})`}}>
      {/*
      <div className=" flex justify-center">
        <Logo />
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="flex justify-end">
        <div>
          <h1 className="text-white">hahah</h1>
        </div>
      </div>

      <div className="ml-[30px]">
        <div className="">
          <Timer />
          <Goal />
        </div>
      </div>
  */}

       
       
  

      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="flex justify-between ml-[30px] mr-[30px]">
        <div className="space-y-[20px] mt-[50px]">
          <Timer />
          <Goal />
        </div>

        <div className="space-y-[20px]">
          <div className="flex justify-between w-[350px]">
            <div className="w-[80px] h-[50px] bg-skyblue rounded-[5px] flex justify-center items-center cursor-pointer"  onClick={handleBackgroundModal}>
              <SlPicture
                className="w-[25px] h-[25px] cursor-pointer"
                color="white"
              
              />
            </div>

            <div
              className="w-[80px] h-[50px] bg-skyblue rounded-[5px] flex justify-center items-center cursor-pointer"
              onClick={handleMusicModal}
            >
              <CiMusicNote1
                className="w-[25px] h-[25px] cursor-pointer"
                color="white"
              />
            </div>
          
            

            <div className="w-[80px] h-[50px] bg-skyblue rounded-[5px] flex justify-center items-center cursor-pointer" onClick={handleQuoteModal}>
              <BsChatQuote
                className="w-[25px] h-[25px] cursor-pointer"
                color="white"
              />
            </div>
          </div>
          {musicModal && <Music />}
          
          {quoteModal &&
          <div className="w-[350px] bg-white bg-opacity-50 rounded-[10px] pb-[20px]">
            <div className="ml-[10px] mr-[10px] space-y-[10px]">
              <h1 className="pt-[20px]">Motivational quote</h1>
              <div className="w-[330px] min-h-[90px]  flex justify-center items-center rounded-[10px] bg-white">
                <p className="text-skyblue text-[14px] text-center">{quote}</p>
              </div>
            </div>
          </div>
          }
          {backgroundModal && 
          <div className="w-[350px] bg-yellow-500 rounded-[10px] pb-[20px]">
          <div className="ml-[10px] mr-[10px]">
            <h1 className="mt-[15px] mb-[15px]">Choose Background</h1>
            <div className=" grid grid-rows-3  grid-flow-col gap-y-4">
              {pictures.map((item, index) => (
                <li key={index} className="list-none gap-4 ">
                  
                  <div className="w-[105px] h-[80px] rounded-[10px] bg-red-500 cursor-pointer"    style={{backgroundImage: `url(${item.url})`}}
                  onClick = {() => handleBackgroundIamge(index+1)}>         
  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
          }
          
          
          
          <div className="flex justify-end space-x-[10px]">
        <div className=" bg-white flex items-center justify-center w-[50px] h-[50px] rounded-[50%] cursor-pointer">
          <CiUser className="w-[25px] h-[25px]" color="skyblue" />
        </div>

        <div
          className=" bg-white flex items-center justify-center w-[70px] h-[40px] rounded-[10px] mt-[5px] cursor-pointer"
          onClick={handleLogout}
        >
          <IoIosLogOut
            className="w-[25px] h-[25px]"
            color="red"
            onClick={handleLogout}
          />
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Main;
