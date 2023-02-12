import Footer from "../../components/footer";
// import Header from "../../components/header/Header";
// import ContentPayment from "../../components/content/Payment";
// import NavbarLogged from "../../components/navbar/NavbarLogged";
import Navbar from "../../components/navbar/Navbar";
import backgroundPayment from "../../assets/img/payment-bg.webp";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddressDetails from "./components/AddressDetails";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../utils/GeneralFunction";

const Payment = () => {
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/cart`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setDataCart(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const navigate = useNavigate();

  TabTitle(`Kopiku | Payment`);

  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        className="flex flex-col lg:flex-row w-full h-[200vh] lg:h-[150vh] lg:px-32 bg-cover bg-center bg-fixed bg-no-repeat pt-28 lg:pt-24"
        style={{ backgroundImage: `url(${backgroundPayment})` }}
      >
        <OrderSummary />
        {/* <form */}
        <div
          action=""
          className="w-full h-[50%] lg:h-[130vh] flex flex-col items-start px-3 py-10 gap-y-6 lg:pt-20"
        >
          <AddressDetails />
          <PaymentMethod />
          <button
            onClick={() => {
              alert("Please wait for your order!");
              navigate("/history");
            }}
            className="w-full bg-[#6A4029] text-white font-bold rounded-lg py-6 text-lg"
          >
            Confirm and Pay
          </button>
          {/* </form> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
