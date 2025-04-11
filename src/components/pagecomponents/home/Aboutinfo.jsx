import React from 'react'
import Aboutimage from '../../../assets/about.webp'

function Aboutinfo() {
  return (
    <section className=" py-20 px-5 lg:px-10 flex flex-col lg:flex-row  lg:justify-around gap-3 ">
      <div className="w-full lg:w-5/12 flex flex-col  gap-7 lg:gap-6 items-left justify-center  ">
        <h1 className="text-4xl font-bold font-poppins">About Our Story</h1>
        <p className="text-md font-thin text-gray-500 ">
          Who are in extremely love with eco friendly system. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat
        </p>
        <button
          type="submit"
          className="bg-[#F42F2C] px-6 py-3 uppercase text-white font-poppins w-fit text-sm "
        >
          view full menu
        </button>
      </div>
      <div className="py-8">
        <img src={Aboutimage} alt='about-img' className='lg:h-96 '></img>
      </div>
    </section>
  )
}

export default Aboutinfo