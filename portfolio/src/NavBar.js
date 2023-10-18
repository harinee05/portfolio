// Navbar.js

import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href='/Home'>Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
