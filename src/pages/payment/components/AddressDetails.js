import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddressDetails = () => {
  const [dataAddress, setDataAddress] = useState([
    {
      birthday: "",
      delivery_address: "",
      email: "",
      firstname: "",
      gender: "",
      id: "",
      image: "",
      lastname: "",
      password: "",
      phone: "",
      role: "",
      username: "",
    },
  ]);
  // const { userId } = useParams();

  const userLogin = JSON.parse(localStorage.getItem("@userLogin"));
  const userID = userLogin.user.id;
  // console.log(userID);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/users/${userID}`)
      .then((res) => {
        console.log(res.data.data);
        setDataAddress(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const editAddress = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "PATCH",
  //     url: `http://localhost:3001/api/v1/users/a7db555c-2e3f-4112-8a74-55fa73271400`,
  //     data: dataAddress,
  //   })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setDataAddress(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    // <div className="flex flex-col gap-y-3 lg:gap-y-6 w-full">
    //   <div className="flex w-full justify-between text-white">
    //     <p className="text-xl lg:text-2xl font-bold">Address details</p>
    //     <button className="text-lg font-bold">edit</button>
    //   </div>
    //   <div className="bg-white w-full h-[20vh] justify-center lg:h-[30vh] rounded-lg flex flex-col lg:gap-y-5 p-5 text-lg">
    //     <p className="w-full py-[2px] border-b-[1px] border-slate-200">
    //       <span className="font-extrabold text-black">Delivery to - </span>
    //       {dataAddress.delivery_address}
    //     </p>
    //     <p className="w-full py-[2px] ">{dataAddress.phone}</p>
    //   </div>
    // </div>
    // <form
    <div
      // onSubmit={editAddress}
      className="flex flex-col gap-y-3 lg:gap-y-6 w-full"
    >
      <div className="flex w-full justify-between text-white">
        <p className="text-xl lg:text-2xl font-bold">Address details</p>
        {/* <button type="submit" className="text-lg font-bold"> */}
        <button className="text-lg font-bold">edit</button>
      </div>
      <div className="bg-white w-full h-[20vh] justify-center lg:h-[30vh] rounded-lg flex flex-col lg:gap-y-5 p-5 text-lg">
        {/* <p className="w-full py-[2px] border-b-[1px] border-slate-200">
          <span className="font-extrabold text-black">Delivery to - </span>
          {dataAddress.delivery_address}
        </p> */}
        {/* <p className="w-full py-[2px] ">{dataAddress.phone}</p> */}
        <input
          type="text"
          name="address"
          placeholder={dataAddress.delivery_address}
          className="w-full py-[2px] focus:outline-none border-b-[1px] border-slate-200"
        />
        {/* {dataAddress.delivery_address} */}
        <input
          type="tel"
          name="phone"
          placeholder={dataAddress.phone}
          className="w-full py-[2px] focus:outline-none border-b-[1px] border-slate-200"
        />
        {/* {dataAddress.phone} */}
      </div>
      {/* </form> */}
    </div>
  );
};

export default AddressDetails;
