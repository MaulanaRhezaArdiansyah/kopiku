import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Promo from "../Promo";

const ContentProduct = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get(
        // `https://kopiku.up.railway.app/api/v1/${process.env.REACT_APP_PRODUCT_EP}`
        `https://kopiku.up.railway.app/api/v1/${
          process.env.REACT_APP_PRODUCT_EP
        }${keyword && `?search=${keyword}`}`
      )
      .then((res) => setDataProduct(res.data.data))
      // .then((res) => console.log(res.data.data[0].images[0].filename))
      .catch((err) => console.log(err));
  }, [refetch, keyword]);

  let { productId } = useParams();
  const navigate = useNavigate();

  const getDetailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <main className="w-full h-[160vh] sm:max-lg:h-[250vh] flex lg:h-[180vh] max-sm:h-[400vh] sm:max-lg:flex-col-reverse max-sm:flex-col-reverse sm:max-lg:pt-28 max-sm:pt-48 lg:pt-28">
        {/* <section className="h-full w-[30%] sm:max-lg:w-full max-sm:w-full flex flex-col gap-8 border-r-[1px] border-slate-200 sm:max-lg:pt-16 max-sm:pt-16">
          <div className="flex flex-col gap-3 items-center pt-10 w-full">
            <p className="text-[#6A4029] font-extrabold text-3xl">
              Promo today
            </p>
            <p className="text-[#000000] text-base font-medium text w-[70%] text-center">
              Coupons will be updated every weeks. Check them out!
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:max-lg:gap-5 w-full items-center">
            <div className="flex items-center bg-[#88B788] rounded-lg w-[80%] px-3 py-3">
              <img src={require("../../assets/img/mothersday.webp")} alt="" />
              <div>
                <p className="font-bold">HAPPY MOTHER'S DAY</p>
                <p>Get one of our favorite menu for free!</p>
              </div>
            </div>
            <div className="flex items-center bg-[#F5C361] rounded-lg w-[80%] px-3 py-3">
              <img src={require("../../assets/img/coffeeman.webp")} alt="" />
              <div>
                <p className="font-bold">
                  Get a cup of coffee for free on sunday morning
                </p>
                <p>Only at 7 to 9 AM</p>
              </div>
            </div>
            <div className="flex items-center bg-[#C59378] rounded-lg w-[80%] px-3 py-3">
              <img src={require("../../assets/img/mothersday.webp")} alt="" />
              <div>
                <p className="font-bold">HAPPY MOTHER'S DAY</p>
                <p>Get one of our favorite menu for free!</p>
              </div>
            </div>
            <div className="flex items-center bg-[#88B788] rounded-lg w-[80%] px-3 py-3">
              <img src={require("../../assets/img/halloween.webp")} alt="" />
              <div>
                <p className="font-bold">HAPPY HALLOWEEN!</p>
                <p>
                  Do you like chicken wings? Get 1 free only if you buy pinky
                  promise
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-white bg-[#6A4029] p-3 w-[80%] rounded-lg font-bold">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pl-10 pt-10">
            <p className="text-[#4F5665] text-base font-bold">
              Terms and Condition
            </p>
            <p className="text-[#4F5665] text-base">
              1. You can only apply 1 coupon per day
            </p>
            <p className="text-[#4F5665] text-base">2. It only for dine in</p>
            <p className="text-[#4F5665] text-base">
              3. Buy 1 get 1 only for new user
            </p>
            <p className="text-[#4F5665] text-base">
              4. Should make member card to apply coupon
            </p>
          </div>
        </section> */}
        <Promo />
        <section className="h-full w-[70%] sm:max-lg:w-full max-sm:w-full flex flex-col ">
          <div className="flex w-full h-[10%] gap-x-16 justify-center items-center max-sm:overflow-x-scroll max-sm:justify-start max-sm:px-5">
            <Link
              to="/product"
              className="text-lg text-[#6A4029] font-bold flex whitespace-nowrap"
            >
              Favorite & Promos
            </Link>
            <Link
              to="/product?cat=coffee"
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              Coffee
            </Link>
            <Link
              to="/product?cat=noncoffee"
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              Non Coffee
            </Link>
            <Link
              to="/product?cat=foods"
              className="text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              Foods
            </Link>
            <Link
              to="/product?cat=add-on"
              className="text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              Add-on
            </Link>
          </div>
          <div className="container px-10 max-sm:px-4">
            <div className="bg-[#EFEEEE] rounded-full flex items-center">
              <input
                onChange={(e) => {
                  setKeyword(e.target.value);
                  // console.log(e.target.value);
                }}
                type="text"
                className="bg-[#EFEEEE] rounded-l-full px-4 py-2"
                placeholder="Search"
              />
              <button
                onClick={() => {
                  console.log("ok");
                  setRefetch(true);
                }}
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
            <div className="row flex flex-wrap gap-8 justify-center sm:max-lg:pt-10 max-sm:pt-10">
              {dataProduct.length === 0 ? (
                <h2>Loading...</h2>
              ) : (
                dataProduct.map((item) => {
                  // dataProduct.map(({id, title, price, images }) => {
                  return (
                    // <Link to={`${item.id}`}>
                    <div
                      key={item.id}
                      onClick={(id) => {
                        // 2 ways to get detail product when user click the product card
                        getDetailProduct(item.id);
                        // navigate(`/product/${item.id}`);
                      }}
                      className="card bg-white w-40 h-56 max-sm:w-36 max-sm:h-64 md:max-lg:w-44 md:max-lg:h-68 justify-center flex flex-col gap-y-2 items-center rounded-2xl shadow-xl"
                    >
                      <div className="flex h-32 w-32 items-center justify-center">
                        <img
                          src={
                            item.images.length > 0
                              ? `https://kopiku.up.railway.app/images/${item.images[0].filename}`
                              : ""
                          }
                          alt=""
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-[#000000] text-xl text-center font-extrabold w-[80%]">
                          {/* Veggie tomato mix */}
                          {item.title}
                        </p>
                        <p className="text-[#6A4029] text-lg font-bold">
                          {/* IDR 34.000 */}
                          {item.price}
                        </p>
                      </div>
                    </div>
                    // </Link>
                  );
                })
              )}
            </div>
          </div>
          {/* <p className="text-[#6A4029] font-semibold pt-10 pl-20">
              *the price has been cutted by discount appears
            </p> */}
        </section>
      </main>
    </>
  );
};

// export default ContentProduct;
