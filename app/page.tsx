export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#0f172a', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
        SECURE<span style={{ color: '#10b981' }}>LINK</span>
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
        High-Speed WiFi Networking & CCTV Services
      </p>
      <div style={{ marginTop: '20px', padding: '10px 20px', border: '1px solid #10b981', borderRadius: '5px' }}>
        Site Under Construction
      </div>
    </main>
  )
}
