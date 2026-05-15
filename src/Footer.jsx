import React from 'react';
import './Footer.css';

export default function Footer({ navigateTo }) {
  return (
    <footer className="m-footer">
      <div className="m-footer-container">
        <div className="m-footer-top">
          <div className="m-footer-brand">
            <div className="mahindra-logo">
              <span className="logo-triveni">triveni</span>
              <span className="logo-roadlines">ROAD LINES</span>
            </div>
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
                {['HOME', 'SERVICES', 'FLEET', 'ABOUT', 'CONTACT'].map(p => (
                  <li key={p}>
                    <button onClick={() => navigateTo(p)}>
                      {p.charAt(0) + p.slice(1).toLowerCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-footer-col">
              <h4>Services</h4>
              <ul>
                <li><button onClick={() => navigateTo('SERVICE_1')}>Full Truck Load</button></li>
                <li><button onClick={() => navigateTo('SERVICE_2')}>Part Truck Load</button></li>
                <li><button onClick={() => navigateTo('SERVICE_3')}>ODC Transport</button></li>
                <li><button onClick={() => navigateTo('SERVICE_4')}>Warehousing</button></li>
                <li><button onClick={() => navigateTo('SERVICE_5')}>Fleet Management</button></li>
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
