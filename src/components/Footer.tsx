import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <p className="footer-text">
        &copy; {currentYear} Orlyn and Janilyn All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;