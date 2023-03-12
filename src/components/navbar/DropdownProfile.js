import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DropdownProfile({ isVisible, closeModal, setIsLogin }) {
  const navigate = useNavigate();
  //   const [showModal, setShowModal] = useState(false);
  //   const userRole = JSON.parse(localStorage.getItem("@userLogin")).user.role;
  //   const userLoginID = JSON.parse(localStorage.getItem("@userLogin")).user.id;
  if (!isVisible) return null;
  return (
    <>
      <div className="flex flex-col w-[12rem] h-[20rem] bg-white shadow-2xl absolute md:top-24 md:right-32 bottom-28 right-10 max-sm:top-24 max-sm:right-4 rounded-xl p-6 items-center justify-center space-y-2">
        <p
          onClick={() => navigate(`/`)}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          Home
        </p>

        <p
          onClick={() => {
            navigate("/product");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          Product
        </p>

        <p
          onClick={() => {
            navigate("/payment");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          Cart
        </p>

        <p
          onClick={() => {
            navigate("/history");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          History
        </p>

        <p
          onClick={() => {
            navigate("/profile");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          Profile
        </p>

        <p
          onClick={() => {
            localStorage.removeItem("@userLogin");
            setIsLogin(false);
            navigate("/product");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-[#fbbf24] duration-150 cursor-pointer"
        >
          Logout
        </p>
      </div>
    </>
  );
}
