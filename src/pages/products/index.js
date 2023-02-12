import Footer from "../../components/footer";
// import ContentProduct from "../../components/content/Product";
import { NavLink, Outlet } from "react-router-dom";
// import NavbarLogged from "../../components/navbar/NavbarLogged";
import Navbar from "../../components/navbar/Navbar";
import Promo from "./components/Promo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TabTitle } from "../../utils/GeneralFunction";

// const Product = ({ setKeyword }, { setRefetch }) => {
const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [refetchCategory, setRefetchCategory] = useState(false);
  const [refetchPagination, setRefetchPagination] = useState(false);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  // display product with search
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/v1/${process.env.REACT_APP_PRODUCT_EP}${
          keyword && `?search=${keyword}`
        }`
      )
      .then((res) => setDataProduct(res.data.data))
      // .then((res) => console.log(res.data.data[0].images[0].filename))
      .catch((err) => console.log(err));
    // }, [refetch, keyword, category, page]);
  }, [refetch, keyword]);

  // display product with sort category
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/v1/${process.env.REACT_APP_PRODUCT_EP}${
          category && `?cat=${category}`
        }`
      )
      .then((res) => setDataProduct(res.data.data))
      // .then((res) => console.log(res.data.data[0].images[0].filename))
      .catch((err) => console.log(err));
  }, [refetchCategory, category]);

  // display product with pagination
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/v1/${process.env.REACT_APP_PRODUCT_EP}${
          page && `?page=${page}`
        }`
      )
      .then((res) => setDataProduct(res.data.data))
      // .then((res) => console.log(res.data.data[0].images[0].filename))
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  }, [refetchPagination, page]);

  let { productId } = useParams();
  const navigate = useNavigate();

  const getDetailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  TabTitle("Kopiku | Product");
  return (
    <>
      <Navbar
        titleLogo="Kopiku"
        setKeyword={setKeyword}
        setRefetch={setRefetch}
      />
      <main className="w-full h-[160vh] sm:max-lg:h-[250vh] flex lg:h-[180vh] max-sm:h-[400vh] sm:max-lg:flex-col-reverse max-sm:flex-col-reverse sm:max-lg:pt-28 max-sm:pt-20 lg:pt-28">
        <Promo />
        <section className="h-full w-[70%] sm:max-lg:w-full max-sm:w-full  flex flex-col">
          <div className="flex w-full h-[10%] gap-x-16 justify-center items-center max-sm:overflow-x-scroll max-sm:justify-start max-sm:px-5 max-sm:pt-28">
            {/* <NavLink activeclassname="active"> */}
            <button
              onClick={() => {
                setRefetchCategory(true);
                setCategory("");
              }}
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
              activeclassname="active"
            >
              Favorite & Promo
            </button>
            {/* </NavLink> */}
            <button
              onClick={() => {
                setRefetchCategory(true);
                setCategory("coffee");
              }}
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              <NavLink activeclassname="active">Coffee</NavLink>
            </button>
            <button
              onClick={() => {
                setRefetchCategory(true);
                setCategory("non");
              }}
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              <NavLink activeclassname="active">Non Coffee</NavLink>
            </button>
            <button
              onClick={() => {
                setRefetchCategory(true);
                setCategory("foods");
              }}
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              <NavLink activeclassname="active">Foods</NavLink>
            </button>
            <button
              onClick={() => {
                setRefetchCategory(true);
                setCategory("add on");
              }}
              className=" text-lg text-[#9F9F9F] flex whitespace-nowrap"
            >
              <NavLink activeclassname="active">Add-on</NavLink>
            </button>
          </div>
          <div className="container px-10 max-sm:px-4 h-full flex flex-col justify-between">
            <div>
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
                                ? `http://localhost:3001/uploads/images/${item.images[0].filename}`
                                : ""
                            }
                            alt=""
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-[#000000] text-xl text-center font-extrabold w-[80%]">
                            {item.title}
                          </p>
                          <p className="text-[#6A4029] text-lg font-bold">
                            IDR {numberWithCommas(item.price)}
                          </p>
                        </div>
                      </div>
                      // </Link>
                    );
                  })
                )}
              </div>
            </div>
            <div className="flex pb-20 justify-center gap-x-4">
              <button
                onClick={() => {
                  setRefetchPagination(true);
                  setPage(1);
                }}
                className="w-4 h-4 bg-slate-500 rounded-full"
              ></button>
              <button
                onClick={() => {
                  setRefetchPagination(true);
                  setPage(2);
                }}
                className="w-4 h-4 bg-slate-500 rounded-full"
              ></button>
              <button
                onClick={() => {
                  setRefetchPagination(true);
                  setPage(3);
                }}
                className="w-4 h-4 bg-slate-500 rounded-full"
              ></button>
              <button
                onClick={() => {
                  setRefetchPagination(true);
                  setPage(4);
                }}
                className="w-4 h-4 bg-slate-500 rounded-full"
              ></button>
            </div>
          </div>
          {/* <p className="text-[#6A4029] font-semibold pt-10 pl-20">
              *the price has been cutted by discount appears
            </p> */}
        </section>
      </main>
      <Footer />
      <Outlet />
    </>
  );
};

export default Product;
