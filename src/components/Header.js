import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-3">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Guide Plus Logo" height="40" className="me-2" />
        Guide Plus
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
