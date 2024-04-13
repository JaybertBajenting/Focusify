"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";







const Logo = () => {
    return (
      <>
        <Image
          src="/images/focusify.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </>
    );
  };


  
  
  
  
  
  
  
  

  const Landing = () =>{
        const router = useRouter();
        
        return(
          <div className="max-w-[1920px] min-w-[500px] mx-[auto] pl-[50px] pr-[50px]">
            
            <Navbar/>
            <div className="mt-[100px] space-y-5 ">
        <h1 className="text-[40px] font-bold text-center">Enhance your study sessions with our  <br />customizable tool</h1>
        <p className="text-center">Stay focused and manage your study time effectively with our study tool. Listen to your favorite
          <br /> tunes or background music to create a conductive study environment.
        </p>
      </div>
      
        <div className="mt-[50px] flex justify-center">
        <button className="rounded-md box-border px-[40px] py-[11px] bg-skyblue text-white text-center  hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
        onClick={() => router.push("/login")}>Study Now!</button>
        </div>

        <div className="flex justify-center mt-[50px]">
          <img src="/images/pic1.png" alt="image of a girl" className="min-w-[100%]"/>
        </div>
        
        <div className="mt-[100px] flex justify-between bg-musicNote">
              <div className="space-y-5">
                <h1 className="font-bold text-[42px]">Supercharge Your Studdy <br />Sessions</h1>
                <p>Experience the Power of Customizable Timers and Music Integration</p>
                <div className="flex justify-center space-x-10 pt-[50px]">
                  <button className="border-box rounded-md  px-[20px] py-[11px] hover:shadow-2xl  transition delay-75 duration-500 ease-in-out" onClick={() => router.push("/register")}>Sign up</button>
                  <button className="bg-skyblue text-white rounded-md box-border px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out" onClick={() => router.push("/login")}>Learn More</button>
                </div>
              </div>
              <img src="/images/pic3.png" alt="" />
        </div>

        <div className="mt-[150px] space-y-5">
            <p className="text-center">Enhance</p>
            <h1 className="text-center text-[32px] font-bold">Step-by-step guide to optimize
            <br />your <span className="text-skyblue">study sessions</span></h1>
            <p className="text-center">Learn how to set up the study tool and make the most out of 
            your study time. Stay focused and <br />improve productivity with customizable timers 
            and a music feature powered by YouTube.</p>
        </div>   
        <div className="flex justify-between mt-[150px] space-x-10">
        <div>
              <img src="/images/pic4.png" alt="" className="cursor-pointer" />
              <p className="text-center">Customizable Timers</p>
            </div>
            <div>
              <img src="/images/pic5.png" alt="" className="cursor-pointer"/>
              <p className="text-center">Music Feature</p>
            </div>
            <div>
              <img src="/images/pic6.png" alt=""  className="cursor-pointer"/>
              <p className="text-center">Optimize Study Sessions</p>
            </div>
           
            </div>
            <div className="mt-[150px] flex justify-center">
                  <div className="space-x-5">
                  <button className="border-box rounded-md  px-[20px] py-[11px] hover:shadow-2xl  transition delay-75 duration-500 ease-in-out" onClick={() => router.push("/register")}>Get Started</button>
                  <button className="bg-skyblue text-white rounded-md box-border px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out" onClick={() => router.push("/login")}>Learn More</button>
                  </div>
        </div>

        <div className="mt-[200px] flex justify-center">
            <Logo/>
        </div>
            
            <div className="mt-[100px] mb-[50px]">
              <hr />
              </div> 

            <div className="flex justify-between mb-[50px]">
              <div className="space-x-10">
              <FontAwesomeIcon icon={faCopyright} size="lg" /> 2024 Focusify. All
            rights reserved
              </div>
              <div className="space-x-20">
              <Link href="#">Contact Us</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms and Conditions</Link>
              </div>
            </div> 
          
          
          </div>

        );
  }


  export default Landing;