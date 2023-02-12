// import ContentForgot from "../../../components/content/Forgot";
import Footer from "../../../components/footer";
import backgroundForgot from "../../../assets/img/forgot-password-bg.webp";
import React from "react";
// import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Forgot = () => {
  return (
    <>
      {/* <ContentForgot /> */}
      <main
        className="flex flex-col gap-y-24 max-sm:gap-y-14 justify-center items-center w-full h-[150vh] bg-cover max-sm:bg-center text-lg font-bold text-white lg:p-32"
        style={{ backgroundImage: `url(${backgroundForgot})` }}
      >
        <div className="flex flex-col gap-y-3 items-center w-full ">
          <h2 className="text-6xl max-sm:text-5xl text-center">
            Forgot your password?
          </h2>
          <p className="text-2xl">Don’t worry, we got your back!</p>
        </div>
        <form
          action=""
          className="w-full h-[20vh] flex max-sm:flex-col max-sm:h-[30vh] max-sm:gap-y-3   items-center justify-center gap-x-8 text-xl"
        >
          <input
            type="email"
            placeholder="Enter your email adress to get link"
            className="w-[70%] max-sm:w-[90%] h-full max-sm:h-[20vh] px-10 rounded-lg text-black"
          />
          <button className="w-[30%] max-sm:w-[70%] h-full max-sm:h-[20vh] p-5 rounded-lg bg-amber-400 text-[#6A4029]">
            Send
          </button>
        </form>

        <div className="flex flex-col w-[60%]  max-sm:w-full  gap-4 items-center text-xl">
          <p className="max-sm:w-[80%] text-center">
            Click here if you didn’t receive any link in 2 minutes
          </p>
          <button className="bg-[#6A4029] text-white w-[70%] h-[20vh] max-sm:w-[70%] max-sm:h-[10vh] rounded-lg">
            Resend Link
          </button>
          {/* <p>{}</p> */}
          <Countdown date={Date.now() + 120000} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Forgot;
