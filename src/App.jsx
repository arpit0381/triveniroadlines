import React, { useState, useEffect } from 'react';

const commoditiesData = [
  { id: 1, name: "Fresh Spinach", category: "Leafy Greens", emoji: "🥬", badge: "Daily Arrival", desc: "Sourced directly from local farms every morning. Available in wholesale quantities for retailers." },
  { id: 2, name: "Premium Carrots", category: "Root Veggies", emoji: "🥕", badge: "High Demand", desc: "Premium quality carrots for bulk buyers, hotels, and supermarkets." },
  { id: 3, name: "Green Broccoli", category: "Exotic Veggies", emoji: "🥦", badge: "Seasonal", desc: "Fresh exotic vegetables available for commercial kitchens and fine dining restaurants." },
  { id: 4, name: "Juicy Tomatoes", category: "Fruits & Veggies", emoji: "🍅", badge: "Top Traded", desc: "High-grade tomatoes supplied in crates. Consistent bulk supply guaranteed." },
  { id: 5, name: "Golden Potatoes", category: "Roots & Bulbs", emoji: "🥔", badge: "All Season", desc: "Cold storage and fresh potatoes available in standard 50kg bags." },
  { id: 6, name: "Sweet Green Peas", category: "Legumes", emoji: "🫛", badge: "Seasonal", desc: "Fresh green peas sourced from top growing regions during the season." },
  { id: 7, name: "Mixed Bell Peppers", category: "Exotic Veggies", emoji: "🫑", badge: "High Demand", desc: "Vibrant mix of red, yellow, and green peppers for wholesale trade." },
  { id: 8, name: "Red Onions", category: "Roots & Bulbs", emoji: "🧅", badge: "Top Traded", desc: "Premium varieties available in bulk packaging. Perfect for long-term supply." },
  { id: 9, name: "Fresh Cabbage", category: "Leafy Greens", emoji: "🥬", badge: "All Season", desc: "Firm and crisp green cabbage heads available for daily bulk dispatch." },
  { id: 10, name: "Purple Eggplant", category: "Fruits & Veggies", emoji: "🍆", badge: "Daily Arrival", desc: "Glossy purple eggplants supplied directly from trusted farmers." },
  { id: 11, name: "White Garlic", category: "Roots & Bulbs", emoji: "🧄", badge: "Top Traded", desc: "Aromatic and pungent garlic bulbs. Available for bulk purchase all year." },
  { id: 12, name: "Button Mushrooms", category: "Exotic Veggies", emoji: "🍄", badge: "High Demand", desc: "Earthy and tender button mushrooms, packed carefully for wholesale distribution." }
];

