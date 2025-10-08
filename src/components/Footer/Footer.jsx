import "./Footer.css";
import xImg from "../../assets/x.png";
import inImg from "../../assets/in.png";
import mailImg from "../../assets/mail.png";
import fbImg from "../../assets/fb.png";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex lg:flex-row flex-col text-white justify-between items-start gap-10 lg:p-20 lg:w-auto w-10/12 mx-auto lg-py-auto py-10">
        <div className="flex-1">

            <div className='flex  gap-2 items-center justify-start mb-4 '>

                 <img src={logoImg} className='max-h-10' alt="" />
          <h2 className="font-bold text-2xl text-gradient">HERO.IO</h2>
            </div>
           


          <p className="font-normal text-[16px] footer-list">
           In a world overwhelmed by digital noise, the app development company Hero.io has emerged as a champion of focused productivity by crafting a suite of minimalist, user-centric applications. 
          </p>
        </div>
        <div className="flex-1">
          <h2 className="footer-text">Company</h2>
          <ul className="footer-list space-y-4">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="footer-text">Services</h2>
          <ul className="footer-list space-y-4">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="footer-text">Information</h2>
          <ul className="footer-list space-y-4">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="footer-text">Social Links</h2>
          <ul className="footer-list space-y-4">
            <li className="flex items-center">
              <img src={xImg} className="h-5 mr-2" alt="" />
              @HERO.IO
            </li>
            <li className="flex items-center">
              <img src={inImg} alt="" className="h-5 mr-2" />
              @HERO.IO
            </li>
            <li className="flex items-center">
              <img src={fbImg} alt="" className="h-5 mr-2" />
              @Hero
            </li>
            <li className="flex items-center">
              <img src={mailImg} alt="" className="h-5 mr-2" />
              support@hero.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="lg:mx-20" />
      <div className=" text-center text-white py-5 lg:py-[30px]">
        © 2025 HERO.IO. All rights reserved.
      </div>
    </div>
  )
};


export default Footer