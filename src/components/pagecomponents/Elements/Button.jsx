import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Button() {
  return (
    <div className='w-10/12 mx-auto '>
        <h1 className='text-2xl font-semibold font-poppins text-gray-800 pb-4'>Sample Buttons</h1>
        <div className='flex flex-col gap-4 py-9 '>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px] font-semibold text-gray-800'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3.5 '>
                <button type='submit' className='bg-[#f42f2c] text-white text-[13px]  py-3 px-8 font-poppins hover:bg-white hover:text-[#f42f2c] hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-[#4cd3e3] text-white text-[13px]  py-3 px-8 font-poppins hover:bg-white hover:text-[#4cd3e3] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-[#38a4ff] text-white text-[13px]  py-3 px-8 font-poppins hover:bg-white hover:text-[#38a4ff] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-[#f4e700] text-white text-[13px]  py-3 px-8 font-poppins hover:bg-white hover:text-[#f4e700] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-[#f44a40] text-white text-[13px]  py-3 px-8 font-poppins hover:bg-white hover:text-[#f44a40] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px]  text-blue-500 font-semibold'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3 '>
                <button type='submit' className='bg-white text-[#f42f2c] text-[13px]  py-3 px-8 font-poppins border hover:bg-[#f42f2c] hover:text-white hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-white text-[#4cd3e3] text-[13px]  py-3 px-8 font-poppins border-1 hover:bg-[#4cd3e3] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-white text-[#38a4ff] text-[13px]  py-3 px-8 font-poppins border hover:bg-[#38a4ff] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-white text-[#f4e700] text-[13px]  py-3 px-8 font-poppins border hover:bg-[#f4e700] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-white text-[#f44a40] text-[13px]  py-3 px-8 font-poppins border hover:bg-[#f44a40] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          
        </div>
        <div className='flex flex-col gap-4 py-5'>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px] font-semibold text-gray-800'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3.5 '>
                <button type='submit' className='bg-[#f42f2c] text-white text-[13px]  py-3 px-8 font-poppins rounded-sm hover:bg-white hover:text-[#f42f2c] hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-[#4cd3e3] text-white text-[13px]  py-3 px-8 font-poppins rounded-sm hover:bg-white hover:text-[#4cd3e3] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-[#38a4ff] text-white text-[13px]  py-3 px-8 font-poppins rounded-sm hover:bg-white hover:text-[#38a4ff] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-[#f4e700] text-white text-[13px]  py-3 px-8 font-poppins rounded-sm hover:bg-white hover:text-[#f4e700] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-[#f44a40] text-white text-[13px]  py-3 px-8 font-poppins rounded-sm hover:bg-white hover:text-[#f44a40] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px]  text-blue-500 font-semibold'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3 '>
                <button type='submit' className='bg-white text-[#f42f2c] text-[13px] rounded-sm  py-3 px-8 font-poppins border hover:bg-[#f42f2c] hover:text-white hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-white text-[#4cd3e3] text-[13px] rounded-sm  py-3 px-8 font-poppins border-1 hover:bg-[#4cd3e3] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-white text-[#38a4ff] text-[13px] rounded-sm  py-3 px-8 font-poppins border hover:bg-[#38a4ff] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-white text-[#f4e700] text-[13px] rounded-sm  py-3 px-8 font-poppins border hover:bg-[#f4e700] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-white text-[#f44a40] text-[13px] rounded-sm  py-3 px-8 font-poppins border hover:bg-[#f44a40] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          
        </div>
        <div className='flex flex-col gap-4 py-10'>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px] font-semibold text-gray-800'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3.5 '>
                <button type='submit' className='bg-[#f42f2c] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f42f2c] hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-[#4cd3e3] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#4cd3e3] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-[#38a4ff] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#38a4ff] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-[#f4e700] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f4e700] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-[#f44a40] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f44a40] hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <h4 className='text-[13px]  text-blue-500 font-semibold'><a href='#'>Default</a></h4>
            <div className='flex flex-row gap-3 '>
                <button type='submit' className='bg-white text-[#f42f2c] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f42f2c] hover:text-white hover:border-1 hover:ease-in-out duration-300 '><a href='#'>Primary</a></button>
                <button type='submit' className='bg-white text-[#4cd3e3] text-[13px] rounded-4xl  py-3 px-8 font-poppins border-1 hover:bg-[#4cd3e3] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Success</a></button>
                <button type='submit' className='bg-white text-[#38a4ff] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#38a4ff] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Info</a></button>
                <button type='submit' className='bg-white text-[#f4e700] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f4e700] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Warning</a></button>
                <button type='submit' className='bg-white text-[#f44a40] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f44a40] hover:text-white hover:border-1 hover:ease-in-out duration-300'><a href='#'>Danger</a></button>
             </div>
             <div className='flex gap-20'>

             <a href='#' className='text-[13px] text-gray-800 underline font-semibold'>Link</a>
             <a href='#' className='text-[13px] text-blue-500 font-semibold cursor-not-allowed '>Disable</a>
             </div>
              
          </div>
          
        </div>
        <div className='flex flex-col gap-4 py-10'>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <div>

            <h4 className='text-[13px] font-semibold text-gray-800 flex items-center gap-1.5 '><a href='#'>Default</a>  <span className=' text-xl text-gray-700'><IoIosArrowRoundForward />
            </span></h4>
          
            </div>
            <div className='flex flex-row gap-3.5 '>
                <button type='submit' className='bg-[#f42f2c] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f42f2c] hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5   '><a href='#'>Primary</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
                <button type='submit' className='bg-[#4cd3e3] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#4cd3e3] hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5 '><a href='#'>Success</a><span className='text-xl'><IoIosArrowRoundForward />
