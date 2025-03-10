import React from "react";
import Bgimage from "../assets/top-banner.jpg.webp";
import { FaArrowRight } from "react-icons/fa6";
import Navbarsection from "../components/navigation/Navbarsection";
import Fooditem from "../components/pagecomponents/home/Fooditem";
import Reservationform from "../components/pagecomponents/home/Reservationform";
import Footer from "../components/footer/Footer";
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
