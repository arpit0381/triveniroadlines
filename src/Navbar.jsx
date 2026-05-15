import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ page, setPage, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navigateTo = (p) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
  };

  const navLinks = ['HOME', 'SERVICES', 'FLEET', 'ABOUT', 'CONTACT'];

  return (
    <nav className={`m-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="m-navbar-container">
        <div className="m-navbar-brand" onClick={() => navigateTo('HOME')}>
          <div className="mahindra-logo">
            <span className="logo-triveni">triveni</span>
            <span className="logo-roadlines">ROAD LINES</span>
          </div>
        </div>

        <div className={`m-navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((p) => (
            <button 
              key={p} 
              className={`m-nav-link ${page === p ? 'active' : ''}`} 
              onClick={() => navigateTo(p)}
            >
              {p.charAt(0) + p.slice(1).toLowerCase()}
            </button>
          ))}
          <button className="m-nav-cta mobile-only" onClick={() => navigateTo('CONTACT')}>
            Book Now
          </button>
        </div>

        <div className="m-navbar-actions">
          <button className="m-nav-cta desktop-only" onClick={() => navigateTo('CONTACT')}>
            Book Now
          </button>
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
