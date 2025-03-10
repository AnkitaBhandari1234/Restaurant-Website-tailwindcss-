import React from 'react'
import Sociallifeimg from '../../../assets/featuresblogimg.webp'
import Politicsimg from '../../../assets/blog2.webp'
import Foodimg from '../../../assets/blog3.webp'

function FeaturesBlog() {
  return (
    <div className='h-full py-20'>

    <div className='grid grid-cols-3 w-11/12 h-7/12  gap-7 m-auto px-7'>
        <div className='w-6/6 h-11/12 relative '>
            <img src={Sociallifeimg} className='h-full  w-full'></img>
           
            <div className='flex flex-col gap-2 absolute top-0 bottom-0 left-0 right-0 justify-center items-center h-full w-full  '>
                <div className='bg-[#0a0909] w-5/6 h-5/6  opacity-85 absolute '></div>
                <h1 className='text-white text-[17px] uppercase relative font-bold font-poppins'>Social life</h1>
                <span className='w-3/6 h-0.5 border-b-2 border-white relative'></span>
                <p className='text-white relative font-poppins'>Enjoy your social life together</p>
            </div>
        </div>
        <div className='w-6/6 h-11/12 relative'>
            <img src={Politicsimg} className='h-full  w-full'></img>
            
            <div className='flex flex-col gap-2 absolute top-0 bottom-0 left-0 right-0 h-full w-full justify-center items-center'>
            <div className='bg-[#0a0909] w-5/6 h-5/6  opacity-85 absolute'></div>
                <h1 className='text-white text-[17px] uppercase relative font-poppins font-bold'>Politics</h1>
                <span className='w-3/6 h-0.5 border-b-2 border-white relative'></span>
                <p className='text-white relative font-poppins'>Be a part of politics</p>
            </div>
        </div>
        <div className='w-6/6 h-11/12 relative'>
            <img src={Foodimg} className='h-full  w-full'></img>
            
            <div className='flex flex-col gap-2 absolute top-0 bottom-0 left-0 right-0 w-full h-full justify-center items-center '>
                <div className='bg-[#0a0909] w-5/6 h-5/6  opacity-85 absolute'></div>
                <h1 className='text-white text-[17px] uppercase font-poppins font-bold relative'>Food</h1>
                <span className='w-3/6 h-0.5 border-b-2 border-white relative'></span>
                <p className='text-white font-poppins relative'>Let the food be finished</p>
            </div>
        </div>
        
        
    </div>
    </div>
  )
}

export default FeaturesBlog