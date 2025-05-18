import React from 'react'
import Bgimage from '../assets/top-banner.jpg.webp'

import Fooddisplay from '../components/pagecomponents/home/Fooddisplay';

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