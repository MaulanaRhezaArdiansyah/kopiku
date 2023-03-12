import background from "../../assets/img/bg.webp";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../BrandLogo";
import AuthBtn from "../AuthBtn";
import { useState } from "react";
import axios from "axios";

const ContentSignup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/api/v1/auth/register`,
      data: signupData,
    })
      .then((res) => {
        console.log(res.data.data);
        setSignupData(res.data.data);
        navigate("/auth/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  return (
    <>
      <section className="flex w-full h-[130vh] md:max-lg:h-[150vh] ">
        <section
          className="w-1/2 h-full max-sm:hidden md:max-lg:hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${background})` }}
        ></section>
        <section className="w-1/2 max-sm:w-full md:max-lg:w-full h-full px-20 max-sm:px-10 flex flex-col">
          <div className="flex justify-between items-center w-full h-20 pt-10">
            <BrandLogo />
            {/* <Link to="/auth/login">
              <button class="text-[#6A4029] font-bold bg-amber-400 text-lg px-12 p-3 rounded-full">
                Login
              </button>
            </Link> */}
            <AuthBtn content="Login" linkto="/auth/login" />
          </div>
          {/* <div className="flex flex-col gap-5">
            <p className="text-[#6A4029] font-black text-3xl text-center pt-14">
              Sign Up
            </p>
            <label for="email" className="flex flex-col gap-y-2">
              <p className="text-[#4F5665] font-bold">Email address:</p>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            <label for="password" className="flex flex-col gap-y-2">
              <p className="text-[#4F5665] font-bold">Password:</p>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            <label for="phone" className="flex flex-col gap-y-2">
              <p className="text-[#4F5665] font-bold">Phone number:</p>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            <div className="flex flex-col gap-6 pt-10">
              <Link to="/auth/login" className="flex">
                <button className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full">
                  Sign Up
                </button>
              </Link>
              <button className="text-[#000000] bg-white font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
                <img src="../img/google.webp" alt="" />
                <p>Sign up with Google</p>
              </button>
            </div>
          </div> */}
          <p className="text-[#6A4029] font-black text-3xl text-center pt-14  mb-8">
            Sign Up
          </p>
          <form
            action=""
            onSubmit={handleSignup}
            className="flex flex-col gap-5 "
          >
            {validate.error && (
              <div className="error-message bg-red-200 text-red-500 p-5 rounded-lg font-bold italic">
                {validate.message}
              </div>
            )}
            <label
              for="email"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Email address:
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                onChange={(e) => {
                  setSignupData({
                    ...signupData,
                    email: e.target.value,
                  });
                  // console.log(e.target.value);
                }}
              />
            </label>
            <label
              for="password"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Password:
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                onChange={(e) => {
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  });
                  // console.log(e.target.value);
                }}
              />
            </label>
            <label
              for="phone"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Phone number:
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                onChange={(e) => {
                  setSignupData({
                    ...signupData,
                    phone: e.target.value,
                  });
                }}
              />
            </label>
            {/* <Link to="/auth/login" className="flex"> */}
            <button
              type="submit"
              // onClick={() => navigate("/auth/login")}
              className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full"
            >
              Sign Up
            </button>
            {/* </Link> */}
            <button className="text-[#000000] bg-white font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
              <img src={require("../../assets/img/google.webp")} alt="" />
              <p>Sign up with Google</p>
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default ContentSignup;
