import {Link} from 'react-router-dom'

const NavBar = () => {
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

export default NavBar;