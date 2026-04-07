'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const myNumber = "254704770170"; 
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I need a professional CCTV quote for my property.");
  const waCryptoPay = encodeURIComponent("Hi SecureLink, I would like to pay using Crypto (USDT/Pi). Please share the wallet details.");

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
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '1px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
          <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>CALL NOW</a>
        </div>
      </nav>

      <div style={{ padding: '40px 20px' }}>
        
        {/* HERO */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Secure Your Property with <br/><span style={{ color: '#10b981' }}>Expert Technology</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Premium CCTV & Networking solutions across Nairobi, Kiambu, and Mombasa. Web3 Ready.</p>
          <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET A QUOTE</a>
        </section>

        {/* CRYPTO PAYMENT SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px', padding: '30px', backgroundColor: '#112240', borderRadius: '20px', border: '1px solid #1e293b', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '15px' }}>Digital Payments Accepted</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {['Pi Network', 'USDT', 'USDC', 'DAI', 'BUSD'].map(coin => (
              <span key={coin} style={{ border: '1px solid #10b981', color: '#10b981', padding: '5px 12px', borderRadius: '20px', fontSize: '0.75rem' }}>{coin}</span>
            ))}
          </div>
          <a href={`https://wa.me/${myNumber}?text=${waCryptoPay}`} style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '0.9rem' }}>Inquire about Crypto Payment</a>
        </section>

        {/* PORTFOLIO */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src="https://via.placeholder.com/400x300/112240/10b981?text=SecureLink"; }} />
                <p style={{ padding: '10px', textAlign: 'center', fontSize: '0.85rem' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FIXED GOOGLE MAP SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Service Coverage</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Serving Nairobi, Kiambu, and Mombasa Counties.</p>
          <div style={{ width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b', backgroundColor: '#112240' }}>
            {isClient ? (
              <iframe 
                // This URL is specifically for Embedding and will NOT refuse connection
                src="https://maps.google.com/?cid=16612868671229730409&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ8" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Loading Map...</div>
            )}
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '40px' }}>
          <p style={{ fontWeight: 'bold' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
