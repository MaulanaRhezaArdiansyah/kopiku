import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
  redirect,
} from "react-router-dom";
import Homepage from "./pages/home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import NotFound from "./pages/404";
import ProductDetails from "./pages/productDetails";
import Payment from "./pages/payment";
import History from "./pages/history";
import Forgot from "./pages/auth/forgot";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import Product from "./pages/products";
import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { Rx, RxDotFilled } from "react-icons/rx";
import "../src/assets/css/global.css";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  // const slides = [
  //   {
  //     url: "https://images.unsplash.com/photo-1552914953-938eef0ce926?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjczODgwNTcy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1596460666245-f210f8d6e901?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjczODgwNjk3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1457296898342-cdd24585d095?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjczODgwNzAw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1601039641847-7857b994d704?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjczODgwNzAy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (newIndex) => {
  //   setCurrentIndex(newIndex);
  // };
  // <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
  //   <div
  //     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
  //     className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
  //   ></div>

  //   <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
  //     <BsChevronCompactLeft onClick={prevSlide} size={30} />
  //   </div>
  //   <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
  //     <BsChevronCompactRight onClick={nextSlide} size={30} />
  //   </div>
  //   <div className="flex top-4 justify-center py-2">
  //     {slides.map((slide, slideIndex) => (
  //       <div
  //         key={slideIndex}
  //         onClick={() => goToSlide(slideIndex)}
  //         className="text-2xl cursor-pointer"
  //       >
  //         <RxDotFilled />
  //       </div>
  //     ))}
  //   </div>
  // </div>
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <>
          {/* <Route exact element={<PrivateRoute isLogin={isLogin} />}>
            <Route exact path="/" element={<Homepage />} />
          </Route> */}
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="auth/signup" element={<Signup />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            {/* <Route element={<PrivateRoute isLogin={isLogin} />}> */}
            <Route element={<PrivateRoute />}>
              <Route path="payment" element={<Payment />} />
            </Route>
            {/* <Route element={<PrivateRoute isLogin={isLogin} />}> */}
            <Route element={<PrivateRoute />}>
              <Route path="history" element={<History />} />
            </Route>
            <Route path="forgot" element={<Forgot />} />
            <Route path="chat" element={<Chat />} />
            {/* <Route element={<PrivateRoute isLogin={isLogin} />}> */}
            <Route element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
