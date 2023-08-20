import React, { useState }from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 1rem;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    padding: .75rem;
    text-decoration: none;
    transition: color 0.3s ease;
    border: 2px solid #5B8E7D;
    border-radius: 50px 20px;
    box-shadow: 3px 6px 5px #48685D;
    font-family: font-family: Tahoma, Geneva, sans-serif;
    
    &.active {
      font-weight: bold;
      background-color: #FAC99F;
    }

    &:hover {
      color: #8CB369;
    }
  }
`;

export default function Navbar() {
  
  const [activeTab, setActiveTab] = useState(window.location.pathname);

  return (
    <div>
      <NavContainer>
        <NavLinks>
          <ul>
            {['/', '/Events', '/Classifieds', '/Login', '/signup'].map(path => (
              <li key={path}>
                <Link 
                  to={path} 
                  onClick={() => setActiveTab(path)}
                  className={activeTab === path ? 'active' : ''}
                >
                  {path.replace('/', '') || 'Home'}
                </Link>
              </li>
            ))}
          </ul>
        </NavLinks>
      </NavContainer>
    </div>
  );
}



