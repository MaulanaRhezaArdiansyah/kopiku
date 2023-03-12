import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import profileBg from "../../assets/img/profile-bg.webp";
import { ImageCard } from "./components/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { DetailsProfileCard } from "./components/DetailsProfileCard";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("@userLogin");
    alert("See you again!");
    navigate("/product");
  };
  const userID = JSON.parse(localStorage.getItem("@userLogin")).user.id;
  const [datas, setData] = useState({
    email: "",
    phone: "",
    delivery_address: "",
    username: "",
    birthday: "",
  });
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState();

  const handleEditProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("email", datas.email);
    formData.append("phone", datas.phone);
    formData.append("delivery_address", datas.delivery_address);
    formData.append("username", datas.username);
    formData.append("birthday", datas.birthday);

    axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_URL}/api/v1/users/${userID}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        alert(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        style={{ backgroundImage: `url(${profileBg})` }}
        className="h-[240vh] md:h-[200vh] lg:h-[200vh] bg-center bg-cover bg-no-repeat px-5"
      >
        <div className="container text-white w-full h-full flex flex-col pt-40 gap-5 pb-10 lg:px-28">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <form onSubmit={handleEditProfile}>
            <div className="lg:flex lg:flex-col lg:gap-y-28">
              <div className="lg:flex lg:gap-x-5">
                <ImageCard
                  setAvatar={setAvatar}
                  preview={preview}
                  setPreview={setPreview}
                />
                <ContactCard datas={datas} setData={setData} />
              </div>
              <div className="lg:flex lg:gap-x-5">
                <DetailsProfileCard datas={datas} setData={setData} />
                <div className="action-button w-full lg:w-[40%] h-[28rem] px-8 py-4 flex flex-col gap-5">
                  <p className="text-xl font-bold text-center">
                    Do you want to save the change?
                  </p>
                  <button
                    type="submit"
                    className="bg-[#6A4029] text-white font-bold flex items-center justify-center w-full py-4 md:max-lg:py-6 rounded-lg hover:bg-transparent border-[2px] border-[#6A4029] hover:text-[#6A4029]"
                  >
                    Save Changes
                  </button>
                  <button className="bg-amber-400 hover:bg-amber-500 text-[#6A4029] font-bold py-4 md:max-lg:py-6 flex justify-center items-center w-full rounded-lg">
                    Cancel
                  </button>
                  <button className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 md:max-lg:py-6 rounded-lg px-4 justify-between">
                    <span>Edit Password</span>
                    <span className="text-xl"> &gt; </span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 md:max-lg:py-6 rounded-lg px-4 justify-between"
                  >
                    <span>Logout</span>
                    {/* <span className="text-xl"> &gt; </span> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
