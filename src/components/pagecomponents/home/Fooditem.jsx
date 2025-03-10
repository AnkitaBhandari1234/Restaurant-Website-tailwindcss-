import React from 'react'

function Fooditem() {
  const menu=[
    {
      name:'Breakfast',
    },
    {
      name:'Lunch',
    },
    {
      name:'dinner',
    },
    {
      name:'Budget meal',
    },
    {
      name:'buffet',
    }
  ]
  const foodname =[
   {
     name:'cappuccion',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },
   {
     name:' americano',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },
   {
     name:'macchiato',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },
   {
     name:'mocha',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },
   {
     name:'piccolo latte',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },
   {
     name:'ristretto',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   }
 

  ]
  return (

    <section className="h-fit bg-[#e0e0e4] py-32">
      <div className="text-center font-poppins pb-20">
        <h1 className="text-4xl font-[700] mb-3 text-[#222222] ">
          What kind of Foods we serve for you
        </h1>
        <p className="text-[#777777] text-md">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className=" h-90 lg:h-24 grid lg:grid-cols-6 place-items-center items-center   shadow-[0px_35px_35px_35px_rgba(0,0,0,0.1)] w-11/12 lg:w-10/12   m-auto  rounded-2xl text-sm font-poppins text-[#171617] capitalize bg-[#FFFFFF] ">
        <h3 className="bg-red-500 w-full h-full  rounded-t-xl  lg:rounded-l-2xl text-center  text-white place-content-center">
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

      {/* cards display */}
      <div className=" pt-20 grid lg:grid-cols-2 gap-6  lg:gap-9  px-5 lg:px-16 ">
        {
          foodname.map((val,i)=>
            {
            return(


        <div className="bg-[#FFFFFF] px-8  py-7 lg:py-5 rounded-[6px]  ">
          <div className="flex justify-between mb-3 ">
            <h1 className="text-xl capitalize  font-poppins text-[#222222] font-bold">
              {val.name}
            </h1>
            <span className="text-red-600 font-bold text-xl">{val.price}</span>
          </div>
          <p className="text-[#808484] font-sm  lg:w-10/12">
            {val.text}
          </p>
        </div>
            );
          })
        }
        
      </div>
    </section>
  )
}

export default Fooditem