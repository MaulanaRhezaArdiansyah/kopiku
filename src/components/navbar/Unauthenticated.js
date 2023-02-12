import { Link, useNavigate } from "react-router-dom";

const Unauthenticated = ({ setKeyword }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-3">
      <div className="bg-[#EFEEEE] rounded-full flex items-center max-sm:hidden">
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
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
      <div className="flex items-center gap-x-3 sm:hidden md:hidden lg:flex">
        {/* <Link to="/auth/login" className="text-lg text-[#0B132A] font-bold">
          Login
        </Link> */}
        <button
          // className="text-lg text-[#0B132A] font-bold hover:drop-shadow-md duration-300 max-sm:bg-amber-400 max-sm:hover:bg-amber-500 max-sm:rounded-full max-sm:text-[#6a4029] max-sm:font-bold max-sm:px-12 max-sm:py-3"
          className="text-lg text-[#0B132A] font-bold hover:drop-shadow-md duration-300"
          onClick={() => navigate("/auth/login")}
        >
          Login
        </button>
        {/* <Link
          to="/auth/signup"
          className="text-lg px-12 py-3 bg-amber-400 rounded-full text-[#6A4029] font-bold"
        >
          Sign Up
        </Link> */}
        <button
          className="text-lg px-12 py-3 bg-amber-400 hover:bg-amber-500 duration-300 rounded-full text-[#6A4029] font-bold max-sm:hidden"
          onClick={() => navigate("/auth/signup")}
        >
          Sign Up
        </button>
        <Link to="/auth/signup"></Link>
      </div>
    </div>
  );
};

export default Unauthenticated;
