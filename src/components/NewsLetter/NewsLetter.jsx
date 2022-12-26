import React from "react";
import {Details} from "./Details/Details";
import {SideImage} from "./SideImage/SideImage";
import "./NewsLetter.css"



const NewsLetter=(props) =>{
  return (
    <div className="card-container">
      <Details />
      <SideImage />
    </div>
  );
}

export default NewsLetter;