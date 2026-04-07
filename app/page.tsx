import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | Top CCTV & Networking Services Thika & Nairobi',
  description: 'Professional CCTV installation, WiFi Mesh networking, and security solutions in Thika, Nairobi, and Kiambu. Authorized Hikvision & UNV installer.',
  keywords: ['CCTV installation Thika', 'Networking Nairobi', 'Security cameras Kenya', 'WiFi Mesh Thika', 'SecureLink Internet', 'Hikvision Kenya'],
}

export default function Home() {
  const myNumber = "254704770170"; 
  const whatsappMsg = encodeURIComponent("Hi SecureLink, I saw your website and I'm interested in a CCTV/Networking quote!");

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* LIVE STATUS BAR */}
      <div style={{ backgroundColor: '#064e3b', padding: '10px', textAlign: 'center', fontSize: '0.8rem', borderBottom: '1px solid #10b981' }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', marginRight: '8px', boxShadow: '0 0 8px #10b981' }}></span>
        AVAILABLE FOR INSTALLATIONS TODAY IN THIKA & NAIROBI
      </div>

      <div style={{ padding: '40px 20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', letterSpacing: '-1px' }}>
            SECURE<span style={{ color: '#10b981' }}>LINK</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#10b981', fontWeight: 'bold', marginBottom: '10px' }}>
            #1 CCTV & Networking Expert in Thika
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>📞 Call Specialist</a>
            <a href={`https://wa.me/${myNumber}?text=${whatsappMsg}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp Quote</a>
          </div>
        </section>

        {/* BRANDS Section */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 60px', textAlign: 'center', opacity: 0.6 }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', fontWeight: 'bold', color: '#94a3b8' }}>
            <span>HIKVISION</span><span>UNV</span><span>DAHUA</span><span>TP-LINK</span><span>UBIQUITI</span>
          </div>
        </section>

        {/* Gallery */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, index) => (
              <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <p style={{ textAlign: 'center', padding: '12px', fontSize: '0.8rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GUARANTEES (THE NEW STUFF) */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'center' }}>
          <div style={{ padding: '20px', border: '1px border #1e293b' }}>
            <h4 style={{ color: '#10b981' }}>🛡️ 1-Year Warranty</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Full replacement guarantee on all Hikvision and UNV hardware we install.</p>
          </div>
          <div style={{ padding: '20px', border: '1px border #1e293b' }}>
            <h4 style={{ color: '#10b981' }}>🔧 Lifetime Support</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Need help with your mobile app? Call us anytime for free remote assistance.</p>
          </div>
          <div style={{ padding: '20px', border: '1px border #1e293b' }}>
            <h4 style={{ color: '#10b981' }}>⚡ Fast Turnaround</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Book today, get installed tomorrow. We value your security and time.</p>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '2px solid #10b981', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-15px', right: '20px', backgroundColor: '#10b981', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>HOME PACKAGE</span>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Basic Installation</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 3,500</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.2', fontSize: '0.9rem' }}>
                <li>✅ CCTV Setup & Cabling</li>
                <li>✅ Mobile App Integration</li>
                <li>✅ System Testing</li>
              </ul>
            </div>

            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Business Networking</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 4,000</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.2', fontSize: '0.9rem' }}>
                <li>✅ High-Speed WiFi Mesh</li>
                <li>✅ Structured Cabling</li>
                <li>✅ Multi-User Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Map */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '10px' }}>Our Service Area</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Thika Town • Nairobi CBD • Ruiru • Juja • Kiambu</p>
          <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe src="http://googleusercontent.com/maps.google.com/2" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services. Trusted Tech Professionals.</p>
        </footer>
      </div>
    </main>
  )
}
