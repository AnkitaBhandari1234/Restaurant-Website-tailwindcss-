import React from 'react'
import Riceimg from '../../../assets/b1.jpg.webp'
import Eggimg from '../../../assets/b2.jpg.webp'
import Steakimg from '../../../assets/b3.jpg.webp'
import Bunimg from '../../../assets/b4.jpg.webp'

function Blog() {
    const blogcontent=[
        {
        src:Riceimg,
        date:'10 JAN 2018',
        name:'Cooking Perfect Fried Rice in minutes',
        text:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        like:'17',
        comments:'02'
    },
        {
        src:Eggimg,
        date:'10 JAN 2018',
        name:'Secret of making Heart Shaped eggs',
        text:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        like:'17',
        comments:'02'
    },
        {
        src:Steakimg,
        date:'10 JAN 2018',
        name:'How to check steak if it is tender or not',
        text:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        like:'17',
        comments:'02'
    },
        {
        src:Bunimg,
        date:'10 JAN 2018',
        name:'Seaseme and black seed Flavored Bun Rocks',
        text:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        like:'17',
        comments:'02'
    },
]
  return (
    
    <section className="py-24 flex flex-col gap-20">
      <div className="text-center  flex flex-col gap-5 items-center">
        <h1 className=" m-auto w-9/12 text-4xl text-[#222222] font-bold font-poppins ">
          Latest From Our Blog
        </h1>
        <p className="   mx-6  lg:w-7/12 text-[15px] text-[#777777]  font-[1px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid lg:grid-cols-4   lg:w-11/12 m-auto gap-7 lg:justify-center px-4">

      {
        blogcontent.map((val,i)=>{
            return(

        <div>
          <img src={val.src} className="w-full"></img>
          <div className="flex flex-col gap-3 ">
            <span className="bg-black w-6/12 py-1.5 text-white font-light text-center mt-5">
              {val.date}
            </span>
            <h3 className=" text-xl font-bold lg:font-poppins text-[#3F3E3F] ">
              {val.name}
            </h3>
            <p className="text-[#777777] text-md  font-light w-11/12">
              {val.text}
            </p>
            <div className="flex justify-between text-[#777777]  ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#656363"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.8"
                    d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                  />
                </svg>
                <span className="text-sm">{val.like} Likes</span>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#726e6e"
                    d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                </svg>
                <span className="text-sm">{val.comments} Comments</span>
              </div>
            </div>
          </div>
        </div>
            )
        })
      }
        {/* <div>
          <img src={Eggimg} className="w-full"></img>
          <div className="flex flex-col gap-3 ">
            <span className="bg-black w-6/12 py-1.5 text-white font-light text-center mt-5">
              10 Jan 2018
            </span>
            <h3 className="text-xl font-bold font-poppins text-[#3F3E3F] ">
              Secret of making Heart Shaped eggs
            </h3>
            <p className="text-[#777777] text-md  font-light w-11/12">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex justify-between text-[#777777] ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#656363"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.8"
                    d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                  />
                </svg>
                <span className="text-sm">15 Likes</span>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#726e6e"
                    d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                </svg>
                <span className="text-sm">02 Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Steakimg} className="w-full"></img>
          <div className="flex flex-col gap-3 ">
            <span className="bg-black w-6/12 py-1.5 text-white font-light text-center mt-5">
              10 Jan 2018
            </span>
            <h3 className=" text-[18px] lg:text-xl font-bold font-poppins text-[#222222] ">
              How to check steak if it is tender or not
            </h3>
            <p className="text-[#777777] text-md  font-light w-11/12">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex justify-between text-[#777777] ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#656363"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.8"
                    d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                  />
                </svg>
                <span className="text-sm">15 Likes</span>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#726e6e"
                    d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                </svg>
                <span className="text-sm">02 Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Bunimg} className="w-full"></img>
          <div className="flex flex-col gap-3 ">
            <span className="bg-black w-6/12 py-1.5 text-white font-light text-center mt-5">
              10 Jan 2018
            </span>
            <h3 className="text-[17px] lg:text-xl font-bold lg:font-poppins text-[#3F3E3F] ">
              Seaseme and black seed Flavored Bun Rocks
            </h3>
            <p className="text-[#777777] text-md  font-light w-11/12">
              inappropriate behavior ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex justify-between text-[#777777] ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#656363"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.8"
                    d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                  />
                </svg>
                <span className="text-sm">15 Likes</span>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#726e6e"
                    d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                </svg>
                <span className="text-sm">02 Comments</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Blog