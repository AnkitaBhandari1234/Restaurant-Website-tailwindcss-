import React from 'react'
import Bgimage from '../assets/top-banner.jpg.webp'
import { FaArrowRight } from "react-icons/fa6";
import Navbarsection from '../components/navigation/Navbarsection';
import Fooddisplay from '../components/pagecomponents/home/Fooddisplay';
import Footer from '../components/footer/Footer';
import BannerReuse from '../components/ui/BannerReuse';


function Gallery() {
  return (
    <div>
     
     <BannerReuse image={Bgimage} title='Gallery'  />
   
            <Fooddisplay/>
            
    </div>
  )
}

export default Gallery