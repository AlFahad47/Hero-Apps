import React from "react";
import playImg from "../../assets/playstore.png";
import appsImg from "../../assets/appsstore.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold lg:text-7xl md:text-5xl text-3xl text-center">
            We Build <br />
            <span className="text-gradient">Productive</span> Apps
          </h2>
          <p className="text-[#627382] mx-auto lg:max-w-[1440px] lg:px-80 md:px-20  text-center mt-4 mb-10  max-w-11/12">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="space-x-4 flex">
            <a href="https://play.google.com/store/games" className="flex  items-center justify-center lg:w-[200px] md:w-[200px] w-[175px] gap-2 bg-[#f5f5f5] text-black border-[#D2D2D2] border-1 px-5 rounded-sm">
              <img className="max-w-[32px] py-3" src={playImg} alt="" />
              <h2>Google Play</h2>
            </a>
            <a href="https://www.apple.com/app-store/" className="flex  items-center justify-center lg:w-[200px] md:w-[200px] w-[175px] gap-2 bg-[#f5f5f5] text-black border-[#D2D2D2] border-1 px-5 rounded-sm">
              <img className="max-w-[32px] py-3" src={appsImg} alt="" />
              <h2> App Store</h2>
            </a>
          </div>
        </div>
      </div>

      <img className="mx-auto max-w-11/12 lg:max-w-full" src={heroImg} alt="" />

      {/* trusted by millions */}
      <div className="flex flex-col items-center py-20 bg-gradient">
        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white mb-10 text-center lg:max-w-full max-w-11/12">Trusted by Millions, Built for You</h2>
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-8">
          <div className="text-center">
            <p className="banner-text-16">Total Downloads</p>
            <h2 className="font-extrabold text-[64px] text-white px-20">29.6M</h2>
            <p className="banner-text-16">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="banner-text-16">Total Reviews</p>
            <h2 className="font-extrabold text-[64px] text-white px-20">906K</h2>
            <p className="banner-text-16">46% more than last month</p>
          </div>
          <div className="text-center">
            <p className="banner-text-16">Active Apps</p>
            <h2 className="font-extrabold text-[64px] text-white px-20">132+</h2>
            <p className="banner-text-16">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
