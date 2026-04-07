export default function Home() {
  const myNumber = "254704770170"; // Replace with your real number

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
        
        {/* Contact Buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:+${myNumber}`} style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '15px 25px', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            📞 Call Now
          </a>
          <a href={`https://wa.me/${myNumber}`} target="_blank" style={{ 
            backgroundColor: '#25D366', 
            color: 'white', 
            padding: '15px 25px', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #10b981', paddingBottom: '10px', marginBottom: '40px' }}>Our Services</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#10b981', marginTop: 0 }}>CCTV Installation</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Full HD security camera setups with mobile viewing. Watch your property from anywhere in the world.</p>
          </div>
          
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#10b981', marginTop: 0 }}>WiFi Networking</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>High-speed mesh internet coverage for homes and offices. Professional cabling and router setup.</p>
          </div>
          
          <div style={{ padding: '30px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#10b981', marginTop: 0 }}>System Maintenance</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Technical support, troubleshooting, and hardware upgrades for existing networking and security systems.</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ maxWidth: '800px', margin: '80px auto 0', textAlign: 'center', padding: '40px', backgroundColor: '#10b98122', borderRadius: '20px' }}>
        <h2 style={{ color: '#10b981' }}>Why Choose SecureLink?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          <div><strong>✓ Fast Setup</strong></div>
          <div><strong>✓ Affordable Rates</strong></div>
          <div><strong>✓ 24/7 Support</strong></div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '100px', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
        <p>© 2026 SecureLink Internet & CCTV Services. All rights reserved.</p>
      </footer>
    </main>
  )
}
