import Footer from "../../../components/footer";
// import ContentLogin from "../../../components/content/Login";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BrandLogo from "../../../components/BrandLogo";
import AuthBtn from "../../../components/AuthBtn";
import background from "../../../assets/img/bg.webp";
import AuthCard from "../../../components/AuthCard";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `https://kopiku.up.railway.app/api/v1/auth/login`,
      data: loginData,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        alert("Login success! Enjoy your journey!");
        navigate("/product");
      })
      // .catch((err) => console.log(err.response.data.message));
      .catch((err) =>
        setValidate({ message: err.response.data.message, error: true })
      );
  };

  // console.log(localStorage.getItem("@userLogin"));
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/product");
    }
  }, []);
  return (
    <>
      {/* <ContentLogin /> */}
      <main className="flex flex-col w-full h-[120vh] lg:h-[150vh]">
        <section className="flex w-full h-full">
          <section
            className="w-1/2 h-full max-sm:hidden flex justify-center items-center"
            style={{ backgroundImage: `url(${background})` }}
          ></section>
          <section className="w-1/2 max-sm:w-full h-full px-20 max-sm:px-10 flex flex-col">
            <div className="flex justify-between items-center w-full h-20 pt-10">
              <BrandLogo />
              {/* <Link to="/auth/signup">
                <button className="text-[#6A4029] font-bold bg-amber-400 text-lg px-12 p-3 rounded-full">
                  Sign Up
                </button>
              </Link> */}
              <AuthBtn content="Sign Up" linkto="/auth/signup" />
            </div>
            <p className="text-[#6A4029] font-black text-3xl text-center pt-14  mb-8">
              Login
            </p>
            <form
              action=""
              onSubmit={handleLogin}
              className="flex flex-col gap-5 "
            >
              {validate.error && (
                <div className="error-message bg-red-200 text-red-500 p-5 rounded-lg font-bold italic">
                  {validate.message}
                </div>
              )}

              <label
                // for="email"
                htmlFor="email"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Email address:
                <input
                  type="email"
                  // type="text"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setLoginData({
                      // isi dari form login sebelumnya
                      ...loginData,
                      // kemudian replace dengan data yang baru karena ada key yang sama
                      email: e.target.value,
                    });
                    // console.log(e.target.value);
                  }}
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }}
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <Link to="/forgot" className="text-[#6A4029] font-bold underline">
                Forgot password?
              </Link>

              {/* <Link to="/auth/login" className="flex"> */}
              {/* <Link to="/product" className="flex"> */}
              {/* <Link to="" className="flex"> */}
              <button
                type="submit"
                // onClick={() => {
                //   setDataLogin(dataLogin);
                // }}
                className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full hover:bg-amber-500 duration-300"
              >
                Login
              </button>
              {/* </Link> */}
              <button className="text-[#000000] bg-white hover:bg-slate-200 duration-300 font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
                <img src={require("../../../assets/img/google.webp")} alt="" />
                <p>Login with Google</p>
              </button>
            </form>
          </section>
        </section>

        <section className="flex bg-slate-100 relative justify-center lg:mt-0 py-10 max-sm:py-10 max-sm:h-[50vh] max-sm:mt-10 md:h-[30vh] lg:h-[0vh]">
          {/* <div className="promo-container flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
          <div className="flex flex-col w-2/6 sm:w-3/6 max-sm:w-full gap-y-2">
            <h1 className="text-4xl text-[#0B132A] font-bold">
              Check our promo today!
            </h1>
            <p className="text-base text-[#4F5665]">
              Let's see the deals and pick yours!
            </p>
          </div>
          <div className="flex justify-end">
            <Link to="/product">
              <button className="py-5 px-20 text-lg text-[#6A4029] font-bold cursor-pointer bg-amber-400 rounded-md">
                See promo
              </button>
            </Link>
          </div>
        </div> */}
          <AuthCard
            title="Get your member card now!"
            caption="Let's join with our member and enjoy the deals."
            textBtn="Create Now"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
