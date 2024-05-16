"use client"
import GoogleIcon from "../components/ui/Google";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { FormData, UserSchema } from "@/types/types";
import FormField from "../components/form/FormField";
import { zodResolver } from "@hookform/resolvers/zod";






const Register = () =>{



  
    const {push} = useRouter();
    
    

    const{register,handleSubmit,formState:{errors},setError} = useForm<FormData>({
      resolver: zodResolver(UserSchema)
    });
    
    



    const styleInput = "text-[14px] rounded-[10px] py-[12px] px-[11px] w-[300px]";
    
    /*
    const[username,setUsername] = useState<string>("");
    const[password,setPassword] = useState<string>("");
  
    
    

    


    const handleSubmitRegister = async(username:string, password:string) =>{
              const response = await fetch("http://localhost:8080/api/v1/auth/register",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body: JSON.stringify({
                  username:username,
                  password:password
                })
              })
              if(response.status === 200){
                
                alert("Account Created Successfuly!")
                push("/login");
              }
              if(response.status === 400){
               alert(Error);
                return;
              }
             
            }
*/
            
      
         
    
    


            
    const onSubmit = async(data:FormData) =>{
            const response = await fetch("http://localhost:8080/api/v1/auth/register",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                "username":data.email,
                "password": data.password,
                "firstName":data.firstName,
                "lastName": data.lastName
              })
            })

            if(response.status === 200){
                
              alert("Account Created Successfuly!")
              push("/login");
            }
            if(response.status === 400){
             alert(Error);
              return;
            }
    }
    
   


    return (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-[420px]  rounded-[15px] shadow-2xl text-center">
            <div className="flex justify-center">
              <button className="flex justify-center items-center h-[40px] w-[350px] border-[1px] rounded-[15px] mt-[50px] mb-[25px] py-[25px] font-bold border-black">
                <div className="w-[25px] h-[25px] mr-[10px]">
                  <GoogleIcon />
                </div>
                Continue With Google
              </button>
            </div>
            <h1 className="text-[12px] mb-[25px]">OR</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className = "flex flex-col text-center items-center space-y-[10px]">
              ;
              <FormField
              type = "email"
              placeholder="Email"
              name="email"
              register={register}
              error = {errors.email}
              className = {styleInput}
              />

                 

                 
<FormField
              type="text"
              placeholder="FirstName"
              name="firstName"
              register={register}
              error = {errors.firstName}
              className = {styleInput}
              />
                



            <FormField
              type="text"
              placeholder="Last Name"
              name="lastName"
              register={register}
              error = {errors.lastName}
              className = {styleInput}
            />


              
         
              <FormField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              error = {errors.password}
              className = {styleInput}
              />
  


    
              <FormField
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                register={register}
                error = {errors.confirmPassword}
                className = {styleInput}
              />
    
       <div className="flex justify-center">

     
       <button className="mt-[20px] flex justify-center items-center h-[40px] w-[350px] border-[1px] rounded-[15px]  bg-skyblue mb-[30px] py-[25px] text-white"
             type="submit">
                Create Account
              </button>
              </div>     
        
            </form>
          
            <div className="flex justify-center">
              <input
                type="checkbox"
                value="terms"
                name="terms"
                id="terms"
              />
              <label htmlFor="terms" className="text-[12px] ml-[10px]">
                I agree to the terms and conditions
              </label>
            </div> 
            <div className="flex justify-center">
              {/*}
              <button className="flex justify-center items-center h-[40px] w-[350px] border-[1px] rounded-[15px] mt-[50px] bg-skyblue mb-[50px] py-[25px] text-white"
              onClick={() => handleSubmitRegister(username,password)}>
                Create Account
              </button>
    */}
              </div>
           
           {/*
          


          



            <TextField
              label="Username"
              id="username"
              value={username}
              className="w-[350px] text-[12px]"
              InputProps={{
                style: { borderRadius: "15px" },
              }}
              onChange = {(e:any) => setUsername(e.target.value)}
            />
            <div className="mt-[25px]"></div>
            <TextField
              type="password"
              label="Password"
              id="password"
              value={password}
              className="w-[350px]"
              InputProps={{
                style: { borderRadius: "15px" },
              }}
              onChange = {(e:any) => setPassword(e.target.value)}
            />


            */}
          
          
    
            <p className="text-[14px]">
              Already have an account?{" "}
              <Link href="/login" className="text-skyblue">
                Log in
              </Link>
            </p>
          </div>
        </div>
      );
}

export default Register;