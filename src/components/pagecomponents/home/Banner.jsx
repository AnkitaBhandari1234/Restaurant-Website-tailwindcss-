import React from 'react'
import Bgimage from '../../../assets/download.webp'

function Banner() {
  return (
    <div className="lg:h-[600px] h-[750px] overflow-hidden">
        <img src={Bgimage} alt='banner-img' className=' absolute top-0 left-0 right-0 bottom-0 lg:h-lvh h-[750px] bg-cover bg-no-repeat object-cover w-full overflow-hidden   '></img>
     
    <section className="relative pt-32">
      <div className="w-full mx-4  lg:w-9/12 flex flex-col gap-9 lg:mx-16 my-20   ">
        <div className="font-poppins uppercase text-white  tracking-[2px] lg:-tracking-[-2px] font-light lg:font-[1]   lg:text-[15px]  ">
          <h3>Wide options of choice</h3>
        </div>
        <div className="  text-4xl font-extrabold    lg:text-6xl  text-white font-poppins lg:-tracking-tight lg:font-[1000] ">
          <h3>Delicious Recipes</h3>
        </div>
        <div className= "text-white font-light text-md lg:font-light lg:-tracking-tight  w-11/12 lg:w-7/12 ">
          <h3>
            inappropriate behavior is often laughed off as “boys will be
            boys,” women face higher conduct standards especially in the
            workplace. That’s why it’s crucial that, as women.
          </h3>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#f42f2c] px-6 py-3 text-white uppercase text-sm font-poppins font-bold w-fit hover:bg-[#222222] hover:text-white transition duration-300 ease-in-out  "
          >
            Check our menu
          </button>
        </div>
      </div>
    </section>
  </div> 
  )
}

export default Banner