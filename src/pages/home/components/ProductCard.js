import { useState } from "react";
import OrderBtn from "../../../components/OrderBtn";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  //   console.log(props.data);

  // const [cardImage, setCardImage] = useState([])

  const dataProductCard = [
    {
      img: "hazelnut-latte.webp",
      title: "Hazelnut Latte",
      content: [
        "Hazelnut Syrup",
        "Vanilla Whipped Cream",
        "Ice / Hot",
        "Sliced Banana on Top",
      ],
      price: "IDR 25.000",
    },
    {
      img: "pinky-promise.webp",
      title: "Pinky Promise",
      content: [
        "1 Shot of Coffee",
        "Vanilla Whipped Cream",
        "Chocolate Biscuits",
        "Strawberry Syrup",
        "Sliced strawberry on Top",
      ],
      price: "IDR 30.000",
    },
    {
      img: "chicken-wings.webp",
      title: "Chicken Wings",
      content: [
        "Wings",
        "Drum Sticks",
        "Mayonaise and Lemon",
        "Hot Fried",
        "Secret Recipe",
        "Buy 1 Get 1 only for Dine in",
      ],
      price: "IDR 40.000",
    },
  ];

  return (
    <>
      <div className="flex justify-center gap-x-10 sm:flex-col sm:items-center sm:gap-y-10 md:flex-col md:items-center md:gap-y-10 max-sm:flex-col max-sm:items-center max-sm:gap-y-10 lg:flex-row lg:justify-center">
        {dataProductCard.map(({ img, title, content, price }) => {
          return (
            <div className="flex flex-col items-center border-2 hover:border-[#6A4029] duration-300 rounded-md w-[25%] sm:w-[50%] md:w-[60%] lg:w-[25%] max-sm:w-[90%] h-[600px] justify-around">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="card-img-1">
                  <img
                    src={`https://kopikuu.vercel.app/uploads/images/${img}`}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <h1 className="text-[#0B132A] text-lg font-bold">{title}</h1>
                <div className="menu-bundle-container flex flex-col gap-y-3">
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[0]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[1]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[2]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[3]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[4]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.webp")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[5]}</p>
                  </div>
                </div>
              </div>
              <div className="price flex flex-col items-center gap-y-3">
                <p className="text-[#0B132A] font-bold text-xl">{price}</p>
                <Link to="/product">
                  <OrderBtn />
                  {/* <button className="text-[#6A4029] font-bold border-2 border-[#FFBA33] hover:bg-amber-400 duration-300 rounded-full px-12 py-3">
                    Order Now
                  </button> */}
                </Link>
              </div>
            </div>
          );
        })}
        {/* <div className="flex flex-col items-center border-2 rounded-md w-[25%] sm:w-[50%] md:w-[60%] lg:w-[25%] max-sm:w-[90%] h-[600px] justify-around">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div className="card-img-1">
              <img
                src={require("../../../assets/img/pinky-promise.webp")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="text-[#0B132A] text-lg font-bold">Pinky Promise</p>
            <div className="menu-bundle-container flex flex-col gap-y-3">
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">1 Shot of Coffee</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">
                  Vanilla Whipped Cream
                </p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Chocolate Biscuits</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Strawberry Syrup</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">
                  Sliced strawberry on Top
                </p>
              </div>
            </div>
          </div>
          <div className="price flex flex-col items-center gap-y-3">
            <p className="text-[#0B132A] font-bold text-xl">IDR 30.000</p>
            <OrderBtn />
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center border-2 rounded-md w-[25%] sm:w-[50%] md:w-[60%] lg:w-[25%] max-sm:w-[90%] h-[600px] justify-around">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div className="card-img-1">
              <img
                src={require("../../../assets/img/chicken-wings.webp")}
                className="rounded-full"
                alt=""
              />
            </div>
            <p className="text-[#0B132A] text-lg font-bold">Chicken Wings</p>
            <div className="menu-bundle-container flex flex-col gap-y-3">
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Wings</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Drum Sticks</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Mayonaise and Lemon</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Hot Fried</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">Secret Recipe</p>
              </div>
              <div className="menu-bundle flex items-center gap-x-3">
                <img
                  src={require("../../../assets/img/check-menu.webp")}
                  alt=""
                />
                <p className="text-[#4F5665] text-base">
                  Buy 1 Get 1 only for Dine in
                </p>
              </div>
            </div>
          </div>
          <div className="price flex flex-col items-center gap-y-3">
            <p className="text-[#0B132A] font-bold text-xl">IDR 40.000</p>
            <button className="text-[#6A4029] font-bold border-2 border-[#FFBA33] rounded-full px-12 py-3">
              Order Now
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductCard;
