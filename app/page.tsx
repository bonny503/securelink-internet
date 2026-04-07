export default function Home() {
  const myNumber = "254704770170"; 

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      
      {/* Header / Hero */}
      <section style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', letterSpacing: '-1px' }}>
          SECURE<span style={{ color: '#10b981' }}>LINK</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Professional CCTV Installation & High-Speed Networking Solutions in Kenya.
        </p>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>📞 Call Now</a>
          <a href={`https://wa.me/${myNumber}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp</a>
        </div>
      </section>

      {/* 4 Image Gallery */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #10b981', display: 'inline-block', paddingBottom: '10px', marginBottom: '40px' }}>Project Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {projectPhotos.map((photo, index) => (
            <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
              <img 
                src={photo.url} 
                alt={photo.title} 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
              />
              <p style={{ textAlign: 'center', padding: '12px', fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>{photo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Service Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          
          {/* Home Package */}
          <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '2px solid #10b981', textAlign: 'center' }}>
            <h3 style={{ color: '#10b981', marginTop: 0 }}>Home Security</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>KES 3,500</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block' }}>
              <li>✅ Home CCTV Installation</li>
              <li>✅ Mobile Phone Integration</li>
              <li>✅ Remote Viewing Setup</li>
            </ul>
          </div>

          {/* Office Package */}
          <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
            <h3 style={{ color: '#10b981', marginTop: 0 }}>Office Networking</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>KES 4,000</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block' }}>
              <li>✅ Office WiFi Mesh Setup</li>
              <li>✅ High-Speed Configuration</li>
              <li>✅ Full Network Testing</li>
            </ul>
          </div>

        </div>
      </section>

      {/* About / Location Section */}
      <section style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', paddingBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Why Choose SecureLink?</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          We specialize in high-quality Hikvision and UNV systems. Whether you need reliable home surveillance or professional business networking, our certified team ensures your peace of mind with 24/7 technical support.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
        <p>© 2026 SecureLink Internet & CCTV Services.</p>
      </footer>
    </main>
  );
}
