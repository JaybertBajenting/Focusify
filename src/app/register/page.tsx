
import GoogleIcon from "../components/Google";
import { TextField } from "@mui/material";
import Link from "next/link";

const Register = () =>{
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
              label="Username"
              id="username"
              className="w-[350px] text-[12px]"
              InputProps={{
                style: { borderRadius: "15px" },
              }}
            />
            <div className="mt-[25px]"></div>
            <TextField
              type="password"
              label="Password"
              id="password"
              className="w-[350px]"
              InputProps={{
                style: { borderRadius: "15px" },
              }}
            />
            <div className="flex justify-center mt-[50px]">
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
              <button className="flex justify-center items-center h-[40px] w-[350px] border-[1px] rounded-[15px] mt-[50px] bg-skyblue mb-[50px] py-[25px] text-white">
                Create Account
              </button>
            </div>
    
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