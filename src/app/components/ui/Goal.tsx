"use client";
import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { RxCheckbox } from "react-icons/rx";



const Goal = () => {
  const [going, setOngoing] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);

  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = (e: string) => {
    if (e.length !== 0) {
      setTaskList([...taskList, e]);
      setOngoing((prevGoing) => prevGoing + 1);
      setTask("");
    }
  };


  const handleDelete = (index: number) => {
    const newTaskList = [
      ...taskList.slice(0, index),
      ...taskList.slice(index + 1),
    ];
    setTaskList(newTaskList);
    setOngoing((prevGoing) => Math.max(prevGoing - 1, 0));
  };

  const handleCheck = (index: number) => {
    handleDelete(index);
    setCompleted((prev) => prev + 1);

    
  };

  return (
    <div className="w-[300px] bg-white rounded-[10px] mt-[50px] pb-[10px]">
      <div className="ml-[15px] mr-[15px] pt-[15px]">
        <h1 className="text-gray font-bold text-[20px]">Session Goals</h1>
        <div className="space-y-[15px]">
          <div className="flex space-x-[20px]">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              name=""
              id=""
              placeholder="Enter Goal"
              className="px-[10px] py-[10px] rounded-[10px]  text-[16px] w-[200px] border-black border-2"
            />
            <button
              className="font-bold border-black border-2 rounded-[10px] px-[10px]"
              onClick={() => handleAddTask(task)}
            >
              Add
            </button>
          </div>
          <div className="flex bg-mainBg rounded-[10px] h-[125px] px-[20px] justify-between items-center">
            <div className="w-[100px]">
              <h1 className="text-red-500 text-[42px] text-center">{going}</h1>
              <p className="font-bold text-center">Ongoing</p>
            </div>

            <div className="items-center flex">
              <div className="w-[2px] h-[75px] bg-gray-50 "></div>
            </div>

            <div className=" w-[100px]">
              <h1 className="text-green-500 text-[42px] text-center">
                {completed}
              </h1>
              <p className="font-bold text-center">Completed</p>
            </div>
          </div>
        </div>

        <ul className="max-h-[150px] overflow-auto space-y-[10px] mt-[10px]">
          {taskList.map((item, index) => (
            <li
              key={index}
              className=" bg-mainBg rounded-[10px] py-[10px] px-[15px]"
            >
              <div className="flex justify-between">
                <div className="flex">
                  <RxCheckbox
                    className="cursor-pointer w-[25px] h-[25px] "
                    onClick={() => handleCheck(index)}
                  />
                  {item}
                </div>

                <div>
                  <CiTrash
                    className="cursor-pointer w-[25px] h-[25px]"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goal;
