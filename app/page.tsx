import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | Top CCTV & Networking Services Thika & Nairobi',
  description: 'Professional CCTV installation, WiFi Mesh networking, and security solutions in Thika, Nairobi, and Kiambu. Authorized Hikvision & UNV installer.',
  keywords: ['CCTV installation Thika', 'Networking Nairobi', 'Security cameras Kenya', 'WiFi Mesh Thika', 'SecureLink Internet', 'Hikvision Kenya'],
}

export default function Home() {
  const myNumber = "254704770170"; 
  const whatsappMsg = encodeURIComponent("Hi SecureLink, I saw your website and I'm interested in the 3-CCTV Camera Kit for KES 20,000!");

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

        {/* FEATURED KITS (NEW SECTION) */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Complete CCTV Kits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* 3 Camera Kit */}
            <div style={{ padding: '30px', borderRadius: '16px', backgroundColor: '#1e293b', border: '2px solid #10b981', textAlign: 'center' }}>
              <h3 style={{ color: '#10b981', margin: 0 }}>3-Camera Full Kit</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '15px 0' }}>KES 20,000</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block', lineHeight: '2' }}>
                <li>✅ 3× Full HD Night Vision Cameras</li>
                <li>✅ 4-Channel High-Speed DVR</li>
                <li>✅ Power Supply & All Connectors</li>
                <li>✅ Mobile App Remote Viewing</li>
                <li>📦 <b>Hardware + Full Installation</b></li>
              </ul>
            </div>

            {/* 4 Camera Kit */}
            <div style={{ padding: '30px', borderRadius: '16px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
              <h3 style={{ color: '#94a3b8', margin: 0 }}>4-Camera Full Kit</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '15px 0' }}>KES 25,500</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block', lineHeight: '2' }}>
                <li>✅ 4× Full HD Night Vision Cameras</li>
                <li>✅ 4-Channel High-Speed DVR</li>
                <li>✅ Power Supply & Cabling</li>
                <li>✅ Mobile App Remote Viewing</li>
                <li>📦 <b>Hardware + Full Installation</b></li>
              </ul>
            </div>

          </div>
        </section>

        {/* Gallery */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Recent Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, index) => (
              <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <p style={{ textAlign: 'center', padding: '12px', fontSize: '0.8rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area / SEO Section */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '10px' }}>Our Service Area</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Thika Town • Nairobi CBD • Ruiru • Juja • Kiambu</p>
          <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe src="http://googleusercontent.com/maps.google.com/3" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services. Trusted Tech Professionals.</p>
        </footer>
      </div>
    </main>
  )
}
