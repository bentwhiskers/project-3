import React, { useState }from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
`;

const NavLinks = styled.div`
  a {
    color: black;
    margin-left: 1rem;
    padding: .5rem;
    text-decoration: none;
    transition: color 0.3s ease;
    border: 2px solid #8CB369;
    border-radius: 50px 20px;


    &.active {
      font-weight: bold;
      background-color: #F4E285;
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



