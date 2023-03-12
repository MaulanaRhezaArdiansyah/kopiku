import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const ImageCard = () => {
  const [dataImageCard, setDataImageCard] = useState([
    {
      birthday: "",
      delivery_address: "",
      email: "",
      firstname: "",
      gender: "",
      id: "",
      image: "",
      lastname: "",
      password: "",
      phone: "",
      role: "",
      username: "",
    },
  ]);

  const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
  const userID = userLogin.user.id;

  useEffect(() => {
    axios
      .get(`https://kopiku.cyclic.app/api/v1/users/${userID}`)
      .then((res) => {
        // console.log(res.data.data);
        setDataImageCard(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="image-card bg-white w-full lg:w-[40%] h-[22rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-4 items-center justify-center py-4">
      <figure className="w-24 h-24 rounded-full">
        <img
          src={
            dataImageCard.image &&
            `https://kopiku.cyclic.app/uploads/images/${dataImageCard.image}`
          }
          alt=""
          className="rounded-full"
        />
      </figure>
      <div>
        <p className="text-xl font-bold text-center text-black">
          {dataImageCard.username}
        </p>
        <p className="text-center text-sm text-[#4F5665]">
          {dataImageCard.email}
        </p>
      </div>
      <p className="text-[#4F5665]">Has been ordered 15 products</p>
    </div>
  );
};
