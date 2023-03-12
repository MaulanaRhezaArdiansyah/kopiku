import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import backgroundPayment from "../../assets/img/payment-bg.webp";
import axios from "axios";
import AddressDetails from "./components/AddressDetails";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../utils/GeneralFunction";

const Payment = () => {
  const navigate = useNavigate();
  const URL = `https://cheerful-overalls-fawn.cyclic.app/`;
  const carts = JSON.parse(localStorage.getItem("@cart"));
  const userID = JSON.parse(localStorage.getItem("@userLogin")).user.id;

  const handlePayment = () => {
    for (let i = 0; i < carts.length; i++) {
      axios({
        method: "POST",
        url: `${URL}/api/v1/history/${userID}`,
        data: {
          product_title: carts[i].titleCart,
          product_price: carts[i].priceCart,
          order_item: carts[i].orderCart,
          product_id: carts[i].product_id,
        },
      })
        .then((result) => {
          alert("Thank you for your order.");
          navigate("/history");
          localStorage.removeItem("@cart");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  TabTitle(`Kopiku | Payment`);

  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        className="flex flex-col lg:flex-row w-full h-[200vh] lg:h-[150vh] md:px-10 lg:px-32 bg-cover bg-center bg-fixed bg-no-repeat pt-28 lg:pt-24"
        style={{ backgroundImage: `url(${backgroundPayment})` }}
      >
        <OrderSummary />
        <div
          action=""
          className="w-full h-[50%] lg:h-[130vh] flex flex-col items-start px-3 py-10 gap-y-6 lg:pt-20"
        >
          <AddressDetails />
          <PaymentMethod />
          <button
            onClick={handlePayment}
            className="w-full bg-[#6A4029] text-white font-bold rounded-lg py-6 text-lg hover:bg-transparent border-[2px] border-[#6A4029] duration-200"
          >
            Confirm and Pay
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
