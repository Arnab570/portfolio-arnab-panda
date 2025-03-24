import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>Arnab Panda</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
