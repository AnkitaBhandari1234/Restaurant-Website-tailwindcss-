import React from 'react'
import Formimage from '../../../assets/formbg.webp'

function Reservationform() {
  return (
    <section className=" relative h-lvh   ">
        <img src={Formimage} className='h-lvh absolute '></img>
      <div className="bg-[#4e4f51] absolute top-0 left-0 right-0 bottom-0 h-lvh  opacity-80  "></div>
      <div className="relative flex  felx-col gap-20 lg:gap-3 flex-col lg:flex-row lg:justify-between  py-20 lg:py-28  lg:pr-14    ">
        <div className=" w-11/12 lg:w-5/12 m-auto  ">
          <h1 className="text-4xl text-white font-bold font-poppins mb-3">
            Reserve Your Seats to Confirm if You Come with Your Family
          </h1>
          <p className=" text-white font-light lg:font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam. Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea.
          </p>
        </div>
        <div className=" flex flex-col bg-white  w-[350px]  lg:w-[440px] h-[450px] lg:h-full lg:gap-4  py-10 lg:py-16  px-3 lg:px-8 m-auto ">
          <input
            type="text"
            placeholder="your name"
            className="capitalize text-[15px] font-poppins placeholder:text-[#6C757D] border-1 border-[#6C757D] w-11/12 py-1.5 px-2 m-auto"
          ></input>
          <input
            type="email"
            placeholder="your email address"
            className="capitalize text-[15px] font-poppins placeholder:text-[#6C757D] border-1 border-[#6C757D] w-11/12 py-1.5 px-2 m-auto"
          ></input>
          <input
            type="number"
            placeholder="phone number"
            className="capitalize text-[15px] font-poppins placeholder:text-[#6C757D] border-1 border-[#6C757D] w-11/12 py-1.5 px-2 m-auto"
          ></input>
          <input
            type="date"
            placeholder="select date & time"
            className="capitalize text-[15px] font-poppins text-[#6C757D] border-1 border-[#6C757D] w-11/12 py-1.5 px-2 m-auto"
          ></input>
          <select className="w-11/12 border-1 border-[#6C757D] py-1.5 text-[#6C757D] px-2 m-auto">
            <option>Event One</option>
            <option>Event Two</option>
            <option>Event Three</option>
            <option>Event Four</option>
          </select>
          <button
            type="submit"
            className="bg-[#F42F2C] w-fit text-white py-2.5 px-4 font-poppins text-center m-auto  "
          >
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reservationform