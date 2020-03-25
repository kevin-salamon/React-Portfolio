import React from 'react';
import '../style.css';
import { Link } from "react-router-dom";

function Header() {

  return (
    <nav className="nav nav-tabs nav-fill header-color">
        <Link to="/" className={"navbar-brand brand-text"}>
          Kevin Salamon
        </Link>
        <Link to="/" className={"nav-item nav-link header-text"}>
          About Me
        </Link>
        <Link to="/portfolio" className={"nav-item nav-link header-text"}>
          My Portfolio
        </Link>
    </nav>
  );
};

export default Header;
