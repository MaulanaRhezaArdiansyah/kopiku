import { Link } from "react-router-dom";
import ProductCard from "../../pages/home/components/ProductCard";
import heroBackground from "../../assets/img/coffe-hero.webp";
import Carousel from "../../pages/home/components/Carousel";
const ContentHome = () => {
  return (
    <>
      <section
        className="hero-section bg-emerald-500 w-full h-[40rem] pl-20 pt-20 max-sm:pl-5 max-sm:pt-24 sm:pt-5 md:pt-10 md:max-lg:pt-40 md:max-lg:h-[80vh] lg:pt-40 lg:h-[120vh] xl:bg-no-repeat bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="w-1/2 max-sm:w-full flex flex-col gap-8 max-sm:gap-3 h-full max-sm:justify-center">
          <h1 className="text-[#ffffff] font-black text-[50px] max-sm:text-[40px] sm:text-[40px] md:text-[40px] lg:text-[50px]">
            Start Your Day with Coffee and Good Meals
          </h1>
          <p className="text-[#ffffff] font-bold text-[20px] max-sm:mb-6">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          {/* <a href="./product.html"> */}
          <Link to="/product">
            <button className="text-[#6A4029] font-bold bg-amber-400 px-24 max-sm:px-10 sm:px-5 md:px-5 lg:px-5 h-16 rounded-xl w-1/2 sm:w-3/4 md:w-3/4 lg:w-1/2">
              Get Started
            </button>
          </Link>
          {/* </a> */}
        </div>
      </section>
      <section className="w-full h-[30vh] relative flex justify-center items-center max-sm:hidden sm:max-md:hidden">
        <div className="card-staff bg-white shadow-xl absolute lg:-top-24 md:max-lg:-top-24 flex justify-center items-center h-[30vh] md:max-lg:h-[20vh] w-[80%] md:max-lg:w-[90%] rounded-md">
          <div className="w-1/3 h-2/3 flex justify-center items-center  gap-x-5  border-r-[1px] border-slate-200">
            <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
              <img
                src={require("../../assets/img/staff.webp")}
                alt=""
                className=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl text-[#0B132A]">90+</p>
              <p className="text-[#4F5665] text-lg">Staff</p>
            </div>
          </div>
          <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5  border-r-[1px] border-slate-200">
            <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
              <img
                src={require("../../assets/img/location.webp")}
                alt=""
                className=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl text-[#0B132A]">30+</p>
              <p className="text-[#4F5665] text-lg">Stores</p>
            </div>
          </div>
          <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5">
            <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
              <img
                src={require("../../assets/img/love.webp")}
                alt=""
                className=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl text-[#0B132A]">800+</p>
              <p className="text-[#4F5665] text-lg">Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex w-full h-[80vh] sm:h-[200vh] md:h-[100vh] sm:flex-col sm:pt-5 md:flex-col md:pt-20 lg:flex-row lg:h-[100vh] justify-center items-center px-20 max-sm:flex-col max-sm:mb-10 max-sm:h-[150vh] max-sm:px-5"
      >
        <div className="h-full items-center justify-center flex max-sm:w-full max-sm:h-[30%] md:h-[40%] lg:h-[70%]">
          <img
            src={require("../../assets/img/about.webp")}
            alt=""
            width="573px"
            height="457px"
          />
        </div>

        <div className="flex items-center justify-center h-full max-sm:w-full max-sm:h-[50%] md:h-[40%] lg:h-[70%]">
          <div className="w-3/4 h-[80%] flex flex-col gap-y-5 lg:gap-y-3 justify-center max-sm:w-full">
            <h1 className="text-[#0B132A] text-[35px] font-bold max-lg:text-center">
              We Provide Good Coffee and Healthy Meals
            </h1>
            <p className="text-[#4F5665] leading-7">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <div className="flex items-center gap-x-2">
              <img
                src={require("../../assets/img/check.webp")}
                alt="check"
                width="20px"
                height="20px"
              />
              <p className="text-[#4F5665]">High quality beans</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img
                src={require("../../assets/img/check.webp")}
                alt="check"
                width="20px"
                height="20px"
              />
              <p className="text-[#4F5665]">
                Healthy meals, you can request the ingredients
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <img
                src={require("../../assets/img/check.webp")}
                alt="check"
                width="20px"
                height="20px"
              />
              <p className="text-[#4F5665]">
                Chat with our staff to get better experience for ordering
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <img
                src={require("../../assets/img/check.webp")}
                alt="check"
                width="20px"
                height="20px"
              />
              <p className="text-[#4F5665]">
                Free member card with a minimum purchase of IDR 200.000.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 max-sm:h-[300vh] md:h-[200vh] md:pt-40 lg:h-[120vh] lg:pt-16">
        <div className="flex flex-col gap-y-14 max-sm:gap-y-20">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <h1 className="text-[#0B132A] text-[35px] font-bold text-center">
              Here is People’s Favorite
            </h1>
            <p className="text-[#4F5665] text-center">
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </p>
          </div>
          <ProductCard />
        </div>
      </section>
      <section
        id="store-maps"
        className="max-sm:py-10 mt-20 md:py-20 md:mt-40 "
      >
        <div className="store-maps-container flex flex-col items-center sm:gap-y-10 md:gap-y-14 lg:gap-y-20 max-sm:gap-y-10">
          <div className="flex flex-col justify-center items-center w-1/2 max-sm:w-full sm:w-3/4 md:w-3/4 lg:w-1/2 gap-y-4">
            <h1 className="text-[#0B132A] text-[35px] font-bold text-center w-3/4">
              Visit Our Store in the Spot on the Map Below
            </h1>
            <p className="text-[#4F5665] text-center max-sm:px-10">
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>
          </div>
          <div className="img-store-maps sm:px-12 lg:px-20 md:px-12">
            <img src={require("../../assets/img/maps-dot.webp")} alt="" />
          </div>
        </div>
      </section>
      <section className="partner w-full mt-10 h-20vh ">
        <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
          Our Partner
        </h1>
        <img
          src={require("../../assets/img/partner.webp")}
          alt=""
          className=" w-full px-20 max-sm:px-10 "
        />
      </section>
      <section className=" w-full mt-10 max-sm:h-[80vh] md:h-[50vh] lg:h-[80vh] justify-center flex flex-col relative items-center gap-14">
        <section className="w-1/3 max-sm:w-[80%] max-sm:h-[40%] sm:w-2/3 md:w-2/3 lg:w-1/3 flex flex-col items-center justify-center gap-y-5">
          <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
            Loved by Thousands of Happy Customer
          </h1>
          <p className="text-[#4F5665] text-center leading-snug">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
        </section>
        <Carousel />
        {/* <section className="flex w-full h-[60vh] items-center"> */}
        {/* <div className="w-full bg-red-400 h-full flex justify-center items-center gap-5 lg:px-10 overflow-x-scroll scrollbar-hide"> */}

        {/* <div className="card-review border-2 rounded-md h-60 w-1/3 sm:w-[45%] md:w-[40%] max-sm:w-[80%] max-lg:w-[40%] flex justify-center items-center p-8">
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={require("../../assets/img/viezh-robert.webp")}
                      alt=""
                      className="grow-1 pr-4"
                    />
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        Viezh Robert
                      </p>
                      <p className="text-sm text-[#4F5665]">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">4.5</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!"
                  </p>
                </div>
              </div>
            </div>
            <div className="card-review border-2 rounded-md h-60 w-1/3 sm:w-[45%] md:w-[40%] max-lg:w-[40%] flex justify-center items-center p-8 max-sm:hidden">
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={require("../../assets/img/yessica-christy.webp")}
                      alt=""
                      className="grow-1 pr-4"
                    />
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        Yessica Christy
                      </p>
                      <p className="text-sm text-[#4F5665]">Shanxi, China</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">4.5</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    “I like it because I like to travel far and still can make
                    my day better just by drinking their Hazelnut Latte"
                  </p>
                </div>
              </div>
            </div>
            <div className="card-review border-2 rounded-md h-60 w-1/3 sm:w-[45%] md:w-[40%] max-lg:w-[40%] flex justify-center items-center p-8 max-sm:hidden">
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={require("../../assets/img/yessica-christy.webp")}
                      alt=""
                      className="grow-1 pr-4"
                    />
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        Yessica Christy
                      </p>
                      <p className="text-sm text-[#4F5665]">Shanxi, China</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">4.5</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    “I like it because I like to travel far and still can make
                    my day better just by drinking their Hazelnut Latte"
                  </p>
                </div>
              </div>
            </div>
            <div className="card-review border-2 rounded-md h-60 w-1/3 sm:w-[45%] md:w-[40%] max-lg:w-[40%] flex justify-center items-center p-8 max-sm:hidden">
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={require("../../assets/img/yessica-christy.webp")}
                      alt=""
                      className="grow-1 pr-4"
                    />
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        Yessica Christy
                      </p>
                      <p className="text-sm text-[#4F5665]">Shanxi, China</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">4.5</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    “I like it because I like to travel far and still can make
                    my day better just by drinking their Hazelnut Latte"
                  </p>
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </section> */}
      </section>
      <section className="flex justify-center mt-10 py-10 max-sm:py-10 max-sm:h-[50vh] md:h-[30vh] lg:h-[40vh]">
        <div className="promo-container flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
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
        </div>
      </section>
    </>
  );
};

export default ContentHome;
