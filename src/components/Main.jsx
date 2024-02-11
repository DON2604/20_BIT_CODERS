import React, {useState, useEffect } from 'react';
import {TypeAnimation } from "react-type-animation";
//import { IoIosArrowDroprightCircle } from "react-icons/io";

import Image1 from "../assets/img/hero-img.png";
import Image2 from "../assets/img/why-img.png";
import Image3 from "../assets/img/react.svg";

//import ImgFlp from "./FlipImg";

import Stats from './stats/Stats';




const main = () => {


  



  const imageSources = [Image1, Image2,Image3];

const [currentImageIndex, setCurrentImageIndex] = useState(0);

const [isFlipped, setIsFlipped] = useState(false);


useEffect(() => { 
const interval = setInterval(() => {
   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
   

   //delete 
  //  if(setCurrentImageIndex === 0){
  //   setIsFlipped(true);
  //  }
  //  else{
  //   setTimeout( () => {

  //   })
  //  }
  //delete 
   


   setIsFlipped(true); // Reset flip state when image changes
   setTimeout( () => setIsFlipped(false), 3000); //Reser 
   
},6000 );

setTimeout(() => setIsFlipped(true),5000);



return () => { 
    clearInterval(30000);
   
}; }, []);

const handleImageClick = () => {
  setIsFlipped(true); // Trigger flip animation on image click
};
  
//comment 

  return (
    <section>
     
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 text-center sm:text-left ml-16" data-aos="fade-down"
            data-aos-delay="400">
      {/* <h3>All Finance things right here</h3> */}

                <h1 className="text-white mt-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold"data-aos="fade-down"
            data-aos-delay="1000"> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500">
                         Stock Analysis {" "}
                    </span> 
                    <br /> 
                    <span className='text-3xl sm:text-4xl lg:text-5xl  font-thin text-yellow-50'>
                      At your ease  {" "}
                    </span>
                    <br />
                    <TypeAnimation sequence={[ 
                        "Safely ", 3000, 
                        "Securely", 1000, 
                        "Happily 😊", 1000, 
                         
                    ]} 
                    wrapper="span" speed={50} repeat={Infinity} />
                    
                    <br />

                </h1><br />< br />


               

                <div> <br /> 
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white" data-aos="fade-right"
            data-aos-delay="500"  > 
                GET STARTED! 
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3" data-aos="fade-left"
            data-aos-delay="500"  > 
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> 
                    Contact Us 😇 
                </span> 
            </button>
            

            {/* <div className="flex items-center justify-betweeen gap-2">
              Try for Free
              {/* <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" /> */}
            {/* </div>
          </button>
        </div>  */} 
        </div>         

      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 "> 
        
    </div> 
       
    <div className="col-span-5 place-self-center mt-4 lg:mt-1 ">
      <div className= "mr-4">

        {/* comment */}
        <img
            src={imageSources[currentImageIndex]}
            alt="banner"
            data-aos={isFlipped ? ' ' : 'fade-up'} // AOS attribute for flip animation
            //data-aos = 'fade-up'
            data-aos-delay="600"
            className={`absolute top-28 right-3 mr-20 ${isFlipped ? 'flip' : ' flip'}`} // Apply flip class conditionally
                //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-28  right-3 mr-20 "
                width={400} 
                height={400}
                
                //onCanPlay={handleImageClick}
                onClick={handleImageClick} // changes on click 
          />
{/* 
<img
            src={Image1}
            alt="banner"
            data-aos="fade-up"
            data-aos-delay="600"
             
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-28  right-3 mr-20 "
                width={400} 
                height={400} 
          /> */}


          {/* <div
             //src={<ImgFlp/>}
            alt="banner"
            data-aos = 'fade-up'
            data-aos-delay="600"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-28  right-3 mr-20 "
            width={400} 
            height={400}
          > 
            <ImgFlp/>
          </div> */}
          




        {/* Delete */}
          {/* <img 
            src={imageSources[currentImageIndex]}
            className='flip absolute top-28 right-3 mr-20' width={400} 
            height={400} data-aos = 'fade-up'
            data-aos-delay="600" /> */}
      </div>
          
        </div>

    </div>
    
    <Stats />

    </section>
    
  )
}

export default main