"use client";
import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";

const Profile = () => {
  const [formData, setFormData] = useState(new FormData());

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen bg-mainBg flex justify-center ">
        <div className="w-[800px] h-[100px] bg-skyblue mt-[100px] rounded-[10px]">
          <div className="flex justify-end">
            <input type="file" id="files" className="hidden" />

            <label htmlFor="files" className="cursor-pointer">
              Heheh
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
