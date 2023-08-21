import Header from "../components/header";
import Footer from "../components/footer";
import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import img from '../assets/images/stock-background.jpeg';
import imgTwo from '../assets/images/stock-pic.jpeg';

const Description = styled.div`
  color: white;
  text-align: left;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 1.25em;
  line-height: 1.75em;
  font-weight: regular;
  padding: 1.5em;
  background-color: #96D2BE;
  border-radius: 60px 20px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  image-rendering: auto;
  border: 3px solid #BC4B51;
  border-radius: 50%;
  padding: 3px;
  box-shadow: 4px 4px 8px #FFAF69;
  margin: 1em;
`;

const SecondImage = styled.img`
  width: 30%;
  height: auto;
  image-rendering: auto;
  border: 3px solid #BC4B51;
  padding: 3px;
  box-shadow: 4px 4px 8px #FFAF69;
  margin: 1em;
`;

const LinkStyle = styled.span`
  font-weight: bold;
  color: #F4E285;
`;

function Home() {
  return (
    
   <div>
    <Header/>
    
      <div className = "Home">
          
          <StyledImage src={img} alt='silhouette of people in front of a sunset'></StyledImage>
            
            <Description>There is something here for you on this <strong>Local Community Board</strong>! A simple way to reduce paper consumption and increase awareness of community activities, our online LocaleLink<i className='fas fa-link'></i> connects neigbors effortlessly. Viewing the <a href="/events"><LinkStyle>Events</LinkStyle></a> tag will lead you to local gatherings such as farmers' markets, yard sales, and festivals. The <a href= "/classifieds"><LinkStyle>Classifieds</LinkStyle></a> tag will allow you to view ads for things to buy, sell, or trade!</Description>
              <SecondImage src={imgTwo} alt='five people grabbing eachothers wrists'></SecondImage>

                <Footer/>
  
    </div>
   </div>
  );
}

export default Home;
