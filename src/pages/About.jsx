import React from 'react'

import Aboutinfo from '../components/pagecomponents/home/Aboutinfo'
import Bgimage from '../assets/top-banner.jpg.webp'
import Sandwichimg from '../assets/s1.jpg.webp'
import Cutletimg from '../assets/s2.jpg.webp'
import Meatimg from '../assets/s3.jpg.webp'
import { FaArrowRight } from "react-icons/fa6";
import Review from '../components/pagecomponents/home/Review'
import Footer from '../components/footer/Footer'
import BannerReuse from '../components/ui/BannerReuse'

function About() {
  const aboutitem=[
    {
      src:Sandwichimg,
      name:'Bread Fruit Cheese Sandwich',
      text:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'

    },
    {
      src:Cutletimg,
      name:'Beef Cutlet with Spring Onion',
      text:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'

    },
    {
      src:Meatimg,
      name:'Meat with sauce & Vegetables',
      text:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'

    },
  ]
  return (
    <div className='overflow-hidden  '>

<BannerReuse image={Bgimage} title="About us" />
     
        <Aboutinfo/>

        <section className='lg:h-lvh py-10 flex  flex-col gap-20 mb-20 '>
          <div className='text-center flex flex-col gap-2'>

          <h1 className='text-4xl font-poppins font-bold text-[#222222] px-10'>What Kind of Services we Offer</h1>
          <p className='text-[#777777]'>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className='grid lg:grid-cols-3 lg:w-11/12  m-auto lg:pl-7  gap-7  '>
            {
              aboutitem.map((val,i)=>{
                return(

            <div className='flex flex-col gap-3 lg:w-11/12 px-4'>
              <img src={val.src}></img>
              <h1 className='text-xl font-semibold font-poppins'>{val.name}</h1>
              <p className='text-[#777777] font-light w-11/12'>{val.text}</p>
            </div>
                )
              })
            }
 
          </div>
        </section>
        <Review/>
       
    </div>
    
    
  )
}

export default About