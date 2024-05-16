"use client";
import React from "react";
import { Logo } from "./Navbar";
import { HiOutlineHome } from "react-icons/hi2";
import { CiUser, CiMedal } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive = pathName.startsWith("/profile");

  const backStyle = {
    color: "red",
  };

  return (
    <div className="w-[100px] h-screen">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-[30px] flex flex-col space-y-[50px]">
          <div className="flex justify-center ml-[20px]">
            <HiOutlineHome className="w-[30px] h-[30px] cursor-pointer" />
          </div>
          <div
            className={
              isActive
                ? "ml-[15px]  flex justify-center rounded-l-[25px] bg-skyblue"
                : "ml-[20px]  flex justify-center rounded-[15px]"
            }
          >
            <CiUser
              className="w-[30px] h-[30px] cursor-pointer mt-[10px] mb-[10px]"
              color={isActive ? "white" : ""}
              onClick={() => router.push("/profile")}
            />
          </div>
          <div
            className={
              !isActive
                ? "ml-[15px]  flex justify-center rounded-l-[25px] bg-skyblue"
                : " ml-[20px] flex justify-center rounded-[15px]"
            }
          >
            <CiMedal
              className="w-[30px] h-[30px] cursor-pointer mt-[10px] mb-[10px]"
              color={!isActive ? "white" : ""}
              onClick={() => router.push("/medal")}
            />
          </div>

          <div className="flex justify-center">
            <IoIosLogOut
              className="ml-[20px] w-[30px] h-[30px] cursor-pointer mt-[250px]"
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