const categories = ["Leafy Greens", "Root Veggies", "Exotic Veggies", "Fruits & Veggies", "Roots & Bulbs", "Legumes"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@400;700;900&display=swap');

:root {
  --green-dark: #1a472a;
  --green-mid: #2d6a4f;
  --green-fresh: #40916c;
  --green-pale: #e8f5e9;
  --cream: #fef9f0;
  --orange: #e07b39;
  --text-dark: #1a2e1a;
  --text-muted: #5e7a5e;
  --white: #ffffff;
  --shadow-sm: 0 4px 12px rgba(26, 71, 42, 0.05);
  --shadow-md: 0 8px 24px rgba(26, 71, 42, 0.08);
  --radius-md: 12px;
  --radius-lg: 24px;
  --transition: all 0.3s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Nunito', sans-serif; background-color: var(--cream); color: var(--text-dark); overflow-x: hidden; }
h1, h2, h3, h4, .playfair { font-family: 'Playfair Display', serif; }

/* Utilities */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.flex { display: flex; } .flex-col { display: flex; flex-direction: column; }
.items-center { align-items: center; } .justify-between { justify-content: space-between; } .justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; } .gap-4 { gap: 1rem; } .gap-6 { gap: 1.5rem; } .gap-8 { gap: 2rem; }
.grid { display: grid; } .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); } .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.text-center { text-align: center; }
.w-full { width: 100%; } .h-full { height: 100%; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; } .py-8 { padding-top: 2rem; padding-bottom: 2rem; } .py-16 { padding-top: 4rem; padding-bottom: 4rem; } .py-20 { padding-top: 6rem; padding-bottom: 6rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; } .px-4 { padding-left: 1rem; padding-right: 1rem; } .p-6 { padding: 1.5rem; } .p-8 { padding: 2rem; } .p-10 { padding: 2.5rem; }
.mb-2 { margin-bottom: 0.5rem; } .mb-4 { margin-bottom: 1rem; } .mb-6 { margin-bottom: 1.5rem; } .mb-8 { margin-bottom: 2rem; }
.text-sm { font-size: 0.875rem; } .text-lg { font-size: 1.125rem; } .text-xl { font-size: 1.25rem; } .text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; } .text-4xl { font-size: 2.25rem; } .text-5xl { font-size: 3rem; } .text-6xl { font-size: 4rem; }
.font-bold { font-weight: 700; } .font-black { font-weight: 900; }
.text-muted { color: var(--text-muted); } .text-green { color: var(--green-mid); }
.bg-white { background-color: var(--white); } .bg-green-pale { background-color: var(--green-pale); }
.rounded-lg { border-radius: var(--radius-lg); } .rounded-md { border-radius: var(--radius-md); } .rounded-full { border-radius: 999px; }
.shadow-sm { box-shadow: var(--shadow-sm); } .shadow-md { box-shadow: var(--shadow-md); }
.cursor-pointer { cursor: pointer; }

/* Buttons & Inputs */
button { border: none; background: none; font-family: 'Nunito', sans-serif; transition: var(--transition); cursor: pointer; }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 2rem; border-radius: var(--radius-full); font-weight: 700; font-size: 1.1rem; gap: 0.5rem; transition: var(--transition); }
.btn-primary { background-color: var(--green-dark); color: var(--white); }
.btn-primary:hover { background-color: var(--green-mid); transform: translateY(-3px); box-shadow: var(--shadow-md); }
.btn-outline { border: 2px solid var(--green-mid); color: var(--green-dark); }
.btn-outline:hover { background-color: var(--green-pale); transform: translateY(-3px); }
input:not([type="radio"]), select, textarea { width: 100%; padding: 1rem; border: 1px solid #c2d1c2; border-radius: var(--radius-md); font-family: 'Nunito', sans-serif; background-color: var(--white); font-size: 1rem; transition: var(--transition); }
input:not([type="radio"]):focus, select:focus, textarea:focus { outline: none; border-color: var(--green-mid); box-shadow: 0 0 0 3px rgba(64, 145, 108, 0.2); }
input[type="radio"] { cursor: pointer; accent-color: var(--green-dark); width: 1.2rem; height: 1.2rem; }

/* Animations */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.fade-in-up { animation: fadeInUp 0.6s ease forwards; opacity: 0; }
.delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; } .delay-3 { animation-delay: 0.3s; }

/* Navbar */
.navbar { position: sticky; top: 0; z-index: 100; background-color: rgba(254, 249, 240, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(26, 71, 42, 0.1); }
.nav-logo { display: flex; align-items: center; gap: 0.75rem; color: var(--green-dark); }
.nav-links { display: flex; gap: 2.5rem; }
.nav-link { font-weight: 700; color: var(--text-dark); position: relative; padding: 0.5rem 0; font-size: 1.1rem; }
.nav-link:hover, .nav-link.active { color: var(--green-mid); }
.nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 3px; background-color: var(--green-mid); transition: var(--transition); border-radius: 3px; }
.nav-link:hover::after, .nav-link.active::after { width: 100%; }

