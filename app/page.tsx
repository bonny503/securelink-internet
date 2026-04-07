export default function Home() {
  const myNumber = "254711591610"; // I saw this number in your photo! Change if needed.

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%203.jpg', title: 'Hikvision Systems' },
    { url: '/work/photo%204.jpg', title: 'UNV Stock' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%206.jpg', title: 'System Setup' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' },
    { url: '/work/photo%208.jpg', title: 'Server Rack' },
    { url: '/work/photo%209.jpg', title: 'Clean Wiring' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
          SECURE<span style={{ color: '#10b981' }}>LINK</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '30px' }}>
          High-Speed WiFi Networking & CCTV Services
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>📞 Call Now</a>
          <a href={`https://wa.me/${myNumber}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp</a>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 60px' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #10b981', display: 'inline-block', paddingBottom: '10px', marginBottom: '40px' }}>Our Work & Equipment</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {projectPhotos.map((photo, index) => (
            <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
              <img 
                src={photo.url} 
                alt={photo.title} 
                style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
              />
              <p style={{ textAlign: 'center', padding: '15px', fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>{photo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ maxWidth: '1000px', margin: '80px auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Service Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '2px solid #10b981', textAlign: 'center' }}>
            <h3 style={{ color: '#10b981' }}>Residential CCTV</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Professional Install</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.5' }}>
              <li>✓ HD Night Vision Cameras</li>
              <li>✓ Mobile App Configuration</li>
              <li>✓ 24/7 Remote Viewing</li>
            </ul>
          </div>
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
            <h3 style={{ color: '#10b981' }}>Business Networking</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Enterprise Solutions</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.5' }}>
              <li>✓ Mesh WiFi Systems</li>
              <li>✓ Structured Cabling</li>
              <li>✓ Network Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '100px', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px' }}>
        <p>© 2026 SecureLink Internet & CCTV Services.</p>
      </footer>
    </main>
  );
}
