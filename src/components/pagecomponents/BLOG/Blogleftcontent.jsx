import React from 'react'
import { BsPerson } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsChat } from "react-icons/bs";

function Blogleftcontent() {
   
    
  return (
    <div className='px-7 w-5/12 '>
        <div className='flex flex-col gap-4 text-right items-end mt-6'>
            <h1 className=' text-[17px] font-[350] text-gray-700 mb-3 hover:text-[#F42F2C] cursor-pointer'>Food, Technology, Politics, Lifestyle</h1>
            <div className='flex gap-3 items-center'>
             <p className='text-gray-500  font-[350]] cursor-pointer hover:text-[#F42F2C]'>Mark wiens</p>
             <span className='text-xl cursor-pointer hover:text-[#F42F2C] '> <BsPerson /></span>
            </div>

            <div className='flex gap-3 items-center'>
             <p className='text-gray-500 font-[350]'>12 Dec, 2017</p>
             <span className='text-xl'> <CgCalendarDates /></span>
            </div>

            <div className='flex gap-3 items-center'>
             <p className='text-gray-500 font-[350]'>1.2M views</p>
             <span className='text-xl'> <MdOutlineRemoveRedEye /></span>
            </div>

           <div className='flex gap-3 items-center'>
            <p className='text-gray-500 font-[350]'>06 Comments</p> 
            <span className='text-[16px]'> <BsChat /></span>
            </div> 
        </div>

        </div>
  )
}

export default Blogleftcontent