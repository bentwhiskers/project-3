import Header from "../components/header";
import Footer from "../components/footer";
import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import img from '../assets/images/stock-background.jpeg';

const DescriptionStyle = styled.div`

`;

const StyledImage = styled.img`
  width: 400px;
  height: 200px;
  image-rendering: auto;
`;

function Home() {
  return (
    
   <div>
    <Header/>
    
      <div className = "Home">
          <StyledImage src={img} alt='silhouette of people in front of a sunset'></StyledImage>
            <p>There is something here for you on this Local Community Board! A simple way to reduce paper consumption and increase awareness of community activities, our online Community Board connects neigbors effortlessly. Viewing the <a href="/events">Events</a> tag will lead you to local gatherings such as farmers' markets, yard sales, and festivals. The <a href= "/classifieds">Classifieds</a> tag will allow you to view ads for things to buy, sell, or trade!</p>
    
              <Footer/>
  
    </div>
   </div>
  );
}

export default Home;
