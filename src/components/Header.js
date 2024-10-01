import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header className="bg-dark text-white p-3">
    <div className="container">
      <h1 className="display-4">Chayan Shah's Portfolio</h1>
      <nav className="nav justify-content-center">
        <Link className="nav-link text-white" to="/about">About</Link>
        <Link className="nav-link text-white" to="/education">Education</Link>
        <Link className="nav-link text-white" to="/experience">Experience</Link>
        <Link className="nav-link text-white" to="/projects">Projects</Link>
        <Link className="nav-link text-white" to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;