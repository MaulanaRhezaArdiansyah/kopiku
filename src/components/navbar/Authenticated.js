import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownProfile from "./DropdownProfile";

export default function Authenticated({ setIsLogin, setKeyword, setRefetch }) {
  const [showModal, setShowModal] = useState(false);

  const [datas, setDatas] = useState("");
  const [userID, setUserID] = useState("");
  const [reget, setReget] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await localStorage.getItem("@userLogin");
        const data = JSON.parse(response);
        const dataID = data.user.id;
        setUserID(dataID);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const response = await axios.get(
          `https://kopiku.up.railway.app/api/v1/users/${userID}`
        );
        const data = response.data.data;
        setReget(!reget);
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAvatar();
  }, [reget, userID]);

  const avatar = datas?.image;
  return (
    <>
      <div className="flex gap-x-3 items-center">
        <div className="bg-[#EFEEEE] rounded-full flex items-center">
          <input
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            type="text"
            className="bg-[#EFEEEE] rounded-l-full max-sm:rounded-full px-4 py-2 max-sm:w-[150px]"
            placeholder="Search"
          />

          <button
            onClick={() => {
              setRefetch(true);
            }}
            className="flex rounded-r-full py-2 px-4 border-l-[1px] border-slate-400 max-sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-x-3">
          <Link to="/chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </Link>
        </div>

        <div
          onClick={() => setShowModal(!showModal)}
          className="w-8 h-8 rounded-full cursor-pointer border-zinc-500 duration-200"
        >
          <img
            src={avatar && `https://kopiku.up.railway.app/images/${avatar}`}
            alt=""
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>

      <DropdownProfile isVisible={showModal} setIsLogin={setIsLogin} />
    </>
  );
}