/* Hero Section */
.hero { min-height: 85vh; display: flex; align-items: center; position: relative; overflow: hidden; }
.hero-content { max-width: 650px; z-index: 10; position: relative; }
.hero-tag { display: inline-block; background-color: var(--green-pale); color: var(--green-dark); padding: 0.5rem 1.25rem; border-radius: var(--radius-full); font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.5rem; }
.hero-bg-shape { position: absolute; right: -5%; top: -10%; width: 55%; height: 120%; background-color: var(--green-pale); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; z-index: 0; opacity: 0.6; }
.hero-emoji-grid { position: absolute; right: 5%; top: 50%; transform: translateY(-50%); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; z-index: 10; }
.hero-floating-box { background: var(--white); padding: 2rem; border-radius: var(--radius-lg); font-size: 4rem; box-shadow: var(--shadow-md); display: flex; align-items: center; justify-content: center; }

/* Cards */
.commodity-card { background: var(--white); border-radius: var(--radius-lg); padding: 2rem; text-align: center; box-shadow: var(--shadow-sm); transition: var(--transition); border: 1px solid rgba(26, 71, 42, 0.05); display: flex; flex-direction: column; align-items: center; }
.commodity-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-md); border-color: var(--green-pale); }
.emoji-circle { width: 100px; height: 100px; background-color: var(--green-pale); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; margin-bottom: 1.5rem; }
.badge { display: inline-block; padding: 0.35rem 1rem; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; }
.badge-orange { background-color: rgba(224, 123, 57, 0.1); color: var(--orange); }
.badge-green { background-color: var(--green-pale); color: var(--green-dark); }

/* Feature Section */
.feature-box { background: var(--white); padding: 3rem 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); transition: var(--transition); text-align: center; }
.feature-box:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.feature-icon { font-size: 3rem; margin-bottom: 1.5rem; }

/* Footer */
footer { background-color: var(--green-dark); color: var(--white); padding: 4rem 0 2rem; margin-top: 4rem; }
.footer-link { color: rgba(255,255,255,0.7); display: block; margin-bottom: 0.75rem; text-decoration: none; font-weight: 600; transition: var(--transition); }
.footer-link:hover { color: var(--white); }

