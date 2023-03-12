import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ContactCard = ({ datas, setData }) => {
  const [dataContact, setDataContact] = useState([
    {
      delivery_address: "",
      email: "",
      id: "",
      phone: "",
    },
  ]);
  // console.log(datas);

  const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
  const userID = userLogin.user.id;

  useEffect(() => {
    axios
      .get(`https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${userID}`)
      .then((res) => {
        // console.log(res.data.data);
        setDataContact(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="contact-card bg-white w-full lg:w-[60%] h-[22rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-5 px-8 py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-[#4F5665]">Contacts</h3>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="email">
          Email address :
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataContact.email}
          onChange={(e) =>
            setData({
              ...datas,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="">
          Mobile number :
        </label>
        <input
          type="tel"
          name="phone"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataContact.phone}
          onChange={(e) =>
            setData({
              ...datas,
              phone: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <label className="text-[#9F9F9F]" htmlFor="deliveryaddress">
          Delivery address :
        </label>
        <input
          type="text"
          name="deliveryaddress"
          className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
          placeholder={dataContact.delivery_address}
          onChange={(e) =>
            setData({
              ...datas,
              delivery_address: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
