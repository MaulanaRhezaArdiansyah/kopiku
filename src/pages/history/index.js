import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import backgroundHistory from "../../assets/img/history-bg.webp";
import HistoryCard from "./components/HistoryCard";
import { TabTitle } from "../../utils/GeneralFunction";

const History = () => {
  TabTitle(`Kopiku | History`);
  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        className="flex flex-col w-full h-[300vh] lg:h-[150vh] pt-10 md:pt-40 bg-cover bg-no-repeat bg-center bg-fixed lg:pt-36 max-sm:pt-36"
        style={{ backgroundImage: `url(${backgroundHistory})` }}
      >
        <section className="text-white w-full items-center text-center px-2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Let’s see what you have bought!
          </h1>
          <p className="lg:text-xl">Select item to delete</p>
        </section>
        <section className="flex flex-col h-[100vh] w-full px-5 mt-16 lg:px-32">
          <div className="flex justify-end gap-x-3 lg:gap-x-5">
            <button
              onClick={() => {
                console.log("ok");
              }}
              className="text-end text-white text-lg font-bold mb-3 lg:pr-12"
            >
              Delete all
            </button>
          </div>
          <HistoryCard />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default History;
