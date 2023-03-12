import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const HistoryCard = () => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const userID = JSON.parse(localStorage.getItem("@userLogin")).user.id;
  const URL = `https://kopiku.up.railway.app`;
  const [datas, setDatas] = useState([]);
  const [message, setMessage] = useState("");
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${URL}/api/v1/history/62c0585b-327a-431e-aac8-692b9a2da3eb`,
        });
        setDatas(response.data.data);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
    getHistory();
  }, [URL, refetch]);

  const handleDeleteHistory = (historyID) => {
    axios({
      method: "DELETE",
      url: `${URL}/api/v1/history/${userID}/${historyID}`,
    })
      .then((result) => {
        alert(result.data.message);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row w-full flex flex-wrap gap-3 justify-center">
      {datas.length ? (
        datas.map((item) => {
          return (
            <div
              key={item.history_id}
              className="relative flex w-full lg:w-[30%] h-[15vh] lg:h-[20vh] bg-white items-center gap-x-3 rounded-xl px-3 md:px-7 lg:px-3"
            >
              <div className="w-20 h-20 md:max-lg:w-32 md:max-lg:h-32">
                <img
                  src={`${URL}/uploads/images/${item.images[0].filename}`}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col relative">
                <p className="font-extrabold text-xl">{item.product_title}</p>
                <p className="text-[#895537]">
                  IDR {numberWithCommas(item.product_price)}
                </p>
                <p className="text-[#6A4029]">Delivered</p>
              </div>
              <AiFillDelete
                size={32}
                className="absolute right-8 bottom-4 cursor-pointer md:max-lg:w-16 md:max-lg:h-16"
                onClick={() => handleDeleteHistory(item.history_id)}
              />
            </div>
          );
        })
      ) : (
        <div className="flex w-[80%] h-[20vh] rounded-xl justify-center items-center bg-white px-6 mt-20">
          <p className="text-2xl text-center">{message}</p>
        </div>
      )}
    </div>
  );
};

export default HistoryCard;
