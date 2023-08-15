import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = {
    marginRight: '20px',
  };

  return (
    <div>
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/Events" style={linkStyle}>Events</Link></li>
        <li><Link to="/Spotlight" style={linkStyle}>Spotlight</Link></li>
        <li><Link to="/Login" style={linkStyle}>Login</Link></li>
        <li><Link to="/Signup" style={linkStyle}>Sign up</Link></li>
      </ul>
    </div>
  );
}


