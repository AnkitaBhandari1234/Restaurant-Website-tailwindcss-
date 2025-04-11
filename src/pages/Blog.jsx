import React from "react";
import FeaturesBlog from "../components/pagecomponents/BLOG/FeaturesBlog";
import Blogbgimg from "../assets/blog-bg.webp";
import Blogmiddlecontent from "../components/pagecomponents/BLOG/Blogmiddlecontent";
import Blogrightcontent from "../components/pagecomponents/BLOG/Blogrightcontent";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Blog() {
  return (
    <div>
      <div>
        <div className="bg-linear-to-r from-black/50 to-black/60 absolute top-0 bottom-0 left-0 right-0   z-10 h-[850px] "></div>
        <img
          src={Blogbgimg}
          className="lg:w-full w-fit h-[850px]  object-cover"
        ></img>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[1110px] flex flex-col justify-center items-center gap-5 z-10 ">
          <h1 className="text-4xl text-white font-bold font-poppins lg:w-5/12  text-center tracking-wide  ">
            Dude You’re Getting a Telescope
          </h1>
          <p className="text-white font-poppins text-center">
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first
          </p>
          <button
            type="submit"
            className="text-black bg-white uppercase px-8 py-3 text-center font-poppins text-sm font-bold hover:bg-transparent hover:border hover:border-white hover:text-white"
          >
            view more
          </button>
        </div>
      </div>
      <FeaturesBlog />
      <div className="flex lg:flex-row flex-col gap-4 w-11/12 mx-auto  ">
        <div>
          <Blogmiddlecontent />
        </div>
        <Blogrightcontent />
      </div>
      <div className="flex flex-row gap-3 items-center lg:w-5/12 w-8/12 mx-auto text-gray-600 py-24 ">
        <span className="text-xl">
          <IoIosArrowBack />
        </span>
        <div className="flex flex-row gap-4 font-poppins items-center">
          <span>01</span>
          <span className="bg-red-500 text-white px-3 py-1">02</span>
          <span>03</span>
          <span>04</span>
          <span>09</span>
        </div>
        <span className="text-xl ">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default Blog;
