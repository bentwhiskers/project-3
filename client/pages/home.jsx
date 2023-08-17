import Header from "../components/header";
import Footer from "../components/footer";
import React from 'react';
import {css} from '@emotion/react';

function Home() {
  return (
    
   <div>
    <Header/>
    
    <div className = "Home">

    <p>There is something here for you on this Local Community Board! A simple way to reduce paper consumption and increase awareness of community activities, our online Community Board connects neigbors effortlessly. Viewing the <a href="/events">Events</a> tag will lead you to local gatherings such as farmers' markets, yard sales, and festivals. The <a href= "/classifieds">Classifieds</a> tag will allow you to view ads for things to buy, sell, or trade!</p>
    
    <Footer/>
  
   </div>
   </div>
  );
}

export default Home;
