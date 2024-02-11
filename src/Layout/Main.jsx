import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import bodyImg from "../assets/body.jpg";
import "../App.css";
import "react-awesome-button/dist/styles.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoodProvider from "../providers/FoodProvider";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div
        className="w-full h-screen fixed top-0 left-0"
        style={{ backgroundImage: `url(${bodyImg})`, backgroundSize: "cover" }}
      ></div>
      <div className="relative">
        <Header />
        <FoodProvider>
          <Outlet />
        </FoodProvider>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Main;
