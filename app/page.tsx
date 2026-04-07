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
    { cameras: 3, price: "25,000", usdt: "192", feat: "Home Starter" },
    { cameras: 4, price: "32,000", usdt: "246", feat: "Full Residence" },
    { cameras: 6, price: "45,000", usdt: "346", feat: "Business Basic" },
    { cameras: 8, price: "58,000", usdt: "446", feat: "Commercial Pro" }
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
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Next-Gen Security <br/><span style={{ color: '#10b981' }}>Across Kenya</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Premium CCTV & Fiber Networking. We accept Pi Network, USDT, and USDC.</p>
          <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* CCTV KIT SPECIFICATIONS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '40px', backgroundColor: '#112240', borderRadius: '20px', borderLeft: '8px solid #10b981' }}>
          <h2 style={{ marginBottom: '20px' }}>What's in the Box?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Every SecureLink installation uses industry-standard hardware for 24/7 reliability.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', color: '#ffffff' }}>
            <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}><strong>Cameras:</strong> 5MP Audio-Enabled</div>
            <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}><strong>DVR:</strong> Hikvision/Dahua 4K Ready</div>
            <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}><strong>Storage:</strong> 1TB/2TB Surveillance HDD</div>
            <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}><strong>Cabling:</strong> Pure Copper RG59</div>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.8rem' }}>{kit.feat}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '15px 0' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>KES {kit.price}</div>
                <div style={{ color: '#94a3b8', marginTop: '10px', fontSize: '0.9rem' }}>~ {kit.usdt} USDT / Pi Equivalent</div>
                <a href={`https://wa.me/${myNumber}?text=I%20want%20to%20order%20the%20${kit.cameras}%20camera%20package`} style={{ display: 'block', marginTop: '20px', padding: '10px', backgroundColor: '#10b981', color: '#ffffff', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>ORDER NOW</a>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src="https://via.placeholder.com/500x400/112240/10b981?text=SecureLink+Work"; }} />
                <p style={{ padding: '12px', textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FIXED MAP SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Serving Nairobi, Kiambu & Mombasa</h2>
          <div style={{ width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b', backgroundColor: '#112240' }}>
            {isClient ? (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.16087805128!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1712423000000!5m2!1sen!2ske" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Coverage Map...</div>
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
