import React from "react";
import "./Card.css";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill  } from "react-icons/bs";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';

const Card = ({emoji, heading, detail,extended_detail}) => {

  const [isFlipped,setFlipped]=useState(false);


  const handleClick=(e)=>{ 
    e.preventDefault();
    setFlipped(!isFlipped);
    console.log(detail);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" className="topmost">
    <div className="card"> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={handleClick}><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>

    </div>
    <div className="card"> 
      <img src={emoji} alt="" />
      <span className="extended_detail">{extended_detail}</span>
      <button className="c-button" onClick={handleClick}><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></button>

    </div>
    </ReactCardFlip>
  );
};

export default Card;
