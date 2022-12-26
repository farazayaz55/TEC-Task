import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import LoginForm from "./Login/Login";
import SignUpForm from "./SignUp/SignUp";
import { BsFillArrowUpCircleFill,BsFillArrowDownCircleFill } from "react-icons/bs";

const Navbar = () => {
  
  const [showmore,setmore]=useState(false);
  const [buttontext,setText]=useState("Read More...");
  const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const [signIn,setSignIn]=useState(false);
  const [signUp,setSignUp]=useState(false);
  const toggle=()=>{
    showmore?setText("Read More..."):setText("Read Less...");
    setmore(!showmore);
  }
  const HandleSignIn=()=>{
    setSignIn(!signIn)
    if(signUp) {
        setSignUp(!signUp)
    }
  }
  const HandleSignUp=()=>{
    setSignUp(!signUp)
    if(signIn) 
    {
      setSignIn(!signIn)
    }
  }
  return (
    <div className="Out-wrapper" >
      <div className="imgBackground"></div>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left-column">
          <div className="n-left">
            <div className="n-name">
              <span>UDIX.</span>
            </div>
            <div className="l-list">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link to="Out-wrapper" spy={true} smooth={true} className="figmaFont homeNav">
                    Home
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="blog" spy={true} smooth={true} className="figmaFont" >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="portfolio" spy={true} smooth={true}  className="figmaFont">
                    Product
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="flex-container" spy={true} smooth={true} className="figmaFont">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* list of links */}

          <div className="Star">&#9733; Top Market Company</div>

          <div className="company-details">
              <h1> Focus on the work that maters</h1>
              <h3>udix is the world’s first smart workspace. We bring all your team’s content together while letting you use the tools you love.</h3>
            </div>
            
          <div className="ReadMore">

            <div style={{color:"white"}} className="lengthyText">
              {showmore?text:""}
              <div className="readMoreButtonRow">
                <span className="navButtonTxt" >{buttontext}</span>
                <button onClick={toggle} id="readMoreBtn">{showmore?<BsFillArrowUpCircleFill />:<BsFillArrowDownCircleFill />}</button>
                
              </div>
            </div>
          </div>

        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <button id="sign_in" onClick={HandleSignIn} className="figmaFont">
                  Sign In
                </button>
              </li>
              <li>
                <button id="sign_up" onClick={HandleSignUp} className="figmaFont">
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LoginForm isShowLogin={signIn} />
      <SignUpForm isShowSignUp={signUp} />
    </div>
  );
};

export default Navbar;
