import React, { useState } from "react";
import { useEffect } from "react";

const OrderSummary = () => {
  const [dataCart, setDataCart] = useState([
    {
      id: "",
      title: "",
      quantity: 1,
      size: "",
      price: "",
      image: "",
    },
  ]);

  // explain || and ??
  // || pengecekan utk null, ?? pengecekan utk undefined
  const orderResult = JSON.parse(localStorage.getItem("@cart")) || [];
  console.log(orderResult);

  // const totalPrice = orderResult.map((i, index) => {
  //   // console.log(index + 1);
  //   return parseInt(i.priceCart) * parseInt(i.orderCart);
  // });
  // // console.log(parseInt(totalPrice));

  // 1 on 1

  //cara 2
  // use state read only
  // reactjs imutable
  // let [total, setTotal] = useState([]);
  // const totalPrice = orderResult.map((i, index) => {
  // return setTotal([...total, i.priceCart]);
  // });

  //cara 1
  let total = [];
  const totalPrice = orderResult.map((i, index) => {
    return total.push(i.priceCart);
  });
  // console.log(total);
  // console.log(total.reduce((a, b) => a + b, 0));

  const subTotal = total.reduce((a, b) => a + b, 0);

  const tax = 0;
  const shipping = 0;

  // sum grandTotal = subTotal + tax/fees + shipping
  // ini sementara dulu
  // cara 1
  // const grandTotal = total.reduce((a, b) => a + b, 0);
  // cara 2
  const grandTotal = subTotal + tax + shipping;

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <section className="w-full h-[50%] lg:h-[130vh] flex flex-col items-start px-3 py-10 gap-y-6 lg:pt-20">
      <p className="text-white text-3xl font-bold">Checkout your item now!</p>
      <div className="bg-white w-full h-[90%] rounded-lg flex flex-col justify-center px-4 lg:px-8">
        <p className="text-[#362115] text-3xl font-bold text-center">
          Order Summary
        </p>
        <div className="w-full h-[40%] flex flex-col pt-4">
          {/* {orderResult.map((item) => { */}

          {orderResult.map((item) => {
            const price = parseInt(item.priceCart);
            return (
              <div
                key={item.id}
                className="w-full h-[50%] flex gap-x-1 justify-between items-center text-lg"
              >
                <div className="flex gap-x-2">
                  <div className="w-20 h-20 border-slate-500 border-[2px] rounded-xl flex items-center justify-center">
                    <img
                      src={item.imageCart}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="order-item flex flex-col justify-center">
                    <p>{item.titleCart}</p>
                    <p>x{item.orderCart}</p>
                    <p>{item.sizeCart}</p>
                  </div>
                </div>
                <div className=" flex justify-end w-[30%]">
                  <p>IDR {numberWithCommas(price)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[25%] flex justify-between items-center ">
          <div className="flex flex-col w-[50%] items-start">
            <p className="text-[#362115] text-lg">SUBTOTAL</p>
            <p className="text-[#362115] text-lg">TAX & FEES</p>
            <p className="text-[#362115] text-lg">SHIPPING</p>
          </div>
          <div className="flex flex-col w-[50%] items-end">
            <p className="text-[#362115] text-lg">
              IDR {numberWithCommas(parseInt(subTotal))}
            </p>
            <p className="text-[#362115] text-lg">IDR {parseInt(tax)}</p>
            <p className="text-[#362115] text-lg">IDR {parseInt(shipping)}</p>
          </div>
        </div>
        <div className="flex w-full justify-between text-2xl text-[#362115] font-bold capitalize">
          <p>total</p>
          {/* sementara pakai ini dulu untuk total harga */}
          {/* <p>IDR {numberWithCommas(parseInt(totalPrice))}</p> */}
          <p>IDR {numberWithCommas(parseInt(grandTotal))}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
