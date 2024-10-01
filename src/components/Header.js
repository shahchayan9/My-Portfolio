import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="bg-dark text-white p-3">
      <div className="container text-center">
        <h1 className="display-4">Chayan Shah's Portfolio</h1>
        <nav className="nav justify-content-center">
          <Link
            className={`nav-link text-white ${activeLink === '/about' ? 'active' : ''}`}
            to="/about"
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link
            className={`nav-link text-white ${activeLink === '/education' ? 'active' : ''}`}
            to="/education"
            onClick={() => handleLinkClick('/education')}
          >
            Education
          </Link>
          <Link
            className={`nav-link text-white ${activeLink === '/experience' ? 'active' : ''}`}
            to="/experience"
            onClick={() => handleLinkClick('/experience')}
          >
            Experience
          </Link>
          <Link
            className={`nav-link text-white ${activeLink === '/projects' ? 'active' : ''}`}
            to="/projects"
            onClick={() => handleLinkClick('/projects')}
          >
            Projects
          </Link>
          <Link
            className={`nav-link text-white ${activeLink === '/achievements' ? 'active' : ''}`}
            to="/achievements"
            onClick={() => handleLinkClick('/achievements')}
          >
            Achievements
          </Link>
          <Link
            className={`nav-link text-white ${activeLink === '/contact' ? 'active' : ''}`}
            to="/contact"
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;