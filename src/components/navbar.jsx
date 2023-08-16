import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = {
    marginRight: '20px',
  };

  return (
   <div>

    <ul>
    <li><Link to = '/'>Home</Link></li>
    <li><Link to = '/Events'>Events</Link></li>
    <li><Link to = '/Classifieds'>Classifieds</Link></li>
    <li><Link to = '/Login'>Login</Link></li>
    </ul>

   </div>
  );
}


