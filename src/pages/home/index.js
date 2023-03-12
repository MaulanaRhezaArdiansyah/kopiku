import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../pages/home/components/ProductCard";
import Carousel from "../../pages/home/components/Carousel";
import { TabTitle } from "../../utils/GeneralFunction";
import Hero from "./components/Hero";
import DescriptionBox from "./components/DescriptionBox";
import AboutUs from "./components/AboutUs";
import Maps from "./components/Maps";
import Partner from "./components/Partner";
import PromoCard from "./components/PromoCard";

const Homepage = () => {
  TabTitle("Kopiku | Home");
  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <Hero />
      <DescriptionBox />
      <AboutUs />

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

      <Maps />

      <Partner />
      <section className=" w-full mt-10 max-sm:h-[80vh] md:h-[80vh] lg:h-[80vh] justify-center flex flex-col relative items-center gap-14">
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
      </section>

      <PromoCard />

      <Footer />
      <Outlet />
    </>
  );
};

export default Homepage;
