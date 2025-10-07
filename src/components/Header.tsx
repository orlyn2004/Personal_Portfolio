import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
       
      <div className="logo">Orlyn <span className="highlight-name">Janilyn</span></div>
      <nav className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;