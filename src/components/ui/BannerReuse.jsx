import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function BannerReuse({
    image,title
}) {
  return (
    <div className="relative w-screen overflow-hidden h-[470px]">
    <div className='bg-linear-to-r from-black/30 to-black/60 absolute top-0 bottom-0 left-0 right-0   z-10 '></div>
      

          <img src={image} alt='banner-img' className=' absolute top-0 left-0 right-0 bottom-0 h-[500px] w-full  object-cover object-right  '></img>
         
       
      
      <section className=' relative top-0 left-0  pt-10 items-center h-full  right-0 bottom-0 flex flex-col gap-2 justify-center w-9/12 m-auto z-20 '>

      
        <h1 className='text-white text-5xl font-semibold px-3 tracking-wide  '> {title}</h1>
        
      
      <div className='flex items-center gap-2 text-white  font-extralight px-6'>
        <p>Home</p>
        <p><FaArrowRight /></p>
        <p>{title}</p>
      </div>
      </section>
    </div> 
  )
}

export default BannerReuse