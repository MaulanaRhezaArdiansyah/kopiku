import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const ImageCard = ({ setAvatar, preview, setPreview }) => {
  const [dataImageCard, setDataImageCard] = useState({
    image: "",
    email: "",
    username: "",
  });

  const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
  const userID = userLogin.user.id;
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/users/${userID}`)
      .then((res) => {
        setRefetch(!refetch);
        setDataImageCard(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refetch, userID]);

  const handleEditAvatar = (e) => {
    const file = e.target.files[0];
    const imageSize = e.target.files[0].size;
    if (imageSize > 1048576 * 5) {
      alert("Size image can't be more larger than 5MB");
    }
    setPreview(URL.createObjectURL(file));
    setAvatar(file);
  };
  return (
    <div className="image-card bg-white w-full lg:w-[40%] h-[22rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-4 items-center justify-center py-4 md:max-lg:mb-10 max-sm:mb-5">
      <figure className="w-24 h-24 rounded-full relative hover:opacity-80 cursor-pointer duration-100">
        <label htmlFor="avatar">
          <img
            src={
              preview
                ? preview
                : dataImageCard.image &&
                  // `https://kopiku.up.railway.app/images/${dataImageCard.image}`
                  `${process.env.REACT_APP_URL}/images/${dataImageCard.image}`
            }
            alt=""
            className="rounded-full"
          />
        </label>
        <input
          type="file"
          name=""
          id="avatar"
          className="hidden"
          onChange={(e) => handleEditAvatar(e)}
        />
        <div className="bg-[#6A4029] rounded-full w-8 h-8 flex items-center justify-center absolute right-0 bottom-0">
          <img src={require("../../../assets/img/pencil.png")} alt="pencil" />
        </div>
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
