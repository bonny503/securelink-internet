export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#0a192f', 
      color: '#ffffff', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      padding: '40px 20px'
    }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          SECURE<span style={{ color: '#10b981' }}>LINK</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
          High-Speed WiFi Networking & CCTV Services
        </p>
        
        {/* Call to Action Button */}
        <div style={{ marginTop: '30px' }}>
          <a href="tel:+254704770170" style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '15px 30px', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            📞 Call for a Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #10b981', paddingBottom: '10px' }}>Our Services</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '10px', backgroundColor: '#112240' }}>
            <h3 style={{ color: '#10b981' }}>CCTV Installation</h3>
            <p>Full HD security camera setups with mobile viewing so you can watch your property from anywhere.</p>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '10px', backgroundColor: '#112240' }}>
            <h3 style={{ color: '#10b981' }}>WiFi Networking</h3>
            <p>Fast, reliable internet coverage for homes and offices. No more dead zones.</p>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #1e293b', borderRadius: '10px', backgroundColor: '#112240' }}>
            <h3 style={{ color: '#10b981' }}>System Maintenance</h3>
            <p>Repairing and upgrading existing security and networking systems to keep you connected.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '80px', color: '#64748b', fontSize: '0.9rem' }}>
        <p>© 2026 SecureLink Internet & CCTV Services. All rights reserved.</p>
      </footer>
    </main>
  )
}
