"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import { FiSearch } from "react-icons/fi"; 

interface UserOnly {
  id: number;
  name: string;
  hoursStudied: number;
  originalIndex: number; 
}

const Leaderboard = () => {
  const [users, setUsers] = useState<UserOnly[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGetUsers = async () => {
    try {
      const response = await fetch(
        "https://focusify.onrender.com/api/v1/auth/user/task/getLeaderBoards",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        
        const usersWithIndex = data.map((user: UserOnly, index: number) => ({
          ...user,
          originalIndex: index + 1,
        }));
        setUsers(usersWithIndex);
        console.log("Data are", usersWithIndex);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex max-w-[1920px] mx-auto">
      <Sidebar />
      <div className="w-full h-screen flex justify-center bg-mainBg">
        <div className="bg-white w-[800px] h-[500px] p-[20px] rounded-[10px] mt-[100px] shadow-lg">
          <h1 className="font-bold pb-[20px] text-2xl">Leaderboard</h1>
          <div className="relative mb-[20px]">
            <input
              type="text"
              placeholder="Search user"
              className="p-[10px] border-2 w-[300px] rounded-[10px] pl-[40px] focus:outline-none focus:border-skyblue"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute left-3 top-3">
              <FiSearch />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-h-[325px] overflow-y-auto rounded-[5px] shadow-md">
              <table className="w-full mt-[20px] rounded-[5px] overflow-auto shadow-md">
                <thead className="bg-skyblue text-white font-mono">
                  <tr>
                    <th className="text-left p-[10px]">Rank</th>
                    <th className="text-left p-[10px]">Name</th>
                    <th className="text-left p-[10px]">Study Hours</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredUsers?.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition-colors duration-200"
                    >
                      <td className="text-left p-[10px] border-b">
                        {item.originalIndex}
                      </td>
                      <td className="text-left p-[10px] border-b">
                        {item.name}
                      </td>
                      <td className="text-left p-[10px] border-b">
                        {item.hoursStudied}
                      </td>
                    </tr>
                  ))}
                  {filteredUsers?.length === 0 && (
                    <tr>
                      <td className="text-left p-[10px] border-b" colSpan={3}>
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
