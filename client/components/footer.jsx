/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ListStyle = styled.li`
  color: white;
  font-weight: bold;
  padding: .5em;
  
`;

const LinkStyle = styled.a`
  color: #F4E285;
  font-weight: bold;
`;

export default function Footer() {
    return (
     <div>
      <h4 css={{
        color: 'white',
        fontWeight: 'bold',

      }}>Contact the Creators:</h4> 
      <ul>
        <ListStyle>Caroline B: <LinkStyle>github.com/carolinebea <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></LinkStyle></ListStyle>
        <ListStyle>Erica A: <LinkStyle>github.com/bentwhiskers <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></LinkStyle></ListStyle>
        <ListStyle>Jake M: <LinkStyle>github.com/mobleyj2 <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></LinkStyle></ListStyle>
        <ListStyle>David G: <LinkStyle>github.com/Gcod0 <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></LinkStyle></ListStyle>
      </ul>
     </div>
    );
  }