import {Link   } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <Link to='/'   >   <li> Home </li>  </Link>
    <Link to='/aboutUs'>  <li> About Us </li></Link>
     <Link to='/profiles' > <li> profiles </li></Link>

      <button className="login">Login</button>
    </nav>
  );
}

export default Navbar;
