"use client";

import React, { useState, useEffect } from "react";

const ProfilePage: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.user.id);
      fetchProfilePicture(parsedUser.user.id);
    }
  }, []);

  const fetchProfilePicture = async (userId: string) => {
    try {
      const response = await fetch(
        `https://focusify.onrender.com/api/v1/auth/user/getProfilePicture/${userId}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      } else {
        console.error("Failed to fetch profile picture:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile picture:", error);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setImage(reader.result as string);
        setFile(file); 
        setIsModalOpen(false); 

        if (!userId) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await fetch(
            `https://focusify.onrender.com/api/v1/auth/user/updateProfilePicture/${userId}`,
            {
              method: "PUT",
              body: formData,
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Image uploaded successfully:", data);
            fetchProfilePicture(userId); 
          } else {
            console.error("Failed to upload image:", response.statusText);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 text-xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/images/default-avatar.jpg"
            alt="Default Avatar"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Change
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl mb-4">Upload Profile Picture</h2>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        />
      </Modal>
    </div>
  );
};

export default ProfilePage;
