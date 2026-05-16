import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
import logo from './assets/logo.png';

const servicesData = [
  { id: 1, icon: '🚛', title: 'Full Truck Load (FTL)', desc: 'Dedicated trucks for large shipments across India. Door-to-door delivery with real-time tracking and guaranteed timelines.' },
  { id: 2, icon: '📦', title: 'Part Truck Load (PTL)', desc: 'Cost-effective shared trucking for smaller consignments. Consolidated loads with scheduled departures on all major routes.' },
  { id: 3, icon: '🏗️', title: 'ODC Transport', desc: 'Over Dimensional Cargo handled with specialized trailers, permits, and pilot vehicles for heavy machinery & industrial equipment.' },
  { id: 4, icon: '🏭', title: 'Warehousing', desc: 'Secure warehousing facilities at key locations with inventory management, cross-docking, and distribution support.' },
  { id: 5, icon: '📋', title: 'Fleet Management', desc: 'End-to-end fleet solutions including vehicle maintenance, driver management, fuel monitoring, and route optimization.' },
  { id: 6, icon: '🌐', title: 'Pan-India Network', desc: 'Extensive branch network covering 25+ states with dedicated regional teams for seamless last-mile delivery.' },
];

const fleetData = [
  { id: 1, emoji: '🚛', name: 'Tata Prima 4928', type: 'Heavy Duty Truck', specs: ['28 Ton', 'All India', 'GPS Enabled'] },
  { id: 2, emoji: '🚚', name: 'Ashok Leyland 3520', type: 'Medium Duty Truck', specs: ['20 Ton', 'Regional', 'GPS Enabled'] },
  { id: 3, emoji: '🛻', name: 'Eicher Pro 3019', type: 'Light Commercial', specs: ['10 Ton', 'City Routes', 'Fast Delivery'] },
  { id: 4, emoji: '🚜', name: 'Multi-Axle Trailer', type: 'ODC Specialist', specs: ['50+ Ton', 'ODC Permit', 'Pilot Vehicle'] },
  { id: 5, emoji: '📦', name: 'Container Carrier', type: '20ft / 40ft Containers', specs: ['20-30 Ton', 'Port Service', 'Sealed'] },
  { id: 6, emoji: '🧊', name: 'Refrigerated Van', type: 'Cold Chain Logistics', specs: ['8 Ton', 'Temp Control', 'Perishables'] },
];

const routes = [
  'Kanpur → Mumbai', 'Kanpur → Kolkata', 'Kanpur → Chennai', 'Kanpur → Bangalore',
  'Kanpur → Ahmedabad', 'Kanpur → Patna', 'Kanpur → Pune', 'Kanpur → Kochi',
  'Kanpur → Jammu', 'Kanpur → Nagpur', 'Kanpur → Siliguri', 'Kanpur → Rajkot',
];


function LoadingSplash({ visible }) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setShouldRender(false), 600);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div id="loading-splash" className={!visible ? 'is-done' : ''} aria-hidden="true" role="status" aria-label="Loading">
      <div className="loader">
        <div className="truckWrapper">
          <div className="truckBody">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93" className="trucksvg">
              <path strokeWidth="3" stroke="#282828" fill="#F83D3D" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
              <path strokeWidth="3" stroke="#282828" fill="#7D7C7C" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
              <path strokeWidth="2" stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
              <rect strokeWidth="2" stroke="#282828" fill="#FFFCAB" rx="1" height="7" width="5" y="63" x="187" />
              <rect strokeWidth="2" stroke="#282828" fill="#282828" rx="1" height="11" width="4" y="81" x="193" />
              <rect strokeWidth="3" stroke="#282828" fill="#DFDFDF" rx="2.5" height="90" width="121" y="1.5" x="6.5" />
              <rect strokeWidth="2" stroke="#282828" fill="#DFDFDF" rx="2" height="4" width="6" y="84" x="1" />
            </svg>
          </div>
          <div className="truckTires">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth="3" stroke="#282828" fill="#282828" r="13.5" cy="15" cx="15" />
              <circle fill="#DFDFDF" r="7" cy="15" cx="15" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth="3" stroke="#282828" fill="#282828" r="13.5" cy="15" cx="15" />
              <circle fill="#DFDFDF" r="7" cy="15" cx="15" />
            </svg>
          </div>
          <div className="road"></div>
          <svg xmlSpace="preserve" viewBox="0 0 453.459 453.459" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000" className="lampPost">
            <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993 c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514 c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16 c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914 h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75 v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795 V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017 h78.747C231.693,100.736,232.77,106.162,232.77,111.694z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [page]);

  const navigateTo = (p) => setPage(p);

  return (
    <>
      <LoadingSplash visible={loading} />
      {/* Navbar */}
      <Navbar page={page} setPage={setPage} theme={theme} setTheme={setTheme} />

      <main>
        {page === 'HOME' && <HomePage navigateTo={navigateTo} />}
        {page === 'SERVICES' && <ServicesPage navigateTo={navigateTo} />}
        {page === 'FLEET' && <FleetPage />}
        {page === 'ABOUT' && <AboutPage navigateTo={navigateTo} />}
        {page === 'CONTACT' && <ContactPage />}
        {page.startsWith('SERVICE_') && <ServiceDetailPage service={servicesData.find(s => `SERVICE_${s.id}` === page)} navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </>
  );
}