/* Responsive */
@media (max-width: 992px) {
  .hero-bg-shape, .hero-emoji-grid { display: none; }
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  .hero { text-align: center; } .hero-content { margin: 0 auto; }
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .grid-cols-3 { grid-template-columns: repeat(1, 1fr); }
  .grid-cols-2 { grid-template-columns: repeat(1, 1fr); }
  .text-6xl { font-size: 3rem; }
}
`;

export default function App() {
  const [page, setPage] = useState('HOME');
  const [enquiryCommodity, setEnquiryCommodity] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const navigateTo = (newPage) => {
    setPage(newPage);
  };

  const handleEnquire = (commodityName) => {
    setEnquiryCommodity(commodityName);
    navigateTo('CONTACT');
  };

  return (
    <>
      <style>{css}</style>
      
      {/* Navbar */}
      <nav className="navbar py-4">
        <div className="container flex items-center justify-between">
          <div className="nav-logo cursor-pointer" onClick={() => navigateTo('HOME')}>
            <span style={{ fontSize: '2.5rem' }}>🌾</span>
            <div>
              <div className="playfair font-black text-2xl" style={{ lineHeight: 1 }}>Triveniroadlines.in</div>
              <span className="text-sm font-bold text-muted uppercase tracking-widest mt-1 block">Wholesale Aadhti</span>
            </div>
          </div>
          
          <div className="nav-links">
            <button className={`nav-link ${page === 'HOME' ? 'active' : ''}`} onClick={() => navigateTo('HOME')}>Home</button>
            <button className={`nav-link ${page === 'COMMODITIES' ? 'active' : ''}`} onClick={() => navigateTo('COMMODITIES')}>Commodities</button>
            <button className={`nav-link ${page === 'ABOUT' ? 'active' : ''}`} onClick={() => navigateTo('ABOUT')}>About Us</button>
            <button className={`nav-link ${page === 'CONTACT' ? 'active' : ''}`} onClick={() => navigateTo('CONTACT')}>Contact</button>
          </div>
          
          <div className="hidden md:block">
            <button className="btn btn-primary" onClick={() => navigateTo('CONTACT')}>Get Latest Rates</button>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '80vh' }}>
        {page === 'HOME' && <HomePage navigateTo={navigateTo} />}
        {page === 'COMMODITIES' && <CommoditiesPage handleEnquire={handleEnquire} />}
        {page === 'ABOUT' && <AboutPage navigateTo={navigateTo} />}
        {page === 'CONTACT' && <ContactPage enquiryCommodity={enquiryCommodity} />}
      </main>

      {/* Footer */}
      <footer>
        <div className="container grid grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-3xl font-black playfair mb-4 text-green-pale">🌾 Triveniroadlines.in</div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">Your trusted wholesale commission agent (Aadhti). Connecting farmers and bulk buyers with transparency, best rates, and seamless trade.</p>
          </div>
          <div>
            <h4 className="font-bold playfair text-xl mb-6 text-green-pale">Quick Links</h4>
            <span className="footer-link cursor-pointer" onClick={() => navigateTo('HOME')}>Home</span>
            <span className="footer-link cursor-pointer" onClick={() => navigateTo('COMMODITIES')}>Commodities</span>
            <span className="footer-link cursor-pointer" onClick={() => navigateTo('ABOUT')}>About Us</span>
            <span className="footer-link cursor-pointer" onClick={() => navigateTo('CONTACT')}>Contact Us</span>
          </div>
          <div>
            <h4 className="font-bold playfair text-xl mb-6 text-green-pale">Mandi Address</h4>
            <p className="opacity-80 mb-2">Shop No. 45, Block A</p>
            <p className="opacity-80 mb-2">Main Wholesale Sabzi Mandi</p>
            <p className="opacity-80 mb-4">Kanpur, UP 208001</p>
            <p className="font-bold">📞 +91 98765 43210</p>
          </div>
        </div>
        <div className="container pt-8 border-t border-white/20 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Triveniroadlines.in. All rights reserved.
        </div>
      </footer>
    </>
  );
}

// --- HOME PAGE ---
function HomePage({ navigateTo }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero container">
        <div className="hero-bg-shape"></div>
        <div className="hero-emoji-grid">
          <div className="hero-floating-box" style={{ transform: 'translateY(20px)' }}>🥔</div>
          <div className="hero-floating-box" style={{ transform: 'translateY(-20px)' }}>🧅</div>
          <div className="hero-floating-box" style={{ transform: 'translateY(-40px)' }}>🍅</div>
          <div className="hero-floating-box" style={{ transform: 'translateY(10px)' }}>🧄</div>
        </div>
        
        <div className="hero-content fade-in-up">
          <span className="hero-tag">Trusted Aadhti Since 2010</span>
          <h1 className="text-6xl font-black playfair mb-6" style={{ lineHeight: 1.15 }}>Bridging Farmers & Bulk Buyers.</h1>
          <p className="text-xl text-muted mb-10 leading-relaxed">
            We deal in wholesale quantities of fresh vegetables and roots. Ensuring the best market rates for farmers and consistent quality supply for vendors and hotels.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary" onClick={() => navigateTo('COMMODITIES')}>View Commodities</button>
            <button className="btn btn-outline" onClick={() => navigateTo('CONTACT')}>Enquire Rates</button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-green-pale py-20">
        <div className="container">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-black playfair mb-4">How We Operate in the Mandi</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">Transparency, speed, and reliability are the core of our wholesale trade.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="feature-box fade-in-up delay-1">
              <div className="feature-icon">🧑‍🌾</div>
              <h3 className="text-2xl font-bold playfair mb-4">For Farmers (Kisan)</h3>
              <p className="text-muted leading-relaxed mb-6">Bring your fresh harvest to our shop. We ensure your produce is auctioned properly to get you the highest possible mandi rate. Same-day transparent payments guaranteed.</p>
              <ul className="text-left text-sm font-bold text-green-dark flex flex-col gap-2 mx-auto" style={{ maxWidth: '200px' }}>
                <li>✓ Best Market Rates</li>
                <li>✓ Instant Cash Payments</li>
                <li>✓ Honest Weighing</li>
              </ul>
            </div>
            
            <div className="feature-box fade-in-up delay-2">
              <div className="feature-icon">🛒</div>
              <h3 className="text-2xl font-bold playfair mb-4">For Bulk Buyers (Vyapari)</h3>
              <p className="text-muted leading-relaxed mb-6">Retailers, hoteliers, and wholesale vendors rely on us for daily fresh stock. We source directly from the finest local farms with consistent volume availability.</p>
              <ul className="text-left text-sm font-bold text-green-dark flex flex-col gap-2 mx-auto" style={{ maxWidth: '200px' }}>
                <li>✓ Bulk Quantity Supply</li>
                <li>✓ Quality Segregation</li>
                <li>✓ Daily Fresh Arrivals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Commodities Sneak Peek */}
      <section className="container py-20">
        <div className="flex justify-between items-end mb-12 fade-in-up">
          <div>
            <h2 className="text-4xl font-black playfair mb-2">Top Traded Commodities</h2>
            <p className="text-lg text-muted">A glimpse of our major daily wholesale items.</p>
          </div>
          <button className="btn btn-outline" onClick={() => navigateTo('COMMODITIES')}>View All →</button>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {commoditiesData.slice(0, 4).map((item, idx) => (
            <div key={item.id} className={`commodity-card fade-in-up delay-${idx%4}`}>
              <div className="emoji-circle">{item.emoji}</div>
              <span className={`badge ${idx%2===0 ? 'badge-orange' : 'badge-green'}`}>{item.badge}</span>
              <h3 className="text-xl font-bold playfair mb-2">{item.name}</h3>
              <p className="text-sm text-muted mb-6">{item.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- COMMODITIES PAGE ---
function CommoditiesPage({ handleEnquire }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData = activeCategory === 'All' 
    ? commoditiesData 
    : commoditiesData.filter(c => c.category === activeCategory);

  return (
    <div className="bg-white py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h1 className="text-5xl font-black playfair mb-6">Our Commodities</h1>
          <p className="text-lg text-muted">Explore the range of fresh agricultural produce we trade daily. We deal strictly in wholesale quantities (sacks/crates/tons).</p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-up delay-1">
          <button 
            className={`btn ${activeCategory === 'All' ? 'btn-primary' : 'bg-green-pale text-green-dark hover:bg-green-dark hover:text-white'}`}
            onClick={() => setActiveCategory('All')}
          >
            All Items
          </button>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'bg-green-pale text-green-dark hover:bg-green-dark hover:text-white'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commodities Grid */}
        <div className="grid grid-cols-3 gap-8">
          {filteredData.map((item, idx) => (
            <div key={item.id} className="commodity-card fade-in-up" style={{ animationDelay: `${(idx%3)*0.1}s` }}>
              <div className="emoji-circle">{item.emoji}</div>
              <span className={`badge ${item.badge === 'Top Traded' ? 'badge-orange' : 'badge-green'}`}>{item.badge}</span>
              <h3 className="text-2xl font-bold playfair mb-2">{item.name}</h3>
              <p className="text-sm font-bold text-green-dark mb-4">{item.category}</p>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{item.desc}</p>
              <button className="btn btn-outline w-full" onClick={() => handleEnquire(item.name)}>Enquire Today's Rate</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- ABOUT PAGE ---
function AboutPage({ navigateTo }) {
  return (
    <div>
      <div className="bg-green-dark text-white py-24 text-center">
        <h1 className="text-6xl font-black playfair mb-6">The Aadhti You Can Trust</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Decades of legacy in building fair and transparent trade networks between farmers and buyers.</p>
      </div>
      
      <div className="container py-20 grid grid-cols-2 gap-16 items-center">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold playfair mb-6">Our Legacy in the Mandi</h2>
          <p className="text-lg text-muted mb-4 leading-relaxed">
            Started by our ancestors, Triveniroadlines.in has been a prominent name in the wholesale vegetable market. We operate as a vital bridge in the agricultural supply chain.
          </p>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Our principle is simple: provide the fairest auction rates for the hardworking farmers while ensuring quality and bulk availability for the vendors who feed the city. Trust is our biggest commodity.
          </p>
          <button className="btn btn-primary" onClick={() => navigateTo('CONTACT')}>Visit Our Shop</button>
        </div>
        
        <div className="grid grid-cols-2 gap-6 fade-in-up delay-1">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-black playfair text-green-dark mb-2">500+</div>
            <div className="font-bold text-muted uppercase text-sm tracking-wider">Farmers Connected</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transform translate-y-6">
            <div className="text-5xl font-black playfair text-green-dark mb-2">15+</div>
            <div className="font-bold text-muted uppercase text-sm tracking-wider">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-black playfair text-green-dark mb-2">50+</div>
            <div className="font-bold text-muted uppercase text-sm tracking-wider">Daily Bulk Buyers</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transform translate-y-6">
            <div className="text-5xl font-black playfair text-green-dark mb-2">100%</div>
            <div className="font-bold text-muted uppercase text-sm tracking-wider">Transparent Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CONTACT PAGE ---
function ContactPage({ enquiryCommodity }) {
  const [form, setForm] = useState({ name: '', phone: '', userType: 'Bulk Buyer', message: enquiryCommodity ? `I would like to know today's wholesale rate and availability for ${enquiryCommodity}.` : '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
        <h1 className="text-5xl font-black playfair mb-6">Trade With Us</h1>
        <p className="text-lg text-muted">Whether you are a farmer looking to sell your harvest or a vendor looking for bulk supplies, we are here for you.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="fade-in-up delay-1">
          <h3 className="text-3xl font-bold playfair mb-8">Contact Details</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 flex gap-4 items-start">
            <div className="text-4xl">📍</div>
            <div>
              <h4 className="font-bold text-xl mb-2">Mandi Shop Address</h4>
              <p className="text-muted leading-relaxed">Shop No. 45, Block A<br/>Main Wholesale Sabzi Mandi<br/>Kanpur, Uttar Pradesh 208001</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 flex gap-4 items-center">
            <div className="text-4xl">📞</div>
            <div>
              <h4 className="font-bold text-xl mb-1">Phone Number</h4>
              <p className="text-muted">+91 98765 43210 <span className="text-sm">(Available 5 AM to 5 PM)</span></p>
            </div>
          </div>
          
          <div className="bg-green-pale border border-green-mid p-6 rounded-lg">
            <h4 className="font-bold text-green-dark mb-2">Mandi Timings</h4>
            <p className="text-sm text-green-dark font-bold">Morning Auctions: 5:00 AM - 10:00 AM</p>
            <p className="text-sm text-green-dark font-bold">General Trade: 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-md fade-in-up delay-2">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-3xl font-bold playfair mb-4">Request Received!</h3>
              <p className="text-muted mb-8">Thank you, {form.name}. Our team will call you shortly on {form.phone} with the required information.</p>
              <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({name:'', phone:'', userType:'Bulk Buyer', message:''}); }}>Send Another Enquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="text-3xl font-black playfair text-center mb-6">Enquire Rates / Trade</h3>
              
              <div className="px-2">
                <label className="block text-sm font-bold mb-2 text-muted">I am a...</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="userType" checked={form.userType === 'Farmer'} onChange={() => setForm({...form, userType: 'Farmer'})} /> Farmer (Kisan)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="userType" checked={form.userType === 'Bulk Buyer'} onChange={() => setForm({...form, userType: 'Bulk Buyer'})} /> Bulk Buyer (Vyapari)
                  </label>
                </div>
              </div>

              <div>
                <input type="text" placeholder="Full Name *" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
              </div>
              
              <div>
                <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} required />
              </div>
              
              <div>
                <textarea rows="4" placeholder="Message / Commodity you are looking for..." value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-4 text-lg mt-2">Send Enquiry</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
