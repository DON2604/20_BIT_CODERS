import React, { useEffect } from "react";
import Image from "../../assets/img/why-img.png";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Why = () => {

    useEffect(() => {
        Aos.init({
            duration: 1600,
            delay: 200,
        })
    }, [])

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-8">
          {/* image */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <img src={Image} alt="casset " />
          </div>
          {/* text */}
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="300"
          >
            <h2 className="section-title text-blue-100">Why you Should choose STOCKY</h2>
            <p className="section-subtitle text-grey-200">
              Experience the next generation trading platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className= "px-28 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:slate-800 text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;