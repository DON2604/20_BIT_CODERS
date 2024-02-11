import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/images/corouselimg/img1.svg';
import img2 from '../assets/images/corouselimg/img2.svg';
import img3 from '../assets/images/corouselimg/img3.svg';
import img4 from '../assets/images/corouselimg/img4.svg';
export const Corousel = () => {
   
    const data=[
        {
            description:"Buy",
            icon:(img1)
        },
        {
            description:"Sell",
            icon:(img2)
        },
        {
            description:"Invest",
            icon:(img3)
        },
        {
            description:"Earn",
            icon:(img4)
        }

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <div className='w-3/4 m-auto'>
          <div className="mt-20">
          <Slider {...settings}>
          {data.map((d) => (
          <div key={d.description} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.icon} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.description}</p>
              
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
           </Slider>   
          </div>
    </div>
  )
}