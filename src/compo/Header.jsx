import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logoPort.webp"; // Replace with your actual path

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const TechIcon = ({ symbol, name, index }) => (
  <div className="tech-icon" title={name} style={{ animationDelay: `${index * 0.1}s` }}>
    <span>{symbol}</span>
  </div>
);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo that links to home */}
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Portfolio Logo"
              className="logo-img"
            />
            <div className="logo-text">
              <h5>Portfolio</h5>
            </div>
          </div>
        </div>
       
        {/* Hamburger menu for mobile */}
        <button 
          className={`menu-button ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/my-work" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/my-work' ? 'active' : ''}>My Work</Link></li>
            {/* <li><Link to="/blog" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li> */}
            {/* <li><Link to="/contactme" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/contactme' ? 'active' : ''}>Contact Me</Link></li> */}
          </ul>
        </nav>
      </div>
       {/* <TechIcon symbol="🎨" name="Figma" index={0} onClick={changeTheme}/> */}
    </header>

    
    </>
  );
}

export default Header;