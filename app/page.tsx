'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const myNumber = "254704770170"; 
  
  // WhatsApp Deep Links
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I need a professional CCTV quote for my property.");
  const waCryptoPay = encodeURIComponent("Hi SecureLink, I would like to pay for my installation using Stablecoins (USDT/USDC). Please send the wallet address.");

  const kits = [
    { cameras: 3, price: "25,000", feat: "Home Starter" },
    { cameras: 4, price: "32,000", feat: "Full Residence" },
    { cameras: 6, price: "45,000", feat: "Business Basic" },
    { cameras: 8, price: "58,000", feat: "Commercial Pro" },
    { cameras: 10, price: "72,000", feat: "Enterprise" }
  ];

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#0a192f', borderBottom: '2px solid #10b981', padding: '15px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '1px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>CALL NOW</a>
          </div>
        </div>
      </nav>

      <div style={{ padding: '40px 20px' }}>
        
        {/* HERO */}
        <section style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2' }}>Kenya's Most <span style={{ color: '#10b981' }}>Advanced</span> <br/>Security Partner</h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Expert CCTV & Networking in Nairobi, Kiambu, and Mombasa. Now accepting Pi Network and Global Stablecoins.</p>
          <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>REQUEST QUOTE</a>
        </section>

        {/* CRYPTO & STABLECOIN SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '40px', backgroundColor: '#112240', borderRadius: '20px', border: '1px solid #1e293b', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '10px' }}>Digital Payments Accepted</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>We support the future of finance. Pay for your security systems using your preferred digital assets.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {['Pi Network', 'USDT', 'USDC', 'DAI', 'BUSD'].map((coin) => (
              <span key={coin} style={{ padding: '8px 16px', backgroundColor: '#0a192f', border: '1px solid #10b981', borderRadius: '20px', fontSize: '0.85rem', color: '#10b981', fontWeight: 'bold' }}>
                {coin}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
             <a href={`https://wa.me/${myNumber}?text=${waCryptoPay}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
               Pay via Crypto
             </a>
          </div>
        </section>

        {/* CCTV PACKAGES */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>KES {kit.price}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '10px' }}>Or equivalent in USDT/Pi</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b' }}>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/500x400/112240/10b981?text=SecureLink+Project"; }}
                />
                <p style={{ padding: '15px', textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MAP SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>Our Coverage</h2>
          <div style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b', backgroundColor: '#112240' }}>
            {isClient ? (
              <iframe 
                src="https://maps.google.com/?cid=17856493610344092236&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ2" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Maps...</div>
            )}
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '60px' }}>
          <p style={{ fontWeight: 'bold', color: '#94a3b8' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
