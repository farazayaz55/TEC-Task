import React from "react";
import "./Details.css";

const Details=(props)=> {
  return (
    <div className="DetailsContainer">
      <div className="InnerContainer">
        <h3 className="Header">Working with us are the path to success</h3>
        <h3 className="SubHeader">Get the Onboarding Package for Free and enjoy our platform with the support of our professional onboarding team.
        </h3>
        <div className="FormGroup">
          <input className="EmailInput" type="text" placeholder="Name" />
          <button className="SubscribeButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
export {Details};
