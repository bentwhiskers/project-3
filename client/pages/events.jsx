import Header from "../components/header";
import Footer from "../components/footer";
import EventPost from "./eventPost"
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Heading = styled.h2`
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const StyledP = styled.p`
  color: white;
  text-align: center;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 1.25em;
  line-height: 1.75em;
  font-weight: regular;
  padding: .5em;
`;
const StyledLink = styled.a`
  font-weight: bold;
  color: #F4E285;

  &:hover {
    color: #BC4B51;
  }
`;

export default function Events() {
  return (
   <div>
    <Header/>

    <Heading>Events</Heading>
    
    <div className = "Events">
    <StyledP>Be inspired by new people and places with local Events! <StyledLink href = "/eventsPost">Post</StyledLink> to Host a new event! <StyledLink href = "/search">Search</StyledLink> for something to match your vibe!</StyledP>
    </div>
    <EventPost/>
    <Footer/>
   </div>
  );
}

//Need to have post and search routes set up and added to these anchor tags

//event model and schema to match input taken in from front end submit form