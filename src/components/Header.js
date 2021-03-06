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
        <a href="https://drive.google.com/file/d/1jxfSNhtOc89CNT5d3EprmumdtYu6GEJB/view?usp=sharing" className="link-box" target="#">
          <button className="header-button" style={{marginLeft: "1%", marginRight: "1%"}}>My Resume</button>
        </a>
    </nav>
  );
};

export default Header;
