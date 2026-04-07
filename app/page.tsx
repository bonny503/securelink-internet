export default function Home() {
  const myNumber = "254704770170"; // Remember to use your real number

  return (
    <main style={{ 
      backgroundColor: '#0a192f', 
      color: '#ffffff', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      padding: '40px 20px'
    }}>
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

      {/* Pricing Section */}
      <section style={{ maxWidth: '1000px', margin: '60px auto' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #10b981', paddingBottom: '10px', marginBottom: '40px' }}>Our Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '2px solid #10b981', textAlign: 'center' }}>
            <h3>Basic Home CCTV</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>Starting at $XXX</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2' }}>
              <li>2 Full HD Cameras</li>
              <li>Mobile App Access</li>
              <li>1TB Storage</li>
            </ul>
          </div>
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
            <h3>Office WiFi Mesh</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>Starting at $XXX</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2' }}>
              <li>Dual-Band Routers</li>
              <li>Wall-to-Wall Coverage</li>
              <li>Speed Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section (Placeholders) */}
      <section style={{ maxWidth: '1000px', margin: '60px auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Recent Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ aspectRatio: '1/1', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
              Job Photo {i}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '100px', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
        <p>© 2026 SecureLink Internet & CCTV Services.</p>
      </footer>
    </main>
  )
}
