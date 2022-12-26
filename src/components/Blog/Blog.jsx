import styled from "styled-components";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from 'react';
import { sliderItems } from "../Blog/data";
import './Blog.css'
const Container=styled.div`
  display: flex;
  gap: 7rem;
  position: relative;
  bottom:150px;
  left: 300px;
  height:500px;  
  @media only screen and (max-width: 490px)
  {
    display:inline;
    height:800px;
  }
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
  bottom:20px;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  background-color:transparent;
  @media only screen and (max-width:490px)
  {
    top:200px;
    bottom:0px;
    right:05px;
  }
`;

const Flex=styled.div`
  position:relative;
  top:50px;
  left:100px;
  display:flex;
  @media only screen and (max-width: 490px)
  {
    position:absolute;
    bottom:200px;
    left:400px;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  position:relative;
  bottom:200px;
  @media only screen and (max-width: 490px)
  {
    bottom:0px;
    display:flex;
    height:800px;  
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position:relative;
  bottom:75px;
  @media only screen and (max-width: 490px)
  {
    display:inline;
    bottom:0px;
  }
`;

const ImgContainer = styled.div`
  display: block;
  position:relative;
  top:100px;
  @media only screen and (max-width:490px)
  {
    top:0px;
    left:50px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  position:relative;
  top:70px;
  height:360px;
  width:470px;
  @media only screen and (max-width:490px)
  {
    top:0px;
    height:400px;
    width:600px;
    position:relative;
    right:170px;
    object-fit: contain;
  }
`;

const InfoContainer = styled.div`

  position: relative;
  top:120px;
  @media only screen and (max-width: 490px)
  {
    position:relative;
    right:300px;
    top:150px;
  }
`;

const Title = styled.h1`
  text-align: right;
  width:500px;
  color:blue;

  ${'' /* figma style */}
  color: #381DDB;
  font-family:'Montserrat'; font-style: italic; font-weight:900;
 
 
  @media only screen and (max-width: 490px)
  {
    text-algin:center;
    position:relative;
    bottom:150px;
  }
`;

const Desc = styled.h2`
  color:black;
  width:500px;
  text-align: right;
  


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
/* or 44px */

  text-align: right;

/* General / Dark */

  color: #222222;


  @media only screen and (max-width: 490px)
  {
    text-align:left;
    position:relative;
    left:375px;
    bottom:150px;
    font-size:20px;
    width:250px;
  }
`;

const Button = styled.h3`
  color:black;
  font-weight: 50;
  font-size:12px;
  width:400px;
  text-align: right;
  position:relative;
  left:100px;


  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  ${'' /* text-align: right; */}

  /* General / Dark */

  ${'' /* color: #222222; */}

  @media only screen and (max-width: 490px)
  {
    text-align:left;
    position:relative;
    left:375px;
    height:auto;
    width:200px;
    bottom:150px;
    font-size:10px;
  }
`;
const Blog=()=>{

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

    return(
        // flexContainer
        <div className="blog">
          <Container>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>Udix.</Title>
                <Desc>{item.h2}</Desc>
                <Button>{item.h3}</Button>
                <Flex>
                  <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <BsFillArrowLeftCircleFill style={{color: "red",position:"relative",left:"13px"}}/>
                  </Arrow>
                    <p className="out_of_blog">{slideIndex+1} out of {sliderItems.length}</p>
                  <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <BsFillArrowRightCircleFill style={{color: "red",position:"relative",left:"13px"}} />
                  </Arrow>
                </Flex>
              </InfoContainer>
            </Slide>
          ))}
          </Wrapper>
          </Container> 
        </div>     

    )
}

export default Blog;