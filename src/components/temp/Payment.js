import backgroundPayment from "../../assets/img/payment-bg.webp";

const ContentPayment = () => {
  return (
    <>
      <main
        className="flex flex-col lg:flex-row w-full h-[200vh] lg:h-[150vh] lg:px-32 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundPayment})` }}
      >
        <section className="w-full h-[50%] lg:h-[130vh] flex flex-col items-start px-3 py-10 gap-y-6 lg:pt-20">
          <p className="text-white text-3xl font-bold">
            Checkout your item now!
          </p>
          <div className="bg-white w-full h-[90%] rounded-lg flex flex-col justify-center px-4 lg:px-8">
            <p className="text-[#362115] text-3xl font-bold text-center">
              Order Summary
            </p>
            <div className="w-full h-[40%] flex flex-col pt-4">
              <div className=" w-full h-[50%] flex gap-x-1 justify-between items-center text-lg">
                <div className="flex gap-x-2">
                  <div>
                    <img
                      src={require("../../assets/img/hazelnut-latte-order.webp")}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>Hazelnut Latte</p>
                    <p>x1</p>
                    <p>Regular</p>
                  </div>
                </div>
                <div className=" flex justify-end w-[30%]">
                  <p>IDR 20.000</p>
                </div>
              </div>
              <div className="w-full h-[50%] flex gap-x-1 justify-between items-center text-lg">
                <div className="flex gap-x-2">
                  <div>
                    <img
                      src={require("../../assets/img/chicken-fire-wings.webp")}
                      alt=""
                    />
                  </div>

                  <div className=" flex flex-col justify-center">
                    <p>Chicken Fire Wings</p>
                    <p>x2</p>
                  </div>
                </div>
                <div className=" flex justify-end w-[30%]">
                  <p>IDR 30.000</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[25%] flex justify-between items-center ">
              <div className="flex flex-col w-[50%] items-start">
                <p className="text-[#362115] text-lg">SUBTOTAL</p>
                <p className="text-[#362115] text-lg">TAX & FEES</p>
                <p className="text-[#362115] text-lg">SHIPPING</p>
                {/* {[1, 2, 3].map(() => { */}
                {/* return */}
                {/* })} */}
              </div>
              <div className="flex flex-col w-[50%] items-end">
                <p className="text-[#362115] text-lg">IDR 120.000</p>
                <p className="text-[#362115] text-lg">IDR 20.000</p>
                <p className="text-[#362115] text-lg">IDR 10.000</p>
              </div>
            </div>
            <div className="flex w-full justify-between text-2xl text-[#362115] font-bold capitalize">
              <p>total</p>
              <p>IDR 150.000</p>
            </div>
          </div>
        </section>
        {/* <section className="w-full bg-yellow-400 h-[50%] flex flex-col items-start px-3 py-10 gap-y-6"> */}
        <form
          action=""
          className="w-full h-[50%] lg:h-[130vh] flex flex-col items-start px-3 py-10 gap-y-6 lg:pt-20"
        >
          <div className="flex flex-col gap-y-3 lg:gap-y-6">
            <div className="flex w-full justify-between text-white">
              <p className="text-xl lg:text-2xl font-bold">Address details</p>
              <p className="text-lg font-bold">edit</p>
            </div>
            <div className="bg-white w-full h-[20vh] justify-center lg:h-[30vh] rounded-lg flex flex-col lg:gap-y-5 p-5 text-lg">
              <p className="w-full py-[2px] border-b-[1px] border-slate-200">
                Delivery to Iskandar Street
              </p>
              <p className="w-full py-[2px] border-b-[1px] border-slate-200">
                Km 5 refinery road oppsite re public road, effurun, Jakarta
              </p>
              <p className="w-full py-[2px] ">+62 81348287878</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-3 lg:gap-y-6 lg:mt-14">
            <p className="text-xl lg:text-2xl font-bold text-white">
              Payment method
            </p>
            <form className="bg-white w-full h-[30vh] rounded-lg flex flex-col py-2 px-5">
              <div className="flex h-1/3 items-center gap-x-3 text-xl border-slate-200 border-b-[1px]">
                <input
                  type="radio"
                  id="card"
                  value="Card"
                  className="w-5 h-5 checked:bg-[#6A4029] checked"
                />
                <div className="bg-[#F47B0A] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src={require("../../assets/img/card.webp")} alt="" />
                </div>
                Card
              </div>
              <div className="flex h-1/3 items-center gap-x-3 text-xl border-slate-200 border-b-[1px]">
                <input
                  type="radio"
                  id="card"
                  value="Card"
                  className="w-5 h-5"
                />
                <div className="bg-[#895537] w-10 h-10 flex justify-center items-center rounded-md">
                  <img
                    src={require("../../assets/img/bank-account.webp")}
                    alt=""
                  />
                </div>
                Bank account
              </div>
              <div className="flex h-1/3 items-center gap-x-3 text-xl">
                <input
                  type="radio"
                  id="card"
                  value="Card"
                  className="w-5 h-5"
                />
                <div className="bg-[#FFBA33] w-10 h-10 flex justify-center items-center rounded-md">
                  <img
                    src={require("../../assets/img/fast-delivery.webp")}
                    alt=""
                    className=""
                  />
                </div>
                Cash on delivery
              </div>
            </form>
          </div>
          <button className="w-full bg-[#6A4029] text-white font-bold rounded-lg py-6 text-lg">
            Confirm and Pay
          </button>
        </form>
        {/* </section> */}
      </main>
    </>
  );
};

export default ContentPayment;
