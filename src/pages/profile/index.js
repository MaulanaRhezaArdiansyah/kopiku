import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import profileBg from "../../assets/img/profile-bg.webp";
import { ImageCard } from "./components/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { DetailsProfileCard } from "./components/DetailsProfileCard";

export default function Profile() {
  const handleLogout = () => {
    localStorage.removeItem("@userLogin");
  };
  return (
    <>
      <Navbar titleLogo="Kopiku" />
      <main
        style={{ backgroundImage: `url(${profileBg})` }}
        className="h-[220vh] lg:h-[160vh] bg-center bg-cover bg-no-repeat px-5"
      >
        <div className="container text-white w-full h-full flex flex-col pt-40 gap-5 pb-10 lg:px-28">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <div className="lg:flex lg:flex-col lg:gap-y-28">
            <div className="lg:flex lg:gap-x-5">
              <ImageCard />
              <ContactCard />
            </div>
            <div className="lg:flex lg:gap-x-5">
              <DetailsProfileCard />
              <div className="action-button w-full lg:w-[40%] h-[28rem] px-8 py-4 flex flex-col gap-5">
                <p className="text-xl font-bold text-center">
                  Do you want to save the change?
                </p>
                <button className="bg-[#6A4029] text-white font-bold flex items-center justify-center w-full py-4 rounded-lg">
                  Save Changes
                </button>
                <button className="bg-amber-400 text-[#6A4029] font-bold py-4 flex justify-center items-center w-full rounded-lg">
                  Cancel
                </button>
                <button className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 rounded-lg px-4 justify-between">
                  <span>Edit Password</span>
                  <span className="text-xl"> &gt; </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 rounded-lg px-4 justify-between"
                >
                  <span>Logout</span>
                  {/* <span className="text-xl"> &gt; </span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
