import React from "react";
import Bgimage from "../assets/top-banner.jpg.webp";
import { FaArrowRight } from "react-icons/fa6";
import Navbarsection from "../components/navigation/Navbarsection";
import { HiOutlineHome } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../components/footer/Footer";
import BannerReuse from "../components/ui/BannerReuse";
function Contact() {
  return (
    <div className="overflow-hidden ">
      
      <BannerReuse image={Bgimage} title='Contact Us'/>

      <div className="grid grid-cols-3 px-20 py-20 bg-[#F9F9FF] w-full ">
        <div className="flex flex-col gap-10">
          <div className="flex gap-8">
            <div className="text-4xl text-red-600 ">
              <HiOutlineHome />
            </div>
            <div>
              <h1 className="text-[20px] font-poppins">Binghamton, New York</h1>
              <p className="text-[#777777]  ">4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-3xl text-red-600 ">
            <FiPhone />
            </div>
            <div>
              <h1 className="text-[20px]">
              00 (958) 9865 562</h1>
              <p className="text-[#777777]">Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-3xl text-red-600">
            <MdOutlineEmail />
            </div>
            <div>
              <h1 className="text-[20px]">
              support@colorlib.com</h1>
              <p className="text-[#777777]">Send us your query anytime!</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-6">
          <input type="text" placeholder="Enter your name" className="bg-[#FFFFFF] w-full border border-[#6A7282] py-3 px-3  text-[16px] "></input>
          <input type="address" placeholder="Enter email address" className="bg-[#FFFFFF] w-full border  border-gray-500 py-3 px-3  text-[16px]"></input>
          <input type="text" placeholder="Enter subject" className="bg-[#FFFFFF] w-full border  border-gray-500 py-3 px-3  text-[16px]"></input>
        </div>
        <div className="w-11/12 mx-10">
          <textarea rows={7} cols={40} className="border border-gray-600 px-3 py-3" placeholder="Enter Message "></textarea>
        </div>

        <div className="w-[1140px] text-right px-10">
          <button type="submit" className="bg-red-600 px-6 py-2.5 text-white ">SEND MESSAGE</button>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
