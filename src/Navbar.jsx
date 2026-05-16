import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`m-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="m-navbar-container">
        <Link to="/" className="m-navbar-brand" onClick={closeMenu} style={{ textDecoration: 'none' }}>
          <div className="mahindra-logo">
            <span className="logo-triveni">triveni</span>
            <span className="logo-roadlines">ROAD LINES</span>
          </div>
        </Link>

        <div className={`m-navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`m-nav-link ${location.pathname === link.path ? 'active' : ''}`} 
              onClick={closeMenu}
              style={{ textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="m-nav-cta mobile-only" onClick={closeMenu} style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            Book Now
          </Link>
        </div>

        <div className="m-navbar-actions">
          <Link to="/contact" className="m-nav-cta desktop-only" onClick={closeMenu} style={{ textDecoration: 'none' }}>
            Book Now
          </Link>
          <button 
            className="m-theme-toggle" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button 
            className={`m-hamburger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
