import React, { useContext } from "react";
import projectAsset1 from "../../img/image2.png";
import projectAsset2 from "../../img/image-2.png"
import "./Solutions.css";
const Solutions=()=>{

    return(
        // flexContainer
        <div className="flex-container">
             {/* flexItem */}
            <div className="Image">
                <img src={projectAsset1} alt="" className="imgsrc"></img>
                <img src={projectAsset2} alt="" className="imgsrc2"></img>
            </div>
            {/* flexItem */}
            <div className="Description">
                
                <h2>Creativity and Technology</h2>
                <h3>Some networks believe that by only offering a basic tracking system that affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results</h3>
            
                <h2>Defines our true value</h2>
                <h3>Some networks believe that by only offering a basic tracking system that affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech</h3>
            </div>
        </div>
    )
}

export default Solutions;