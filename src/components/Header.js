import React from 'react';
import '../style.css';
import { Link, useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

  return (
    <nav className="nav nav-tabs nav-fill header-color">
      <a className="navbar-brand brand-text" href="index.html">
        <Link to="/" className={"nav-link active"}>
          Kevin Salamon
        </Link>
      </a>
      <a className="nav-item nav-link header-text" href="index.html">
        <Link to="/" className={"nav-link active"}>
          About Me
        </Link>
      </a>
      <a className="nav-item nav-link header-text" href="portfolio.html">
        <Link to="/portfolio" className={"nav-link active"}>
          My Portfolio
        </Link>
      </a>
    </nav>
  );
};

export default Header;
