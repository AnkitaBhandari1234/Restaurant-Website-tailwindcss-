import React from 'react'



import Fooditem from '../components/pagecomponents/home/Fooditem.jsx'
import Reservationform from '../components/pagecomponents/home/Reservationform.jsx'
import Fooddisplay from '../components/pagecomponents/home/Fooddisplay.jsx'
import Review from '../components/pagecomponents/home/Review.jsx'
import Blog from '../components/pagecomponents/home/Blog.jsx'
import Aboutinfo from '../components/pagecomponents/home/Aboutinfo.jsx'

import Banner from '../components/pagecomponents/home/Banner.jsx'



function Home() {
  return (
    <>


    <Banner/>
   <Aboutinfo/>
    <Fooditem/>
   <Reservationform/>
   <Fooddisplay/>
   <Review/>
   <Blog/>
 

  

    
   
  </>
  )
}

export default Home