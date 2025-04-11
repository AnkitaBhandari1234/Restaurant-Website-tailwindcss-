import React from 'react'
import Alignedimg from '../../../assets/pagealignedimg.webp'

function Aligntext() {
  return (
    <div className='py-28 flex flex-col gap-30 col'>
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl font-poppins text-gray-800 lg:ml-18 ml-5'>Left Aligned</h1>
            <div className='flex flex-col lg:flex-row gap-10 w-11/12 mx-auto  lg:items-center items-start lg:px-5'>
                <img src={Alignedimg}></img>
                <p className='text-[16px] text-gray-500 font-[350] text-left '>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl font-poppins text-gray-800 text-right lg:mr-18 mr-5 '>Right Aligned</h1>
            <div className='flex lg:flex-row-reverse flex-col-reverse lg:gap-10 gap-8 lg:w-11/12 mx-auto  lg:items-center items-end px-5'>
                <img src={Alignedimg}></img>
                <p className='text-[16px] text-gray-500 font-[350] text-right '>Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs


Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms


</p>
            </div>
        </div>
    </div>
  )
}

export default Aligntext