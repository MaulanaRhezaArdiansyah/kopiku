import React from "react";

const DelivAndTime = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center max-sm:px-2">
      <div className="bg-white rounded-lg w-full md:max-lg:w-[80%] h-[50vh] max-sm:h-[30vh] max-sm:gap-4 max-sm:p-5 md:max-lg:h-[40vh] flex flex-col gap-y-8 p-10 justify-center items-start shadow-xl shadow-slate-300 md:max-lg:text-xl">
        <p className="text-lg md:max-lg:text-2xl font-bold text-black">
          Delivery and Time
        </p>
        <div className="flex gap-x-3 items-center">
          <input
            type="button"
            value="Dine in"
            className="px-3 py-2 rounded-md bg-[#6A4029] font-bold text-white"
          />
          <input
            type="button"
            value="Door delivery"
            className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"
          />
          <input
            type="button"
            value="Pick up"
            className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"
          />
        </div>
        <div className="flex items-center w-full">
          <div className=" w-[20%]">
            <p className="">Now?</p>
          </div>
          <div className=" w-[70%] flex items-center gap-x-3">
            <input
              type="button"
              value="Yes"
              className="px-4 py-2 rounded-md bg-[#6A4029] font-bold text-white"
            />
            <input
              type="button"
              value="No"
              className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <div className="w-[20%] ">
            <p>Set time : </p>
          </div>
          <div className="w-[70%] ">
            <input
              type="text"
              placeholder="Enter time for reservation"
              className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelivAndTime;
