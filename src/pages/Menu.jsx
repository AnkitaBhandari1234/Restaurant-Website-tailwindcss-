import React from "react";
import Bgimage from "../assets/top-banner.jpg.webp";


import Fooditem from "../components/pagecomponents/home/Fooditem";
import Reservationform from "../components/pagecomponents/home/Reservationform";

import BannerReuse from "../components/ui/BannerReuse";

function Menu() {
  return (
    <div className="overflow-hidden">
  
      
      <BannerReuse image={Bgimage} title='Menus'/>

      <Fooditem />
      <Reservationform />
      
    </div>
  );
}

export default Menu;
