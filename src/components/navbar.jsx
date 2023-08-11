import {Link} from 'react-router-dom'

export deafult function Navbar() {
  return (
   <div>

    <ul>
    <li><Link to = '/'>Home</Link></li>
    <li><Link to = '/Events'>Events</Link></li>
    <li><Link to = '/Spotlight'>Spotlight</Link></li>
    <li><Link to = '/Login'>Login</Link></li>
    </ul>

   </div>
  );
};

