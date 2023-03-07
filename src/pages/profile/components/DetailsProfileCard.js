import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const DetailsProfileCard = () => {
  const [dataDetailsCard, setDataDetailsCard] = useState([
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
      .get(`https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${userID}`)
      .then((res) => {
        // console.log(res.data.data);
        setDataDetailsCard(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <form
      action=""
      className="details-card bg-white w-full lg:w-[60%] h-[30rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-5 px-8 py-4"
    >
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-[#4F5665]">Details</h3>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="displayname">
          Display name :
        </label>
        <input
          type="text"
          name="displayname"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataDetailsCard.username}
        />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="firstname">
          First name :
        </label>
        <input
          type="text"
          name="firstname"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataDetailsCard.firstname}
        />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="lastname">
          Last name :
        </label>
        <input
          type="text"
          name="lastname"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataDetailsCard.lastname}
        />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="birthdate">
          Birthdate :
        </label>
        <input
          type="text"
          name="birthdate"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataDetailsCard.birthday}
        />
      </div>
      <div className="gender flex text-[#9F9F9F] text-lg gap-3">
        <input
          type="radio"
          name="male"
          id=""
          value=""
          // className="text-[#9F9F9F]"
        />
        <p className="text-lg">Male</p>
        <input
          type="radio"
          name="female"
          id=""
          value=""
          // className="text-[#9F9F9F]"
        />
        <p className="text-lg">Female</p>
      </div>
    </form>
  );
};
