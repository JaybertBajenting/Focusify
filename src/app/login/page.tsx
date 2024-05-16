"use client"
import { TextField } from "@mui/material";
import GoogleIcon from "../components/ui/Google";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../context/userAuth";
import Router from "next/router";
import { useRouter } from "next/navigation";

import { getUserCookie } from "@/lib/cookies";




const Login = () => {

    
  const[username,setUsername] = useState<string>("");
  const[password,setPassword] = useState<string>("");

  
  
  const {onLogin} = useAuth();

  const router = useRouter();
  


  const handleLogin = async(username:string,password:string) =>{
      
      const response = await fetch("http://localhost:8080/api/v1/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          username:username,
          password:password
        })
      })
        
        const data = await response.json();
      
      
       
      if(response.status === 200){
        onLogin(data);
     
     
 const user = await getUserCookie();
 console.log("User is authenticated",user.isAuthenticated);   
 router.push("/main");

      }else{
        alert("error has been found!");
        console.log("Erorr");
      }
    
  }


  



  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[420px] h-[600px] rounded-[15px] shadow-2xl text-center">
        <div className="flex justify-center">
          <button className="flex justify-center items-center h-[40px] w-[350px] border-[1px] rounded-[15px] mt-[50px] mb-[50px] py-[25px] font-bold border-black">
            <div className="w-[25px] h-[25px] mr-[10px]">
              <GoogleIcon />
            </div>
            Continue With Google
          </button>
        </div>
        <h1 className="text-[12px] mb-[40px]">OR</h1>
        <TextField
          value = {username}
          label="Username"
          id="username"
          className="w-[350px] text-[12px]"
          InputProps={{
            style: { borderRadius: "15px" },
          }}
          onChange = {(e) => setUsername(e.target.value)}
          
        />
        
        <div className="mt-[25px]"></div>
        <TextField
        value={password}
          type="password"
          label="Password"
          id="password"
          className="w-[350px] text-[12px]"
          InputProps={{
            style: { borderRadius: "15px" },
          }}
          onChange = {(e) => setPassword(e.target.value)}
        />  
        
        
        


        

        <div className="flex justify-center mt-[50px]">
          <input
            type="checkbox"
            value="remember"
            name="remember"
            id="remember"
          />
          <label htmlFor="remember" className="text-[12px] ml-[10px]">
            Remember me
          </label>
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center justify-center h-[40px] w-[350px] boarder-[1px] rounded-[15px]
                    mt-[50px] bg-skyblue mb-[50px] py-[25px] text-white"
          onClick={() => handleLogin(username,password)}>
            Sign in
          </button>
        </div>

          
        
            
        <p className="text-[14px]">
          Not a member?{" "}
          <Link href="/register" className="text-skyblue">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
