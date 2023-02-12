import backgroundHistory from "../../assets/img/history-bg.webp";

const ContentHistory = () => {
  return (
    <>
      <main
        className="flex flex-col w-full h-[300vh] lg:h-[150vh] pt-10 lg:pt-20 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundHistory})` }}
      >
        <section className="text-white w-full items-center text-center px-2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Let’s see what you have bought!
          </h1>
          <p className="lg:text-xl">Select item to delete</p>
        </section>
        <section className="flex flex-col h-[100vh] w-full px-5 mt-16 lg:px-32">
          <button
            onClick={() => {
              console.log("ok");
            }}
            className="text-end text-white text-lg font-bold mb-3 lg:pr-12"
          >
            Select all
          </button>
          <div className="row w-full flex flex-wrap gap-3 justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
              return (
                <div className="relative flex w-full lg:w-[30%] h-[15vh] bg-white items-center gap-x-3 rounded-xl px-3">
                  <div className="w-[20%]">
                    <img
                      src={require("../../assets/img/veggie-tomatto-mix.webp")}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col relative">
                    <p className="font-extrabold text-xl">Veggie tomato mix</p>
                    <p className="text-[#895537]">IDR 34.000</p>
                    <p className="text-[#6A4029]">Delivered</p>
                  </div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="absolute right-8 bottom-4 w-5 h-5"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default ContentHistory;
