import React from "react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


//import data and css
import { sliderItems } from "./data";
import "./Portfolio.css";
import Card from "./Card/Card";

const Portfolio=()=> {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h1>Solutions that will change your bussiness forever</h1>
      <h4>Some networks believe that by only offering a basic tracking system that affiliates 
      can reach a high level creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutuions together with a team of creative experts
      </h4>

      <Swiper
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween:50,
          },
          // when window width is >= 768px
          490: {
            slidesPerView: 3,
            spaceBetween:0,
          },
        }}   
        slidesPerView={3}
        spaceBetween={0}

      
        className="mySwiper"
      >
      
        {sliderItems.map(
          (card)=>
          <SwiperSlide>
            <Card 
              emoji={card.emoji}
              heading={card.heading}
              detail={card.detail}
              extended_detail={card.extended_detail}
            ></Card>
          </SwiperSlide>
        )} 
       
      </Swiper>
      </div>
  );
}

export default Portfolio;