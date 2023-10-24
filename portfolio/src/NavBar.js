// Navbar.js

import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href='/Home' className='nav-item'>Home</a></li>
        <li><a href="/about" className='nav-item'>About</a></li>
        <li><a href="/contact" className='nav-item'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
