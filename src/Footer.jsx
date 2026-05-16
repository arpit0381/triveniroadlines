import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="m-footer">
      <div className="m-footer-container">
        <div className="m-footer-top">
          <div className="m-footer-brand">
            <Link to="/" onClick={scrollUp} style={{ textDecoration: 'none' }} className="mahindra-logo">
              <span className="logo-triveni">triveni</span>
              <span className="logo-roadlines">ROAD LINES</span>
            </Link>
            <p className="m-footer-desc">
              Your trusted partner for road transport and logistics solutions across India. Delivering reliability, speed, and safety since 2010.
            </p>
            <div className="m-footer-socials">
              <a href="https://wa.me/918853922538" target="_blank" rel="noopener noreferrer" className="m-social-icon whatsapp">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" />
              </a>
              <a href="https://instagram.com/triveniroadlines" target="_blank" rel="noopener noreferrer" className="m-social-icon instagram">
                <img src="/instagram-icon.svg" alt="Instagram" />
              </a>
              <a href="mailto:triveniroadlines.in@gmail.com" className="m-social-icon email">
                <img src="/gmail.svg" alt="Email" />
              </a>
            </div>
          </div>

          <div className="m-footer-links-group">
            <div className="m-footer-col">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/1" onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>Full Truck Load</Link></li>
                <li><Link to="/services/2" onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>Part Truck Load</Link></li>
                <li><Link to="/services/3" onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>ODC Transport</Link></li>
                <li><Link to="/services/4" onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>Warehousing</Link></li>
                <li><Link to="/services/5" onClick={scrollUp} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none' }}>Fleet Management</Link></li>
              </ul>
            </div>
          </div>

          <div className="m-footer-contact">
            <h4>Get in Touch</h4>
            <a href="https://maps.google.com/?q=A+19+Chakarpur+Mandi,+Kanpur" target="_blank" rel="noopener noreferrer" className="m-contact-item">
              <div className="m-contact-icon-box">
                <img src="/googleMaps.svg" alt="Map" />
              </div>
              <div className="m-contact-text">
                <strong>Head Office</strong>
                <p>A 19 Chakarpur Mandi,<br/>Kanpur</p>
              </div>
            </a>
            <a href="tel:+918853922538" className="m-contact-item">
              <div className="m-contact-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#phone-grad)" width="24" height="24">
                  <defs>
                    <linearGradient id="phone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="100%" stopColor="#dd2a7b" />
                    </linearGradient>
                  </defs>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="m-contact-text">
                <strong>Phone</strong>
                <p>+91 88539 22538</p>
              </div>
            </a>
            <a href="mailto:triveniroadlines.in@gmail.com" className="m-contact-item">
              <div className="m-contact-icon-box">
                <img src="/gmail.svg" alt="Email" />
              </div>
              <div className="m-contact-text">
                <strong>Email</strong>
                <p>triveniroadlines.in@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="m-footer-bottom">
          <p>© {new Date().getFullYear()} Triveni Road Lines. All rights reserved.</p>
          <div className="m-footer-legal">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
            <button>Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
