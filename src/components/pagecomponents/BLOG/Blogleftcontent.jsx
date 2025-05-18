import React from "react";
import { BsPerson } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsChat } from "react-icons/bs";

function Blogleftcontent() {
  const maping = [
    {
      title: " Mark wiens",
      icons: <BsPerson />,
    },
    {
      title: "12 Dec, 2017",
      icons: <CgCalendarDates />,
    },
    {
      title: "1.2M views",
      icons: <MdOutlineRemoveRedEye />,
    },
    {
      title: "06 Comments",
      icons: <BsChat />,
    },
  ];

  return (
    <div className="lg:px-7 lg:w-4/12 w-11/12 lg:py-10 mt-10  ">
      <div className=" flex flex-col gap-3    lg:text-right items-start ">
        <h1 className=" lg:text-[16px] text-[18px] font-[350] text-gray-900 mb-3 hover:text-[#F42F2C] cursor-pointer ml-4 ">
          Food, Technology, Politics, Lifestyle
        </h1>
        <div className="  lg:flex lg:flex-col grid grid-cols-2  items-center gap-3    ">
          {maping.map((val, i) => {
            return (
              <div key={i} className="flex flex-row-reverse items-center gap-3   ">
                <div className="text-xl">{val.icons}</div>
                <div className="text-gray-600 text-[15px]">{val.title}</div>
              </div>
            );
          })}
        </div>
      </div>

     
    </div>
  );
}

export default Blogleftcontent;
