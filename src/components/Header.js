import React from 'react';
import '../style.css';
import { Link } from "react-router-dom";

function Header() {

  return (
    <nav className="nav header-custom">
        <div className="brand-text">
          Kevin Salamon
        </div>
        <div className="subbrand-box">
          <div className="subbrand-text">
            Web Developer / Software Engineer
          </div>
        </div>
        <Link to="/" className="link-box">
          <button className="header-button">About Me</button>
        </Link>
        <Link to="/portfolio" className="link-box">
          <button className="header-button">Portfolio</button>
        </Link>
    </nav>
  );
};

export default Header;
