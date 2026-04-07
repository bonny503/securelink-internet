'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const myNumber = "254704770170"; 
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I need a professional CCTV quote for my property.");

  const kits = [
    { cameras: 3, price: "25,000", crypto: "192", feat: "Home Starter" },
    { cameras: 4, price: "32,000", crypto: "246", feat: "Full Residence" },
    { cameras: 6, price: "45,000", crypto: "346", feat: "Business Basic" },
    { cameras: 8, price: "58,000", crypto: "446", feat: "Commercial Pro" }
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
          <div style={{ display: 'flex', gap: '10px' }}>
             <span style={{ fontSize: '0.7rem', color: '#94a3b8', border: '1px solid #1e293b', padding: '5px 10px', borderRadius: '5px' }}>Nairobi | Kiambu | Mombasa</span>
          </div>
        </div>
      </nav>

      <div style={{ padding: '40px 20px' }}>
        
        {/* HERO */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Next-Gen Security <br/><span style={{ color: '#10b981' }}>Web3 Enabled</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Premium CCTV & Fiber Networking. We accept Pi Network and Global Stablecoins.</p>
          <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* PRICING TABLE WITH CRYPTO PAYMENTS */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Full Installation Packages</h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px' }}>Transparent pricing in KES or Stablecoins</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#112240', border: '1px solid #1e293b', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '0.65rem', backgroundColor: '#10b981', color: '#0a192f', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>CRYPTO READY</div>
                
                <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.8rem' }}>{kit.feat}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '15px 0' }}>{kit.cameras} Cameras</div>
                
                <div style={{ marginBottom: '5px' }}>
                   <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>KES {kit.price}</span>
                </div>

                {/* STABLECOIN PRICE LINE */}
                <div style={{ backgroundColor: '#0a192f', padding: '10px', borderRadius: '8px', marginTop: '15px', border: '1px dashed #10b981' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '5px' }}>Stablecoin Price</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffffff' }}>~ {kit.crypto} USDT / USDC / RUSD</div>
                  <div style={{ fontSize: '0.65rem', color: '#10b981', marginTop: '5px' }}>Also accepting Pi Network</div>
                </div>

                <a href={`https://wa.me/${myNumber}?text=I%20want%20to%20order%20the%20${kit.cameras}%20camera%20package%20via%20Crypto`} style={{ display: 'block', marginTop: '20px', padding: '12px', backgroundColor: '#10b981', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>ORDER VIA WHATSAPP</a>
              </div>
            ))}
          </div>
        </section>

        {/* RECOGNIZED COINS LOGOS/TEXT */}
        <section style={{ maxWidth: '800px', margin: '0 auto 100px', textAlign: 'center' }}>
           <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '20px' }}>SUPPORTED DIGITAL ASSETS</h3>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {['USDT', 'USDC', 'RUSD', 'DAI', 'BUSD', 'PI COIN'].map(coin => (
                <span key={coin} style={{ fontWeight: 'bold', letterSpacing: '1px', opacity: 0.8 }}>{coin}</span>
              ))}
           </div>
        </section>

        {/* PORTFOLIO GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src="https://via.placeholder.com/500x400/112240/10b981?text=SecureLink+Project"; }} />
                <p style={{ padding: '12px', textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

      {/* FIXED GOOGLE MAP SECTION */}
<section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '20px' }}>National Service Coverage</h2>
  <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Expert installations across Nairobi, Kiambu, and Mombasa.</p>
  
  <div style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b', backgroundColor: '#112240' }}>
    {isClient ? (
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042000.0000000000!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d807106093%3A0x10b981!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1712500000000!5m2!1sen!2ske" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ) : (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
        Loading SecureLink Coverage Map...
      </div>
    )}
  </div>
</section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '40px' }}>
          <p style={{ fontWeight: 'bold', color: '#94a3b8' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
