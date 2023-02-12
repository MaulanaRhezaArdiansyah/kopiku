import "../../assets/css/global.css";
import { Link, NavLink } from "react-router-dom";

const NavbarUnLoggedHome = (props) => {
  return (
    <>
      <div
        id="display-menu-navbar"
        className="bg-white max-sm:w-full max-sm:h-[100vh] sm:w-full sm:h-[100vh] md:w-full md:h-[100vh] flex flex-col items-center text-3xl gap-10 pt-32 fixed"
      >
        <a href="./index.html">Home</a>
        <a href="./product.html">Product</a>
        <a href="./payment.html">Your Cart</a>
        <a href="./history.html">History</a>
        <div className="flex flex-col gap-8 items-center w-full">
          <a href="/login" className="w-[90%]">
            <button className="bg-[#6A4029] text-white py-5 w-full rounded-full">
              Login
            </button>
          </a>
          <a href="./auth-signup.html" className="w-[90%]">
            <button className="bg-amber-400 text-[#6A4029] py-5 w-full rounded-full">
              Sign Up
            </button>
          </a>
        </div>
      </div>
      {/* {{const menuToggle = document.querySelector(".menu-toggle input");
      const navbarMobile = document.getElementById("display-menu-navbar");

      menuToggle.addEventListener("click", function () {
        navbarMobile.classList.toggle("slide");
      })}} */}
      <nav className="bg-white/90 flex items-center justify-around max-sm:justify-between sm:justify-between sm:px-20 md:justify-between md:px-20 lg:justify-around max-sm:px-5 w-full h-28 fixed top-0 z-10 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-x-2 z-10">
          <img src={require("../../assets/img/coffe-logo.webp")} alt="" />
          <p className="text-[#0B132A] font-black text-xl">{props.titleLogo}</p>
        </Link>
        <ul className="flex gap-x-8 max-sm:hidden sm:hidden md:hidden lg:flex">
          <li>
            <NavLink
              to="/"
              // className="text-lg text-[#6A4029] font-bold"
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="text-lg" activeclassname="active">
              Product
            </NavLink>
            {/* <a href="./product.html" className="text-lg">
              Product
            </a> */}
          </li>
          <li>
            <NavLink to="/payment" className="text-lg" activeclassname="active">
              Your Cart
            </NavLink>
            {/* <a href="./payment.html" className="text-lg">
              Your Cart
            </a> */}
          </li>
          <li>
            <NavLink to="/history" className="text-lg" activeclassname="active">
              History
            </NavLink>
            {/* <a href="./history.html" className="text-lg">
              History
            </a> */}
          </li>
        </ul>
        <div className="bg-[#EFEEEE] rounded-full flex items-center">
          <input
            onChange={(e) => {
              console.log(e.target.value);
            }}
            type="text"
            className="bg-[#EFEEEE] rounded-l-full px-4 py-2"
            placeholder="Search"
          />
          <button
            onClick={() => console.log("ok")}
            className="flex rounded-r-full py-2 px-4 border-l-[1px] border-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                // stroke-linecap="round"
                strokeLinecap="round"
                // stroke-linejoin="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-x-5 max-sm:hidden sm:hidden md:hidden lg:flex">
          <Link to="/auth/login" className="text-lg text-[#0B132A] font-bold">
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="text-lg px-12 py-3 bg-amber-400 rounded-full text-[#6A4029] font-bold"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex flex-col gap-2 lg:hidden menu-toggle relative">
          <input
            type="checkbox"
            className="absolute h-10 w-10 opacity-0 bottom-[-4px] right-[2px] z-10"
          />
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
          <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
        </div>
      </nav>
    </>
  );
};

export default NavbarUnLoggedHome;
