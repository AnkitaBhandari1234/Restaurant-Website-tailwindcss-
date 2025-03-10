import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaBehance } from "react-icons/fa";


function Footer() {
  return (
    <footer>

   
    <section className="bg-[#F42F2C] h-full lg:h-[400px] grid lg:grid-cols-3 justify-between items-center   lg:px-10  gap-5 lg:gap-7 py-28  ">
    <div className="flex flex-col  gap-5 lg:gap-7 justify-center m-auto text-white w-11/12">
      <h3 className="text-xl text-white font-poppins font-bold mb-3">Opening Hours</h3>
      <div className="flex  justify-between font-light tracking-wider">
        <p>Monday-Friday</p>
        <span>08.00 am - 10.00 pm</span>
      </div>
      <div className="flex justify-between font-light tracking-wider">
        <p>Saturday</p>
        <span>08.00 am - 10.00 pm</span>
      </div>
      <div className="flex justify-between font-light tracking-wider">
        <p>Sunday</p>
        <span>08.00 am - 10.00 pm</span>
      </div>
    </div>

    <div className=" w-11/12 lg:w-10/12 flex flex-col  gap-5 lg:gap-4 text-white m-auto ">
    <h3 className="text-xl text-white font-bold font-poppins  ">Contact Us</h3>
      <p className="font-light ">
        56/8, los angeles, rochy beach, Santa monica, United states of
        america - 1205
      </p>
      <p className="text-2xl font-bold w-9/12">012-6532-568-9746 012-6532-569-9748</p>
    </div>

    <div className="w-11/12 lg:w-10/12 flex flex-col  gap-6 lg:gap-4 text-white mb-10 m-auto">
      <h2 className="text-white text-xl font-poppins font-bold">Newsletter</h2>
      <p className="font-light ">You can trust us. we only send promo offers, not a single spam.
       
      </p>
      <div className="flex w-full bg-white rounded-4xl justify-between h-9 items-center"> 

      <input type="email" placeholder="Your Email address" className="placeholder:text-[#777777] bg-white rounded-4xl ml-3    "></input>
      <svg className="bg-[#F42F2C] mr-1 rounded-4xl  " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l4.147-4.146H6a.5.5 0 0 1 0-1h10.793l-4.147-4.146a.5.5 0 0 1 0-.708"/></svg>
      </div>

    </div>
 
  </section>
   
  <div className="bg-[#222222] h-40 lg:h-[60px] text-white flex flex-col lg:flex-row gap-5 justify-center lg:justify-between lg:items-center   px-5 lg:px-20 font-light ">
      <div>
      Copyright ©2025 All rights reserved | This template is made with  by <a href="#" className="text-red-600 font-poppins">Colorlib</a>
      </div>
      <div className="flex gap-2">
        <div className='bg-[#111111] w-3/12 lg:w-3/12 h-6/12 lg:h-4/12  p-1'>

      <FaFacebookF />
        </div>
        <div className='bg-[#111111] w-3/12 lg:w-3/12 h-6/12 lg:h-4/12  p-1'>

        <FaTwitter />
        </div>
        <div className='bg-[#111111] w-3/12 lg:w-3/12 h-6/12 lg:h-4/12  p-1'>

        <LuInstagram />
        </div>
        <div className='bg-[#111111] w-3/12 lg:w-3/12 h-6/12 lg:h-4/12  p-1'>

        <FaBehance />

        </div>
        
        </div>
      
     
    </div>
  </footer>

    
  
  )
}

export default Footer