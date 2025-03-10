import React from 'react'
import Navbarsection from '../components/navigation/Navbarsection'
import Banner from '../components/pagecomponents/home/Banner'

import Fooditem from '../components/pagecomponents/home/Fooditem'
import Reservationform from '../components/pagecomponents/home/Reservationform'
import Fooddisplay from '../components/pagecomponents/home/Fooddisplay'
import Review from '../components/pagecomponents/home/Review'
import Blog from '../components/pagecomponents/home/Blog'
import Aboutinfo from '../components/pagecomponents/home/Aboutinfo.jsx'
// import Footer from '../components/footer/Footer'


function Home() {
  return (
    <>


    <Banner />
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