import React from "react";

import BookLoverImg from "../../../img/book-lover.svg";
import "./SideImage.css"



const SideImage=(props)=> {
  return (
    <div className="SideImageContainer">
      <div className="Image">
        <img src={BookLoverImg} alt=""/>
      </div>
    </div>
  );
}

export {SideImage};