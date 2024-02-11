import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    Aos.init({
        duration: 2500,
        delay: 200,
    })
  }, []);

  return (
   <section  className="about" id='about' data-aos="zoom-in-up"
   data-aos-offset="300" >
     
     <h1>About Us</h1>
     
      <div className="container overflow-hidden p-8 bg-opacity-30 h-full shadow-2xl shadow-black rounded-xl  backdrop-blur-xl backdrop-filter flex mx-auto space-x-8" >
        {/* <div data-aos="zoom-in-up"
            data-aos-offset="400"> */}
           
        <p>
        Welcome to Stocky, your trusted companion for navigating the complexities of the stock market with confidence and clarity. We are dedicated to empowering investors of all levels with advanced tools and insights to make informed decisions and maximize their investment potential.
          <br />
         
At Stocky, our mission is to democratize access to financial markets by providing users with cutting-edge predictive analytics and actionable intelligence. We believe that everyone should have the opportunity to participate in the wealth creation potential of the stock market, regardless of their background or expertise.
        </p>
        {/* </div> */}
       
      </div>
   </section>
  )
}

export default About