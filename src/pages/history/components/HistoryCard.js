import React from "react";

const HistoryCard = () => {
  const historyCart = JSON.parse(localStorage.getItem("@cart"));
  console.log(historyCart);
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  if (historyCart === null) {
    return <div></div>;
  }
  return (
    <div className="row w-full flex flex-wrap gap-3 justify-center">
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => { */}
      {historyCart.map((item) => {
        return (
          <div className="relative flex w-full lg:w-[30%] h-[15vh] bg-white items-center gap-x-3 rounded-xl px-3">
            <div className="w-[20%]">
              <img
                // src={require("../../../assets/img/veggie-tomatto-mix.webp")}
                src={item.imageCart}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="flex flex-col relative">
              <p className="font-extrabold text-xl">{item.titleCart}</p>
              <p className="text-[#895537]">
                IDR {numberWithCommas(item.priceCart)}
              </p>
              <p className="text-[#6A4029]">Delivered</p>
            </div>
            <input
              type="checkbox"
              name=""
              id=""
              className="absolute right-8 bottom-4 w-5 h-5"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HistoryCard;
