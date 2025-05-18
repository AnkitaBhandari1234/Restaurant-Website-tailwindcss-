import React from "react";
import Bgimage from "../assets/top-banner.jpg.webp";

import { HiOutlineHome } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import BannerReuse from "../components/ui/BannerReuse";
function Contact() {
  return (
    <div className="overflow-hidden ">
      
      <BannerReuse image={Bgimage} title='Contact Us'/>

      <div className="grid lg:grid-cols-3 lg:px-20 px-3 lg:py-18 py-15 bg-[#F9F9FF] w-full  ">
        <div className="flex flex-col lg:gap-10 gap-6 ">
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
        <div className="flex flex-col gap-5 lg:py-13 py-5 pt-10 ">
          <input type="text" placeholder="Enter your name" className="bg-[#FFFFFF] w-full border border-[#6A7282] py-3 px-3  text-[16px] "></input>
          <input type="address" placeholder="Enter email address" className="bg-[#FFFFFF] w-full border  border-gray-500 py-3 px-3  text-[16px]"></input>
          <input type="text" placeholder="Enter subject" className="bg-[#FFFFFF] w-full border  border-gray-500 py-3 px-3  text-[16px]"></input>
        </div>
        <div className="w-11/12 lg:mx-6 py-11 ">
          <textarea rows={7} cols={46} className="border border-gray-600 px-3 py-3" placeholder="Enter Message "></textarea>
        </div>

        <div className="lg:w-[1140px] text-right px-1 py-3">
          <button type="submit" className="bg-red-600 px-6 py-2.5 text-white ">SEND MESSAGE</button>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