/* ===================== HOME PAGE ===================== */
function HomePage({ navigateTo }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-tag">Trusted Transport Partner</div>
            <h1>Moving India's Cargo with <span className="highlight">Speed & Safety</span></h1>
            <p>Triveni Road Lines provides reliable road transport, fleet management, and logistics solutions across 25+ states. From single consignments to full fleet operations.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => navigateTo('CONTACT')}>Book Your Transport</button>
              <button className="btn-outline" onClick={() => navigateTo('FLEET')}>Explore Our Fleet</button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>500+</h3><p>Trucks</p></div>
              <div className="hero-stat"><h3>25+</h3><p>States</p></div>
              <div className="hero-stat"><h3>15+</h3><p>Years</p></div>
              <div className="hero-stat"><h3>10K+</h3><p>Deliveries/Month</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-desc">End-to-end transport and logistics solutions tailored for businesses of every scale.</p>
          </div>
          <div className="services-grid">
            {servicesData.slice(0, 3).map((s, i) => (
              <div key={s.id} className={`service-card fade-up d${i + 1}`} onClick={() => navigateTo(`SERVICE_${s.id}`)} style={{ cursor: 'pointer' }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn-outline" onClick={() => navigateTo('SERVICES')}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Why Triveni</div>
            <h2 className="section-title">Why Businesses Trust Us</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '⏱️', title: 'On-Time Delivery', desc: '98.5% on-time delivery rate across all routes nationwide.' },
              { icon: '📡', title: 'Live GPS Tracking', desc: 'Real-time vehicle tracking with instant status updates.' },
              { icon: '🛡️', title: 'Cargo Insurance', desc: 'Full transit insurance coverage for complete peace of mind.' },
              { icon: '💰', title: 'Best Rates', desc: 'Competitive pricing with transparent billing, no hidden charges.' },
            ].map((w, i) => (
              <div key={i} className={`why-card fade-up d${i + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Coverage</div>
            <h2 className="section-title">Our Major Routes</h2>
            <p className="section-desc">Pan-India road network connecting every major industrial hub and metro city.</p>
          </div>
          <div className="route-tags fade-up d2">
            {routes.map((r, i) => <span key={i} className="route-tag">{r}</span>)}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Clientele</div>
            <h2 className="section-title">Trusted by Leading Brands</h2>
            <p className="section-desc">From FMCG to heavy industries — businesses across sectors rely on Triveni Road Lines for their logistics.</p>
          </div>
          <div className="why-grid fade-up d1">
            {[
              { icon: '🏭', title: 'Manufacturing', desc: 'Steel, cement, and machinery transport with ODC capability.' },
              { icon: '🛒', title: 'FMCG & Retail', desc: 'Daily dispatches for consumer goods and retail chains.' },
              { icon: '🏗️', title: 'Infrastructure', desc: 'Project cargo for construction and engineering firms.' },
              { icon: '🌾', title: 'Agriculture', desc: 'Cold chain and bulk transport for agri commodities.' },
            ].map((c, i) => (
              <div key={i} className={`why-card fade-up d${i + 1}`}>
                <div className="why-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== SERVICES PAGE ===================== */
function ServicesPage({ navigateTo }) {
  return (
    <>
      <div className="about-hero bg-services-custom">
        <div className="glass-hero-content fade-up">
          <h1>Our Services</h1>
          <p className="d1">Comprehensive transport and logistics solutions built for reliability and scale.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((s, i) => (
              <div key={s.id} className={`service-card fade-up d${(i % 3) + 1}`} onClick={() => navigateTo(`SERVICE_${s.id}`)} style={{ cursor: 'pointer' }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--navy-light)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Process</div>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '📞', title: '1. Request Quote', desc: 'Share your pickup, drop, and cargo details with our team.' },
              { icon: '✅', title: '2. Get Confirmation', desc: 'Receive competitive pricing and vehicle assignment within hours.' },
              { icon: '🚛', title: '3. Pickup & Transit', desc: 'Our driver picks up cargo and you track it live via GPS.' },
              { icon: '📦', title: '4. Safe Delivery', desc: 'Cargo delivered on time with signed POD and digital receipt.' },
            ].map((s, i) => (
              <div key={i} className={`why-card fade-up d${i + 1}`}>
                <div className="why-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== FLEET PAGE ===================== */
function FleetPage() {
  return (
    <>
      <div className="about-hero bg-fleet">
        <h1 className="fade-up">Our Fleet</h1>
        <p className="fade-up d1">A diverse range of well-maintained vehicles ready for any cargo requirement.</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="fleet-grid">
            {fleetData.map((v, i) => (
              <div key={v.id} className={`fleet-card fade-up d${(i % 3) + 1}`}>
                <div className="fleet-img">{v.emoji}</div>
                <div className="fleet-info">
                  <h3>{v.name}</h3>
                  <p>{v.type}</p>
                  <div className="fleet-specs">
                    {v.specs.map((s, j) => <span key={j} className="fleet-spec">{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


/* ===================== ABOUT PAGE ===================== */
function AboutPage({ navigateTo }) {
  return (
    <>
      <div className="about-hero bg-about">
        <h1 className="fade-up">About Triveni Road Lines</h1>
        <p className="fade-up d1">Decades of trust, thousands of deliveries, one commitment — your cargo, on time, every time.</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="stats-grid fade-up">
            {[
              { val: '500+', label: 'Owned Trucks' },
              { val: '15+', label: 'Years Experience' },
              { val: '25+', label: 'States Covered' },
              { val: '98.5%', label: 'On-Time Rate' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <h3>{s.val}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          <div className="about-content">
            <div className="about-text fade-up">
              <h2>Built on Trust, Driven by Commitment</h2>
              <p>Triveni Road Lines was founded in 2010 with a small fleet of 5 trucks operating on the Kanpur-Mumbai corridor. Today, we are one of North India's fastest-growing road transport companies with a fleet of 500+ vehicles covering 25+ states.</p>
              <p>Our mission is to deliver cargo safely, on time, and at competitive rates — while building long-term partnerships with businesses who depend on us.</p>
              <ul className="values-list">
                <li>On-time delivery with live GPS tracking</li>
                <li>Fully insured cargo with damage-free guarantee</li>
                <li>Dedicated fleet managers for key accounts</li>
                <li>24/7 control room for real-time support</li>
                <li>Transparent billing with no hidden costs</li>
              </ul>
            </div>
            <div className="why-grid fade-up d2" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'Deliver every consignment safely, on time, at the best rate.' },
                { icon: '👁️', title: 'Our Vision', desc: 'Become India\'s most trusted road logistics partner by 2030.' },
                { icon: '🤝', title: 'Our Values', desc: 'Integrity, reliability, customer-first approach in every load.' },
                { icon: '🏆', title: 'Our Promise', desc: 'Your cargo is our responsibility from pickup to delivery.' },
              ].map((v, i) => (
                <div key={i} className="why-card">
                  <div className="why-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== CONTACT / QUOTE PAGE ===================== */
function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', pickup: '', drop: '', cargo: '', weight: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.pickup && form.drop) setSubmitted(true);
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <div className="about-hero bg-contact">
        <h1 className="fade-up">Book Your Shipment</h1>
        <p className="fade-up d1">Tell us your pickup & drop details — our team will connect with you within 2 hours.</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Contact Information</h3>

              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div><h4>Head Office</h4><p>A 19 chakarpur mandi kanpur</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div><h4>Phone</h4><p>+91 88539 22538 (24/7 Control Room)</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div><h4>Email</h4><p>triveniroadlines.in@gmail.com</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">⏰</div>
                <div><h4>Working Hours</h4><p>Mon–Sat: 8:00 AM – 9:00 PM | Sun: Emergency Only</p></div>
              </div>
            </div>

            <div className="quote-form fade-up d2">
              {submitted ? (
                <div className="success-msg">
                  <div className="icon">✅</div>
                  <h3>Enquiry Sent Successfully!</h3>
                  <p>Thank you, {form.name}. Our logistics team will call you on {form.phone} within 2 hours with the best rates.</p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', pickup: '', drop: '', cargo: '', weight: '', message: '' }); }}>Send Another Enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Tell Us Your Requirement</h3>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name *</label><input className="form-input" placeholder="Your name" value={form.name} onChange={update('name')} required /></div>
                    <div className="form-group"><label>Phone *</label><input className="form-input" placeholder="+91..." value={form.phone} onChange={update('phone')} required /></div>
                  </div>
                  <div className="form-group"><label>Email</label><input className="form-input" type="email" placeholder="email@example.com" value={form.email} onChange={update('email')} /></div>
                  <div className="form-row">
                    <div className="form-group"><label>Pickup City *</label><input className="form-input" placeholder="e.g. Kanpur" value={form.pickup} onChange={update('pickup')} required /></div>
                    <div className="form-group"><label>Drop City *</label><input className="form-input" placeholder="e.g. Mumbai" value={form.drop} onChange={update('drop')} required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Cargo Type</label><input className="form-input" placeholder="e.g. Machinery" value={form.cargo} onChange={update('cargo')} /></div>
                    <div className="form-group"><label>Weight (Approx)</label><input className="form-input" placeholder="e.g. 10 Ton" value={form.weight} onChange={update('weight')} /></div>
                  </div>
                  <div className="form-group"><label>Additional Details</label><textarea className="form-input" rows="3" placeholder="Any special requirements..." value={form.message} onChange={update('message')}></textarea></div>
                  <button type="submit" className="form-submit">Send Enquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== SERVICE DETAIL PAGE ===================== */
function ServiceDetailPage({ service, navigateTo }) {
  if (!service) return null;
  return (
    <>
      <div className="about-hero">
        <h1 className="fade-up">{service.title}</h1>
        <p className="fade-up d1">{service.desc}</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text fade-up">
              <h2>Expertise in {service.title}</h2>
              <p>Triveni Roadlines specializes in delivering top-tier {service.title.toLowerCase()} services tailored to meet the dynamic needs of modern businesses. With our extensive network and dedicated infrastructure, we ensure your cargo is handled with the utmost care and professionalism.</p>
              <p>Our commitment to reliability, speed, and safety makes us the preferred logistics partner. Whether it's a single consignment or a complex supply chain requirement, our team is equipped to deliver exceptional results.</p>
              <ul className="values-list">
                <li>End-to-end operational transparency</li>
                <li>Highly trained professionals handling your cargo</li>
                <li>24/7 dedicated customer support</li>
                <li>Cost-effective and timely execution</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <button className="btn-primary" onClick={() => navigateTo('CONTACT')}>Book This Service</button>
              </div>
            </div>
            <div className="why-grid fade-up d2" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="why-card">
                <div className="why-icon">⚡</div>
                <h4>Fast Execution</h4>
                <p>Streamlined processes for quick turnaround times.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🛡️</div>
                <h4>Secure Handling</h4>
                <p>Advanced safety measures to protect your assets.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">📊</div>
                <h4>Live Tracking</h4>
                <p>Real-time updates on your service status.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🤝</div>
                <h4>Dedicated Support</h4>
                <p>A single point of contact for all your queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
