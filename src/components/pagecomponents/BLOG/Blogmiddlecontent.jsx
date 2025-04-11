import React from 'react'
import Horseridingimg from '../../../assets/blogcontent1.webp'
import Forestimg from '../../../assets/blogcontent2.webp'
import Weddingimg from '../../../assets/blogcontent3.webp'
import Girlimg from '../../../assets/blogcontent4.webp'
import Cityimg from '../../../assets/blogcontent5.webp'
import Blogleftcontent from './blogleftcontent'



function Blogmiddlecontent() {
    const blogcontent=[
        {
            src:Horseridingimg,
            title:'Astronomy Binoculars A Great Alternative',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
            src:Forestimg,
            title:'The Basics Of Buying A Telescope',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
            src:Weddingimg,
            title:'The Glossary Of Telescopes',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
            src:Girlimg,
            title:'The Night Sky',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
            src:Cityimg,
            title:'Telescopes 101',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        }
        
    ]
  return (
   <div>
    {

    blogcontent.map((val,i)=>{
        return(
        
          <div className='flex flex-col lg:flex-row'>
            <Blogleftcontent />
              <div className='flex  flex-col items-start gap-8 py-5 lg:w-11/12'>
                <div className='flex flex-col gap-4'>
                
                <img src={val.src} className='w-full '></img>
                <h1 className='text-2xl font-poppins font-bold text-gray-800'><a href='#'>{val.title}</a></h1>
                <p className='w-full text-[16px] text-gray-500 font-[350]'>{val.text}</p>
                </div>
                <button className='text-[15px] font-[500] text-gray-800 px-8 py-3 hover:bg-[#F42F2C] hover:text-white'>VIEW MORE</button>
            </div>
          </div>
        )
    })
    }

    </div>
  )
}

export default Blogmiddlecontent