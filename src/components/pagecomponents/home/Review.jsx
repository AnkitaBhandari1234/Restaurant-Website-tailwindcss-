import React from 'react'
import Reviewimage from '../../../assets/testi-image.webp'
import Reviewbgimage from '../../../assets/testimonial-bg.webp'

function Review() {
  return (
    <section className=" h-[400px] relative   ">
      <img src={Reviewbgimage} className=' h-full object-cover '></img>
    <div className="h-[400px] w-full flex flex-col  items-center gap-4 justify-center absolute top-0 left-0 right-0 bottom-0  ">
      <img src={Reviewimage} className="w-fit h-fit"></img>
      <h1 className="capitalize text-xl font-bold">Hilds sutton</h1>
      <div className="flex gap-1">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <p className=" w-10/12 lg:w-5/12 text-center text-gray-700">
        “Accessories Here you can find the best computer accessory for your
        laptop, monitor, printer, scanner, speaker. Here you can find the
        best computer accessory for your laptop, monitor, printer, scanner,
        speaker.”
      </p>
    </div>
  </section>
  )
}

export default Review