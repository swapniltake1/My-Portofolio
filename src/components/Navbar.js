import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyle.css';

const Navbar = () => {
    
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const[color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* Main links of navbar */}
      <Link to='/swapniltake/'>
        <h1>PortoFolio</h1>
      </Link>

      {/* Other links of navbar */}
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/swapniltake/'>Home</Link>
        </li>

        <li>
          <Link to='/swapniltake/project'>Projects</Link>
        </li>

        <li>
          <Link to='/swapniltake/about'>About</Link>
        </li>

        <li>
          <Link to='/swapniltake/contact'>Contact</Link>
        </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
