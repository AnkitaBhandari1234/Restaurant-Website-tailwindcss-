import React from "react";
import Firstimage from "../../../assets/g1.jpg.webp";
import Secondimage from "../../../assets/g2.jpg.webp";
import Thirdimage from "../../../assets/g3.jpg.webp";
import Fourthimage from "../../../assets/g4.jpg.webp";
import Fifthimage from "../../../assets/g5.jpg.webp";
import Sixthimage from "../../../assets/g6.jpg.webp";



function Fooddisplay() {
  const menu = [
    {
      name: "Breakfast",
    },
    {
      name: "Lunch",
    },
    {
      name: "dinner",
    },
    {
      name: "Budget meal",
    },
    {
      name: "buffet",
    },
  ];

  return (
    <section className="h-fit py-24 lg:py-20">
      <div className="text-center font-poppins pb-20 py-6">
        <h1 className="text-4xl font-[700] mb-4 text-[#222222]  m-auto w-10/12 lg:w-full ">
          Food and Customer Gallery
        </h1>
        <p className="text-[#777777] text-md">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className=" h-96 lg:h-24 grid lg:grid-cols-6 place-items-center items-center   shadow-[0px_35px_35px_35px_rgba(0,0,0,0.1)] w-11/12 lg:w-10/12 m-auto rounded-xl   text-sm font-poppins text-[#171617] capitalize bg-[#FFFFFF] ">
        <h3 className="bg-red-500 w-full h-full rounded-t-xl lg:rounded-xl  text-center  text-white place-content-center">
          All menu
        </h3>
        {
            menu.map((val,i)=>{
                return(

        <h3 className="border-r-1 border-[#dcdcdf] w-full h-full place-content-center text-center">
          {val.name}
        </h3>
                )
            })
        }
     
      </div>

      <div className="grid lg:grid-cols-3  px-10 lg:px-14 py-16 gap-5 lg:gap-8 ">
       

        <img src={Firstimage}></img>
        <img src={Secondimage}></img>
        <img src={Thirdimage}></img>
        <img src={Fourthimage}></img>
        <img src={Fifthimage}></img>
        <img src={Sixthimage}></img>
      </div>
    </section>
  );
}

export default Fooddisplay;
