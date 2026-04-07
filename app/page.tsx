import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | CCTV & Networking Projects Thika',
  description: 'Certified CCTV & Internet installation in Thika, Nairobi, and Kiambu. From Home Kits to Apartment Networking.',
}

export default function Home() {
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

  // Using all your photos to show a massive portfolio
  const allPhotos = [
    '/work/photo%201.jpeg', '/work/photo%202.jpeg', '/work/photo%203.jpg',
    '/work/photo%204.jpg', '/work/photo%205.jpeg', '/work/photo%206.jpg',
    '/work/photo%207.jpeg', '/work/photo%208.jpg', '/work/photo%209.jpg'
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
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Thika's leading provider for high-definition surveillance and seamless apartment internet infrastructure.</p>
          <a href={`https://wa.me/${myNumber}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* WHY CHOOSE US (TRUST BUILDER) */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Professional Finish</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>We don't just "mount" cameras. We use trunking and conduit to ensure a clean, hidden-wire look that lasts.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Remote Access</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Watch your property from anywhere in the world. We set up high-speed mobile viewing on all your devices.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>After-Sales Care</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Got an issue? We offer 12 months of free technical support for app configuration and system maintenance.</p>
          </div>
        </section>

        {/* APARTMENT INTERNET SECTION */}
        <section id="internet" style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '50px', backgroundColor: '#112240', borderRadius: '20px', borderRight: '8px solid #10b981' }}>
          <h2 style={{ color: '#10b981', marginTop: 0 }}>Apartment Internet Infrastructure</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            Are you a landlord or property manager? We install structured network cabling and managed WiFi systems for residential blocks. 
            Deliver high-speed internet to every unit with professional management.
          </p>
          <ul style={{ color: '#ffffff', marginTop: '20px', lineHeight: '2' }}>
            <li>✓ Fiber-to-Unit Structured Cabling</li>
            <li>✓ Communal Area WiFi Mesh</li>
            <li>✓ High-Speed Load Balancing</li>
          </ul>
        </section>

        {/* CCTV PACKAGES */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px 15px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>{kit.feat}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '10px 0' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>KES {kit.price}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '10px' }}>Inc. Hardware & Labor</div>
              </div>
            ))}
          </div>
        </section>

        {/* MEGA GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {allPhotos.map((url, i) => (
              <img key={i} src={url} alt="SecureLink Work" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #1e293b' }} />
            ))}
          </div>
        </section>

        {/* MAP & FOOTER */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>Serving Kiambu & Nairobi County</h2>
          <div style={{ width: '100%', height: '350px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b' }}>
            <iframe src="http://googleusercontent.com/maps.google.com/thika" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '60px' }}>
          <p style={{ fontWeight: 'bold', color: '#94a3b8' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  )
}
