import { useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

// CARA 1 GAGAL
// // const PrivateRoute = ({ isLogin }) => {
// const PrivateRoute = () => {
//   // conditional rendering
//   const [isLogin, setIsLogin] = useState(false);
//   const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
//   if (userLogin) {
//     setIsLogin(true);
//     return <Outlet />;
//   } else {
//     setIsLogin(false);
//     return <Navigate to="/auth/login" />;
//   }
//   // return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
// };
// export default PrivateRoute;

// CARA 2 STATIS

const PrivateRoute = ({ isLogin = true }) => {
  // conditional rendering
  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;

// CARA 3 DINAMIS
// const PrivateRoute = () => {
//   // conditional rendering
//   const [isLogin, setIsLogin] = useState(false);

//   if (localStorage.getItem("@userLogin")) {
//     setIsLogin(true);
//   }

//   if (isLogin) {
//     return <Outlet />;
//   }
//   return <Navigate to="/auth/login" />;
// };

// export default PrivateRoute;
