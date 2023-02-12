import { Link, NavLink } from "react-router-dom";
import "../../assets/css/global.css";

const NavbarLogged = () => {
  return (
    <>
      <header className="">
        <nav className="flex items-center justify-around max-sm:justify-between sm:justify-between sm:px-20 md:justify-between md:px-20 lg:justify-around max-sm:px-5 w-full h-28 border-b-[0.5px] border-slate-200 fixed bg-white/95 backdrop-blur-sm z-10">
          <Link to="/" className="flex items-center gap-x-2 z-10">
            <img src={require("../../assets/img/coffe-logo.webp")} alt="" />
            <p className="text-[#0B132A] font-black text-xl">KopiKu</p>
          </Link>
          <ul className="max-sm:hidden flex items-center gap-6 md:max-lg:hidden">
            <li>
              <NavLink to="/" className="text-lg" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="text-lg"
                activeclassname="active"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment"
                className="text-lg"
                activeclassname="active"
              >
                Your Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className="text-lg"
                activeclassname="active"
              >
                History
              </NavLink>
            </li>
          </ul>
          <div className="max-sm:hidden flex items-center gap-6">
            <div className="bg-[#EFEEEE] rounded-full flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg> */}
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
            <Link to="/chat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // stroke-width="1.5"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 max-sm:hidden md:max-lg:hidden"
              >
                <path
                  // stroke-linecap="round"
                  strokeLinecap="round"
                  // stroke-linejoin="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </Link>
            {/* <Link to="/profile">
              <img
                src={require("../../assets/img/account.webp")}
                alt=""
                className="rounded-full max-sm:hidden md:max-lg:hidden"
              />
            </Link> */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img src={require("../../assets/img/account.webp")} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 bg-slate-100 shadow menu menu-compact dropdown-content rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge bg-sky-500 border-none text-white">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:hidden items-center justify-center relative menu-toggle">
            <input
              type="checkbox"
              className="absolute opacity-0 z-10 cursor-pointer"
            />
            <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
            <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
            <span className="w-10 h-1 bg-[#6A4029] rounded-md duration-300"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarLogged;
