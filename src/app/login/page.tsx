"use client";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../context/userAuth";
import { useRouter } from "next/navigation";
import GoogleIcon from "../components/ui/Google";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { onLogin } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      "https://focusify.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      console.log("Success");
      localStorage.setItem("user", JSON.stringify(data));
      onLogin(data);
      setTimeout(() => {
        router.push("/main");
      }, 100);
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
      console.log("Error");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[420px] h-[600px] rounded-[15px] shadow-2xl text-center">
        <form onSubmit={handleLogin}>
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
            value={username}
            label="Username"
            id="username"
            className="w-[350px] text-[12px]"
            InputProps={{
              style: { borderRadius: "15px" },
            }}
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="text-red-500 mt-2">
              <p>{errorMessage}</p>
            </div>
          )}

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
              className="flex items-center justify-center h-[40px] w-[350px] boarder-[1px] rounded-[15px] mt-[50px] bg-skyblue mb-[20px] py-[25px] text-white"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>

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
