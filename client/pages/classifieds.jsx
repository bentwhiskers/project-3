import Header from "../components/header";
import Footer from "../components/footer";
import ClassPost from "./classPost"
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  font-weight: bold;
  color: #F4E285;

  &:hover {
    color: #BC4B51;
  }
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



export default function Classifieds() {
  return (
   <div>
    <Header/>
    <h2 css={{ color: 'white', fontSize: '2rem' }}>Classifieds Page</h2>
      <StyledP>
        <StyledLink href = "/classPost">Post</StyledLink> something you're looking to buy or sell! <StyledLink href = "/search">Search</StyledLink> for something!
      </StyledP>
    <ClassPost/>
    <Footer/>
   </div>
  );
}

