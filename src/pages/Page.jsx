import React from 'react'
import BannerReuse from '../components/ui/BannerReuse'
import Bgimage from '../assets/top-banner.jpg.webp';
import Button from '../components/pagecomponents/Elements/Button';
import Aligntext from '../components/pagecomponents/Elements/Aligntext';

function Page() {
  const definition=[
    {
      name:'Definition 01',
      text:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    },
    {
      name:'Definition 02',
      text:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    },
    {
      name:'Definition 03',
      text:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    },
  ]
  return (
    <div className='overflow-hidden bg-[#f9f9ff]'>
      <BannerReuse image={Bgimage} title='Elements' />
      <div className='lg:w-10/12 w-11/12 py-28 mx-auto '>
        <h1 className='lg:text-2xl text-3xl font-bold font-poppins text-gray-800 mb-8'>Text Sample</h1>
        <p className='text-gray-500 font-[350] text-[15px] '>Every avid independent filmmaker has <span className='text-red-500 font-[400]'>Bold</span> about making that Italic interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” the<sup className='text-red-500'>Superscript</sup> scene, or video renters with their big project. But once you have the<sub className='text-red-500'>Subscript</sub> “in the can” (no easy feat), how do you move from a <span className='text-red-500 line-through '>Strike</span> through of master DVDs with the <span className='text-red-500 underline'>“Underline”</span> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:</p>
      </div>
      
        <Button />
        <Aligntext />
        <div className='w-11/12 flex flex-col  gap-6 lg:items-center mx-auto   '>
          <h1 className='w-11/12 lg:text-2xl text-3xl  font-semibold font-poppins text-gray-800   '>Definition</h1>
          <div className='grid lg:grid-cols-3 lg:w-11/12 mx-auto gap-10'>
            {
            definition.map((val,i)=>{
              return(

            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-semibold text-gray-700 font-poppins'>{val.name}</h3>
              <p className='text-gray-500 font-[350] w-full'>{val.text}</p>
            </div>
              )
            })
            }
          </div>
        </div>
        <div className='flex flex-col lg:gap-10 gap-7 py-28 w-11/12 mx-auto'>
          <h1 className='text-2xl font-semibold font-poppins text-gray-900 ml-13'>
          Block Quotes
          </h1>
          <div className='flex flex-row gap-8 items-center w-11/12 mx-auto'>

          <span className='  lg:h-48 h-[500px] border-[1.5px] border-red-400 rounded-2xl font-bold w-fit '></span>
          <p className='text-gray-500  text-[15px] font-[350]'>“Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”</p>
          </div>
        </div>
      
    </div>
  )
}

export default Page