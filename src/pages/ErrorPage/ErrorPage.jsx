import React from "react";
import errorImg from "../../assets/error-404.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
     
  
  return (

    <>
    <Navbar/>
    <div className="lg:m-20 md:m-15 m-10 flex flex-col items-center">
      <img className="lg:w-[460px] md:w-[350px] "src={errorImg} alt="" />
      <h2 className="font-semibold lg:text-5xl md:text-4xl  text-xl  mt-16">Oops, page not found!</h2>
      <p className="font-normal lg:text-xl text-sm text-[#627382] mb-4 mt-2 text-center">The page you are looking for is not available.</p>
      <Link to="/" className="btn bg-gradient text-white">Back to Home</Link>
    </div>
    <Footer/>
    </>
    
  );
};

export default ErrorPage;
