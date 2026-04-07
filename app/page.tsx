// ... (keep previous imports and metadata)

export default function Home() {
  // ... (keep your existing variables)

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* (Keep Nav Bar and Hero here) */}

      <div style={{ padding: '40px 20px' }}>
        
        {/* NEW: TRUST & GUARANTEE SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#112240', borderRadius: '12px', borderBottom: '4px solid #10b981' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🛡️</div>
            <h3 style={{ margin: '0 0 10px 0' }}>1-Year Warranty</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>We provide a full 12-month hardware warranty on all Hikvision and UNV equipment.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#112240', borderRadius: '12px', borderBottom: '4px solid #10b981' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Same-Day Support</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Issues with your app or recording? Our Thika-based team responds within hours.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#112240', borderRadius: '12px', borderBottom: '4px solid #10b981' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>💎</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Clean Installation</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>No hanging wires. We use professional trunking and conduit for a hidden, secure finish.</p>
          </div>
        </section>

        {/* (Keep CCTV Kits and Internet Sections here) */}

        {/* NEW: TESTIMONIALS SECTION */}
        <section style={{ maxWidth: '900px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '40px' }}>What Our Clients Say</h2>
          <div style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
            "SecureLink transformed our apartment security. The 4-camera kit is crystal clear on my phone even when I'm away in Mombasa. Highly recommended for anyone in Kiambu County!" 
            <br />
            <span style={{ color: '#10b981', fontWeight: 'bold', fontStyle: 'normal', display: 'block', marginTop: '10px' }}>— Satisfied Homeowner, Thika</span>
          </div>
        </section>

        {/* (Keep Gallery and Map here) */}

      </div>
    </main>
  )
}
