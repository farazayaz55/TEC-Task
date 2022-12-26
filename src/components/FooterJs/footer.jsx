import { SocialIcon } from 'react-social-icons';//social icons
import icon1 from "../../img/icon1.png"
import icon2 from "../../img/icon2.png"
import icon3 from "../../img/icon3.png"
import icon4 from "../../img/icon4.png"
import icon5 from "../../img/icon5.png"
import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="n-footer" id="Footer">
      <div className="n-wrapper" id="Navbar">
      {/* left */}
        <div className="n-left">
          <div className="n-name">Udix</div>
          <div className="n-sub">udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.</div>
        </div>
      {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li id="l1">
                {/* link is like href without reloading the page */}
                <Link activeClass="active" to="Out-wrapper" spy={true} smooth={true}> 
                  Home
                </Link>
              </li>
              <li id="l2">
                {/* here we are defining relative links */}
                {/* the relative links are the components that are relative to component loading them
                that's why the links are not starting with / */}
                <Link to="blog" spy={true} smooth={true}>
                  Blog
                </Link>
              </li>
              <li id="l3">
                <Link to="portfolio" spy={true} smooth={true}>
                  Product
                </Link>
              </li>
              <li id="l4">
                <Link to="flex-container" spy={true} smooth={true}>
                  Contacts
                </Link>
              </li>
              <li id="l5">
                <Link to="Out-wrapper" spy={true} smooth={true} className="sign_in">
                  Sign_In
                </Link>
              </li>
              <li id="l6">
                <Link to="Out-wrapper" spy={true} smooth={true} className="sign_up">
                  Sign_Up
                </Link>
              </li>
            </ul>
          </div>
          {/* add icons */}
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={icon1} style={{objectFit:"contain"}} alt="" /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><img src={icon2} style={{objectFit:"contain"}} alt="" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src={icon3} style={{objectFit:"contain"}} alt="" /></a>
            <a href="https://en.wikipedia.org/wiki/Google%2B" target="_blank" rel="noreferrer"><img src={icon4} style={{objectFit:"contain"}} alt="" /></a>
            <a href="https://www.skype.com/en/" target="_blank" rel="noreferrer"><img src={icon5} style={{objectFit:"contain"}} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
