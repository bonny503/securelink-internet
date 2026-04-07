'use client'; // This tells Next.js to run this on the client side, fixing the timeout!

import React, { useEffect, useState } from 'react';

// Note: Metadata must be in a separate layout.tsx file if using 'use client' 
// but for a quick fix, let's just focus on getting the build to pass.

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // This ensures the map only loads once the page is actually in the browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  const myNumber = "254704770170"; 
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I need a professional CCTV quote for my property.");
  const waWifiEnquiry = encodeURIComponent("Hi SecureLink, I am enquiring about Apartment Internet installation.");

  const kits = [
    { cameras: 3, price: "25,000", feat: "Home Starter" },
    { cameras: 4, price: "32,000", feat: "Full Residence" },
    { cameras: 6, price: "45,000", feat: "Business Basic" },
    { cameras: 8, price: "58,000", feat: "Commercial Pro" },
    { cameras: 10, price: "72,000", feat: "Enterprise" }
  ];

  const galleryPhotos = [
    { url: '/work/photo1.jpg', title: 'Network Infrastructure' },
    { url: '/work/photo2.jpg', title: 'Camera Inventory' },
    { url: '/work/photo3.jpg', title: 'Monitoring Station' },
    { url: '/work/photo4.jpg', title: 'Turbo HD DVRs' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#0a192f', borderBottom: '2px solid #10b981', padding: '15px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '1px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>CALL SPECIALIST</a>
          </div>
          <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', whiteSpace: 'nowrap', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <a href="#internet" style={{ color: '#ffffff', textDecoration: 'none' }}>Apartment Internet</a>
            <a href="#kits" style={{ color: '#ffffff', textDecoration: 'none' }}>CCTV Installation</a>
            <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ color: '#10b981', textDecoration: 'none' }}>Request Quotation</a>
            <a href={`https://wa.me/${myNumber}?text=${waWifiEnquiry}`} style={{ color: '#10b981', textDecoration: 'none' }}>WiFi Enquiry</a>
          </div>
        </div>
      </nav>

      <div style={{ padding: '40px 20px' }}>
        
        {/* HERO */}
        <section style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2' }}>Secure Your Future With <br/><span style={{ color: '#10b981' }}>Expert Technology</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Leading provider for high-definition surveillance and seamless apartment internet infrastructure across Kenya.</p>
          <a href={`https://wa.me/${myNumber}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* TRUST BUILDERS (SUMMARY) */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Professional Finish</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Clean, hidden-wire installations in Nairobi, Kiambu, and Mombasa.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Remote Access</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Monitor your property from anywhere via smartphone.</p>
          </div>
        </section>

        {/* CCTV PACKAGES */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px 15px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', margin: '10px 0' }}>KES {kit.price}</div>
              </div>
            ))}
          </div>
        </section>

      {/* PROJECT GALLERY - CRASH PROOF VERSION */}
<section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Technical Portfolio</h2>
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
    gap: '20px' 
  }}>
    {/* The ?.map and (photo && ...) are safety locks to prevent crashing */}
    {galleryPhotos?.map((photo, i) => (
      photo && (
        <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b' }}>
          <div style={{ width: '100%', height: '220px', position: 'relative', backgroundColor: '#0a192f' }}>
            <img 
              src={photo.url || '/work/photo1.jpg'} 
              alt={photo.title || 'SecureLink Project'} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => {
                e.currentTarget.src = `https://via.placeholder.com/500x400/112240/10b981?text=${encodeURIComponent(photo.title || 'Image Missing')}`;
              }}
            />
          </div>
          <div style={{ padding: '15px', textAlign: 'center', backgroundColor: '#112240' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: '#10b981' }}>
              {photo.title}
            </p>
          </div>
        </div>
      )
    ))}
  </div>
</section>

        {/* BUILD-SAFE GOOGLE MAP */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>National Service Coverage</h2>
          <div style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b', backgroundColor: '#112240' }}>
            {isClient ? (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021434.7839352934!2d36.5682136!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf02545202cf07!2sNairobi!5e0!3m2!1sen!2ske!4v1712501234567!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                Loading Map...
              </div>
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
