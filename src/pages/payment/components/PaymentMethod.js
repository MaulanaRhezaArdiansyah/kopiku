import React from "react";

const PaymentMethod = () => {
  // const [payMethod, setPayMethod] =
  // const handlePayMethod = (e) => {
  //   e.preventDefault();
  //   // alert(`The value is : ${e.target.value}`);

  // };

  return (
    <div className="flex flex-col w-full gap-y-3 lg:gap-y-6 lg:mt-14">
      <p className="text-xl lg:text-2xl font-bold text-white">Payment method</p>
      {/* <form className="bg-white w-full h-[30vh] rounded-lg flex flex-col py-2 px-5"> */}
      <div
        // onChange={handlePayMethod}
        className="bg-white w-full h-[30vh] rounded-lg flex flex-col py-2 px-5"
      >
        <div className="flex h-1/3 items-center gap-x-3 text-xl">
          <input type="radio" id="card" name="payment_method" value="Card" />
          <div className="bg-[#F47B0A] w-10 h-10 flex justify-center items-center rounded-md">
            <img src={require("../../../assets/img/card.webp")} alt="" />
          </div>
          <label htmlFor="card">Card</label>
        </div>
        <div className="flex h-1/3 items-center gap-x-3 text-xl">
          <input
            type="radio"
            id="bank_account"
            name="payment_method"
            value="Bank Account"
          />
          <div className="bg-[#895537] w-10 h-10 flex justify-center items-center rounded-md">
            <img
              src={require("../../../assets/img/bank-account.webp")}
              alt=""
            />
          </div>
          <label htmlFor="bank_account">Bank Account</label>
        </div>
        <div className="flex h-1/3 items-center gap-x-3 text-xl">
          <input
            type="radio"
            id="cod"
            name="payment_method"
            value="Cash On Delivery"
          />
          <div className="bg-[#FFBA33] w-10 h-10 flex justify-center items-center rounded-md">
            <img
              src={require("../../../assets/img/fast-delivery.webp")}
              alt=""
              className=""
            />
          </div>
          <label htmlFor="cod">Cash On Delivery</label>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default PaymentMethod;