</span></button>
                <button type='submit' className='bg-[#38a4ff] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#38a4ff] hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5  '><a href='#'>Info</a><span className='text-xl'><IoIosArrowRoundForward />
</span></button>
                <button type='submit' className='bg-[#f4e700] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f4e700] hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5 '><a href='#'>Warning</a><span className='text-xl'><IoIosArrowRoundForward />
</span></button>
                <button type='submit' className='bg-[#f44a40] text-white text-[13px]  py-3 px-8 font-poppins rounded-4xl hover:bg-white hover:text-[#f44a40] hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5 '><a href='#'>Danger</a><span className='text-xl'><IoIosArrowRoundForward />
</span></button>
             </div>
            
              
          </div>
          <div className='flex flex-row gap-13 items-center ml-7 '>
            <div>
            <h4 className='text-[13px]  text-blue-500 font-semibold flex items-center gap-1.5'><a href='#'>Default</a>  <span className='text-xl text-blue-600'><IoIosArrowRoundForward />
            </span></h4>
            
              </div>
            <div className='flex flex-row gap-3 '>
                <button type='submit' className='bg-white text-[#f42f2c] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f42f2c] hover:text-white hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5 '><a href='#'>Primary</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
                <button type='submit' className='bg-white text-[#4cd3e3] text-[13px] rounded-4xl  py-3 px-8 font-poppins border-1 hover:bg-[#4cd3e3] hover:text-white hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5'><a href='#'>Success</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
                <button type='submit' className='bg-white text-[#38a4ff] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#38a4ff] hover:text-white hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5'><a href='#'>Info</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
                <button type='submit' className='bg-white text-[#f4e700] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f4e700] hover:text-white hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5'><a href='#'>Warning</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
                <button type='submit' className='bg-white text-[#f44a40] text-[13px] rounded-4xl  py-3 px-8 font-poppins border hover:bg-[#f44a40] hover:text-white hover:border-1 hover:ease-in-out duration-300 flex items-center gap-1.5'><a href='#'>Danger</a><span className='text-xl'><IoIosArrowRoundForward />
                </span></button>
             </div>
             
              
          </div>
          
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-3.5 items-center'>
            <button className='bg-red-500 text-white text-sm font-semibold font-poppins w-38 h-15 hover:bg-white hover:text-red-500 hover:border'><a href='#'>Extra Large</a></button>
            <button className='bg-[#4cd3e3] text-white text-sm font-semibold font-poppins w-30 h-13 hover:bg-white hover:text-[#4cd3e3] hover:border'><a href='#'>Large</a></button>
            <button className='bg-red-500 text-white text-sm font-semibold font-poppins w-29 h-12 hover:bg-white hover:text-red-500 hover:border'><a href='#'>Default</a></button>
            <button className='bg-[#4cd3e3] text-white text-sm font-semibold font-poppins w-27 h-9 hover:bg-white hover:text-[#4cd3e3] hover:border'><a href='#'>Medium</a></button>
            <button className='bg-[#f44a40] text-white text-sm font-semibold font-poppins w-25 h-7 hover:bg-white hover:text-[#f44a40] hover:border'><a href='#'>Small</a></button>
          </div>
          <div className='flex flex-row gap-3.5 items-center'>
            <button className='bg-white text-red-500 border text-sm font-semibold font-poppins w-38 h-15 hover:bg-red-500 hover:text-white hover:border'><a href='#'>Extra Large</a></button>
            <button className='bg-white text-[#4cd3e3] text-sm border font-semibold font-poppins w-30 h-13 hover:bg-[#4cd3e3] hover:text-white hover:border'><a href='#'>Large</a></button>
            <button className='bg-white text-red-500 border text-sm font-semibold font-poppins w-29 h-12 hover:bg-red-500 hover:text-white hover:border'><a href='#'>Default</a></button>
            <button className='bg-white text-[#4cd3e3] text-sm  border font-semibold font-poppins w-27 h-9 hover:bg-[#4cd3e3] hover:text-white hover:border'><a href='#'>Medium</a></button>
            <button className='bg-white text-red-500 border text-sm font-semibold font-poppins w-25 h-7 hover:bg-red-500 hover:text-white hover:border'><a href='#'>Small</a></button>
          </div>
        </div>
    </div>
  )
}

export default Button