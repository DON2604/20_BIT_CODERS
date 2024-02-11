
                   

//                         <ul className='team-icon'>
//                             <li><a href='#' className='github'>
//                               <FaGithubSquare/>
//                                 </a></li>
//                             <li><a href='#' className='linkedin'>
//                              <BsLinkedin/>
//                                 </a></li>
                            
//                         </ul>
//                       </div>
//                     </div>
                   
                    
                    
//                 </div>
//                 <div className='team-member'>
//                     <div className="team-item">
//                       <img src={Img1} className='team-img' alt="" height={300} width={300}/>
//                       <h3>Arnabh Sinha</h3>
//                       <div className='team-info'>
//                         <p>Member</p>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, tenetur explicabo. </p>
//                         <ul className='team-icon'>
//                             <li><a href='#' className='github'>
//                               <FaGithubSquare/>
//                                 </a></li>
//                             <li><a href='#' className='linkedin'>
//                              <BsLinkedin/>
//                                 </a></li>
                            
//                         </ul>
//                       </div>
//                     </div>
                   
//                     <div className="team-item">
//                       <img src={Img1} className='team-img' alt="" height={300} width={300}/>
//                       <h3>Arnabh Sinha</h3>
//                       <div className='team-info'>
//                         <p>Member</p>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, tenetur explicabo. </p>
//                         <ul className='team-icon'>
//                             <li><a href='#' className='github'>
//                               <FaGithubSquare/>
//                                 </a></li>
//                             <li><a href='#' className='linkedin'>
//                              <BsLinkedin/>
//                                 </a></li>
                            




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import Img1 from '../assets/images/photo.jpeg'
import Img2 from '../assets/images/samadrita.jpg' 
import Img3 from '../assets/images/mrinmay.jpg' 
import Img4 from '../assets/images/swarnavo.jpg' 
import Img5 from '../assets/images/haimanti.jpg' 

import { FaGithubSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import './Team.css'

export const Team = () =>{

  let message="Lorem ipsum dolor sit amet consectetur adipisicing elit.  voluptate natus quasi saepe nulla voluptas odio?"

  return (
    <section className='section-white'>
      <div className='container'>
        
      <div className='col-md-12 text-center'>
                     <h2 className='section-title'>
                         Meet Our Team
                     </h2>
                     <p className='section-subtitle'>{message}</p>
                 </div>

        

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        <SwiperSlide>
            <div className="team-item">
              <img src={Img1} className='team-img' alt="" height={300} width={300}/>
                <h3>Arnabh Sinha</h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST B </p>
                        <ul className='team-icon'>
                          <li><a href='https://github.com/ArnabhS' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="team-item">
              <img src={Img4} className='team-img' alt="" height={300} width={300}/>
                <h3>Swarnavo Mukherjee </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST A </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="team-item">
              <img src={Img3} className='team-img' alt="" height={300} width={300}/>
                <h3>MRINMAY DAS </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='liadd nkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="team-item">
              <img src={Img5} className='team-img' alt="" height={300} width={300}/>
                <h3>HAIMANTI CHAKRABORTY  </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST A </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="team-item">
              <img src={Img1} className='team-img' alt="" height={300} width={300}/>
                <h3>Yuvraj </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, tenetur explicabo. </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className="team-item">
              <img src={Img2} className='team-img' alt="" height={300} width={300}/>
                <h3>SAMADRITA BHATTACHARYA</h3>
                  <div className='team-info'>
                    <p>Web developer, Java enthusiast, MERN Stack, Nextjs </p>
                      <p> CSIT B </p>
                        <ul className='team-icon'>
                          <li><a href='https://github.com/SamadritaBhattacharya' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>


      </Swiper>

      </div>
    </section>
  )

}