/*
use the useRef hook to pass the context of swipper to the handler function
*/

import styled from "styled-components";
import React, { useRef } from "react";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination,Navigation  } from "swiper";
import projectAsset1 from "../../img/projectAsset1.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import css and data
import "./Companies.css";
import {sliderItems} from "./data";
import { useEffect } from "react";






const Flex=styled.div`
  position:relative;
  bottom:100px;
  ${'' /* left:100px; */}
  display:flex;
`
const Arrow=styled.div`
  width:50px;
  height:50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: relative;
  
  left: ${(props)=> props.direction==="right" && "0px"};
  right: ${(props)=> props.direction === "left" && "100px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media only screen and (max-width: 490px)
  {
    position:relative;
    left:${(props)=> props.direction==="right" && "20px"};
    right:${(props)=> props.direction === "left" && "20px"};
  }
`;



export default function Companies() {
  
  const swiperRef = useRef();
  const buttonRef= useRef();
  const buttonRef2= useRef();

  const HandleClick2 = (direction) => {
    if (direction === "left") {
        swiperRef.current.slidePrev()
        console.log(swiperRef.current.activeIndex)
        swiperRef.current.activeIndex==3?buttonRef.current.innerText=`${sliderItems.length} out of ${sliderItems.length}`:buttonRef.current.innerText=`${swiperRef.current.activeIndex-3} out of ${sliderItems.length}`
    } else {
      swiperRef.current.slideNext()
      console.log(swiperRef.current.activeIndex);
      swiperRef.current.activeIndex==11?buttonRef.current.innerText=`1 out of ${sliderItems.length}`:buttonRef.current.innerText=`${swiperRef.current.activeIndex-3} out of ${sliderItems.length}`
    }
  };

  const HandleClick = (direction) => {
    if (direction === "left") {
        swiperRef.current.slidePrev()
        console.log(swiperRef.current.activeIndex)
        swiperRef.current.activeIndex==0?buttonRef.current.innerText=`${sliderItems.length} out of ${sliderItems.length}`:buttonRef.current.innerText=`${swiperRef.current.activeIndex} out of ${sliderItems.length}`

    } else {
      swiperRef.current.slideNext()
      console.log(swiperRef.current.activeIndex);
      swiperRef.current.activeIndex==8?buttonRef.current.innerText=`1 out of ${sliderItems.length}`:buttonRef.current.innerText=`${swiperRef.current.activeIndex} out of ${sliderItems.length}`
    }
  };

  return (
    <div className="companies" id="companies">
      {/* heading */}
      <h1>Solutions that will change your bussiness forever</h1>


      <Swiper
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          490: {
            slidesPerView: 4,
          },
        }}       
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        grabCursor={true}

        navigation={true}
        modules={[ Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        
        className="Comapnies_Swiper"
      >
        {sliderItems.map(
          (slide)=><SwiperSlide> <img src={slide} alt= "" /> </SwiperSlide>
        )
        }
        <Flex>
        {/* mobile screen */}
        
        <div className="Arrow" onClick={()=>HandleClick("left")}>
                  <BsFillArrowLeftCircleFill style={{color: "red",position:"relative",left:"13px"}}/>
        </div>
        <p ref={buttonRef} >1 out of {sliderItems.length}</p>
        <div className="Arrow3" onClick={()=>HandleClick("right")}>
                  <BsFillArrowRightCircleFill style={{color: "red",position:"relative",left:"13px"}} />
        </div>
        
        {/* normal screen */}
        <div className="Arrow2" onClick={()=>HandleClick2("left")}>
          <BsFillArrowLeftCircleFill style={{color: "red",position:"relative",left:"13px"}}/>
        </div>
        <div className="Arrow2" onClick={()=>HandleClick2("right")}>
          <BsFillArrowRightCircleFill style={{color: "red",position:"relative",left:"13px"}} />
        </div>
        
        </Flex>
        
           
      </Swiper>
      
      </div>
  );
}
