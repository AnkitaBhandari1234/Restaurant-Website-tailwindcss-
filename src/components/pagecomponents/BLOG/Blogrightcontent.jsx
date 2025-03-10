import React from 'react'
import { FaSearch } from "react-icons/fa";
import Profileimg from '../../../assets/blogprofile.webp';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Popularimg from '../../../assets/popularpostimg1.webp'
import Hubbleimg from '../../../assets/popularpostimg2.webp'
import Astrologyimg from '../../../assets/popularpostimg3.webp'
import Telescopeimg from '../../../assets/popularpostimg4.webp'
import { MdEmail } from "react-icons/md";






function Blogrightcontent() {
    const tagname=[
        {
            name:'Technology'
        },
        {
            name:'Fashion'
        },
        {
            name:'Architecture'
        },
        {
            name:'Fashion'
        },
        {
            name:'Technology'
        },
        {
            name:'Lifestyle'
        },
        {
            name:'Art'
        },
        {
            name:'Adventure'
        },
        {
            name:'Food'
        },
        {
            name:'Technology'
        },
        {
            name:'Food'
        },
        {
            name:'Technology'
        }
    ]
  return (
    <div className='w-9/12 py-17  border-1 border-gray-200 mt-4.5 h-fit  '>
        <div className='relative  items-center justify-center text-center'>
            <input type='text' placeholder='Search Posts' className='bg-red-500 relative placeholder:text-white font-poppins text-[15px] w-10/12 py-2.5 rounded-3xl placeholder:px-5 outline-none'></input>
           <span className='absolute top-0 bottom-0 left-63 right-0 text-white place-content-center   '><FaSearch /></span> 
           
        </div>
        <div className='flex flex-col items-center gap-2 py-16  '>
             
            <img src={Profileimg} className='w-2/6'></img>
            <h1 className='text-[19px] font-bold text-gray-800 font-poppins'>Charlie Barber</h1>
            <h5 className='text-[15px] text-gray-500  font-poppins'>Senior blog writer</h5>
            <span className='flex gap-8 text-sm'>
            <FaFacebookF />
            <FaTwitter />
            <FaGithub />
            <FaBehance />

            </span>
            <p className='text-center text-gray-500 font-[350] w-5/6 '>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>

             
            </div>

            <div>
                <h4 className='bg-red-500 w-5/6 py-2.5 text-white font-bold text-[18px] font-poppins text-center mb-8 mx-auto '>Popular Posts</h4>
                <div className='flex flex-col gap-5 items-center'>

                <div className='flex flex-row gap-2'>
                    <img src={Popularimg}></img>
                        <div className='flex flex-col gap-1.5 justify-center'>
                        <h4 className='text-gray-800 font-poppins  text-[15px] font-[600]'><a href='#'>Space The Final Frontier</a></h4>
                        <span className='text-gray-600 font-[350] text-[15px]'>02 Hours ago</span>
                        </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={Hubbleimg}></img>
                        <div className='flex flex-col gap-1.5 justify-center'>
                        <h4 className='text-gray-800 font-poppins  text-[15px] font-[600]'><a href='#'>Space The Final Frontier</a></h4>
                        <span className='text-gray-600 font-[350] text-[15px]'>02 Hours ago</span>
                        </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={Astrologyimg}></img>
                        <div className='flex flex-col gap-1.5 justify-center'>
                        <h4 className='text-gray-800 font-poppins  text-[15px] font-[600]'><a href='#'>Space The Final Frontier</a></h4>
                        <span className='text-gray-600 font-[350] text-[15px]'>02 Hours ago</span>
                        </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={Telescopeimg}></img>
                        <div className='flex flex-col gap-1.5 justify-center'>
                        <h4 className='text-gray-800 font-poppins  text-[15px] font-[600]'><a href='#'>Space The Final Frontier</a></h4>
                        <span className='text-gray-600 font-[350] text-[15px]'>02 Hours ago</span>
                        </div>
                </div>
                </div>
            </div>
            <div className='w-full text-center h-90 flex flex-col items-center justify-center'>
                <p className='text-2xl text-gray-300 font-poppins'>300X250 PX</p>
                <p className='text-2xl text-gray-300 font-poppins'>AD GOES HERE</p>
            </div>

            <div className=''>
                <h5 className='bg-red-500 w-5/6 py-2 text-white font-bold text-[18px] font-poppins text-center mb-8 mx-auto'>Post Catogories</h5>
                <div className='flex flex-col gap-3'>

                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Technology</p> 
                    <span>37</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Lifestyle</p> 
                    <span>24</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Fashion</p> 
                    <span>59</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Art</p> 
                    <span>29</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Architecture</p> 
                    <span>09</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Adventure</p> 
                    <span>44</span>
                </div>
                <div className='flex flex-row justify-between w-5/6 mx-auto border-dotted border-b-2 border-gray-200 pb-2 text-gray-500 font-[350] text-[16px]'>
                    <p>Food</p> 
                    <span>37</span>
                </div>
                </div>
                            </div>

                            <div className='py-13 text-center'>
                            <h5 className='bg-red-500 w-5/6 py-2 text-white font-bold text-[18px] font-poppins text-center mb-8 mx-auto'>Newsletter</h5>
                            <div className='flex flex-col gap-4 items-center'>
                               <p className='w-5/6 text-gray-600 font-[350]'>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                               <div className='relative border-1 border-gray-300    '>
                                <span className='text-gray-300 absolute top-0 bottom-0 left-0 right-0 place-content-center px-2 text-xl '>

                               <MdEmail />
                                </span>
                               <input type='email' placeholder='Enter email' className='pl-9 placeholder:text-gray-400 '></input>
                               <button className='bg-red-500 text-white py-2 px-2 '>Subscribe</button>
                               </div>
                               <p className='text-gray-500 font-[350]'>You can unsubscribe at any time</p>
                            </div>
                            </div>
                            <div>
                            <h5 className='bg-red-500 w-5/6 py-2 text-white font-bold text-[18px] font-poppins text-center mb-8 mx-auto'>Tag Clouds</h5>
                            <div className='grid grid-cols-3 gap-3 px-6 '>
                                {

                                tagname.map((val,i)=>{
                                    return(

                                        <button className='text-[14px] font-[350]  text-gray-900 border-1 border-gray-200 px-3 py-1 w-fit  '>{val.name}</button>
                                    )
                                })
                                }
                               
                            </div>
                                </div>
    </div>
  )
}

export default Blogrightcontent