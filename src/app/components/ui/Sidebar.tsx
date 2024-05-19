"use client";

import React, { useState } from "react";
import { Logo } from "./Navbar";
import { HiOutlineHome } from "react-icons/hi2";
import { CiUser, CiMedal } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/app/context/userAuth";

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { onLogout } = useAuth();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const isActive = pathName.startsWith("/profile");

  const handleLogout = () => {
    onLogout();
  };

  const handleLogoutModalOpen = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutModalClose = () => {
    setLogoutModalOpen(false);
  };

  return (
    <div className="w-[100px] h-screen">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-[30px] flex flex-col space-y-[50px]">
          <div className="flex justify-center ml-[20px]">
            <HiOutlineHome
              className="w-[30px] h-[30px] cursor-pointer"
              onClick={() => router.push("/main")}
            />
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
              onClick={() => router.push("/leaderboard")}
            />
          </div>

          <div className="flex justify-center">
            <IoIosLogOut
              className="ml-[20px] w-[30px] h-[30px] cursor-pointer mt-[250px]"
              color="red"
              onClick={handleLogoutModalOpen}
            />
          </div>
        </div>
      </div>

      
      {logoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-lg font-bold mb-4">Confirm Logout</h1>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  handleLogout();
                  handleLogoutModalClose();
                }}
                className="text-white bg-red-500 px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none"
              >
                Yes
              </button>
              <button
                onClick={handleLogoutModalClose}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
