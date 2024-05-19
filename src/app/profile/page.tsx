"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/ui/Sidebar";
import { UserDetails } from "../context/userAuth";
import { FaTimes } from "react-icons/fa";
import ProfilePage from "../components/ui/ProfilePage";

export interface UserData {
  user: UserDetails;
  token: string;
}

const Profile = () => {
  const [parsedUser, setParsedUser] = useState<UserData | null>(null);
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  useEffect(() => {
    const getUserfromLocalStorage = localStorage.getItem("user");
    if (getUserfromLocalStorage !== null) {
      const parsed = JSON.parse(getUserfromLocalStorage);
      setParsedUser(parsed);

      const fullName = parsed.user.name || "";
      const nameParts = fullName.split(" ");
      setFirstName(nameParts[0]);
      setLastName(nameParts.slice(1).join(" "));
    }
  }, []);

  const handleProfileModal = () => {
    setProfileModal(!profileModal);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userId = parsedUser?.user.id;
      const response = await fetch(
        `https://focusify.onrender.com/api/v1/auth/updateUser/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            password: pass,
            lastName: lastName,
          }),
        }
      );

      const data = await response.json();
      if (response.status === 200) {
        const updatedUser = {
          ...parsedUser,
          user: {
            ...parsedUser?.user,
            name: `${firstName} ${lastName}`,
            password: "",
          },
          token: parsedUser!.token,
        };

        setParsedUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        handleProfileModal();
      }
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <div className="flex mx-auto max-w-[1920px]">
      <Sidebar />
      <div className="w-full h-screen bg-mainBg flex justify-center">
        <div>
          <div className="bg-skyblue w-[800px] h-[300px] rounded-[10px] mt-[100px]"></div>

          <div className="flex">
            <div className=" ml-[30px] mt-[-30px]">
              <ProfilePage />
            </div>
            <div className="ml-[20px]">
              <p>{parsedUser?.user.name}</p>

              <p> {parsedUser?.user.username}</p>
              <button
                className="text-white bg-skyblue rounded-[15px] h-[40px] w-[100px]"
                onClick={handleProfileModal}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {profileModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute bg-black opacity-50 inset-0"></div>
            <div className="absolute bg-white rounded-lg p-8 w-[700px] h-[300px]">
              <h1 className="text-center mb-4">Edit Profile</h1>
              <button
                className="absolute top-2 right-2"
                onClick={handleProfileModal}
              >
                <FaTimes />
              </button>
              <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label className="block mb-1">Username</label>
                    <input
                      type="text"
                      className="border border-gray-400 rounded p-1 w-full"
                      value={parsedUser?.user.username || ""}
                      readOnly
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label className="block mb-1">Password</label>
                    <input
                      type="password"
                      className="border border-gray-400 rounded p-1 w-full"
                      placeholder="••••••••••"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label className="block mb-1">First Name</label>
                    <input
                      type="text"
                      className="border border-gray-400 rounded p-1 w-full"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label className="block mb-1">Last Name</label>
                    <input
                      type="text"
                      className="border border-gray-400 rounded p-1 w-full"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-skyblue rounded-[15px] h-[40px] w-[150px]"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
