import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | Full CCTV Kits & Networking Thika & Nairobi',
  description: 'Complete CCTV Kits from 3 to 10 cameras. Professional installation in Thika, Nairobi, and Kiambu. Authorized Hikvision & UNV installer.',
  keywords: ['CCTV Kit Kenya', '3 Camera CCTV Price', '8 Camera CCTV Installation', 'CCTV Thika', 'SecureLink Packages'],
}

export default function Home() {
  const myNumber = "254704770170"; 
  const whatsappMsg = encodeURIComponent("Hi SecureLink, I'm interested in one of your Full CCTV Kits. Please provide a quote!");

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  const kits = [
    { cameras: 3, price: "20,000", channels: 4, feat: "Best for Homes" },
    { cameras: 4, price: "25,500", channels: 4, feat: "Complete Security" },
    { cameras: 6, price: "36,000", channels: 8, feat: "Small Business" },
    { cameras: 8, price: "45,000", channels: 8, feat: "Warehouse Ready" },
    { cameras: 10, price: "58,000", channels: 16, feat: "Enterprise Grade" }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* LIVE STATUS BAR */}
      <div style={{ backgroundColor: '#064e3b', padding: '10px', textAlign: 'center', fontSize: '0.8rem', borderBottom: '1px solid #10b981' }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', marginRight: '8px', boxShadow: '0 0 8px #10b981' }}></span>
        SECURELINK: READY FOR INSTALLATIONS IN THIKA & NAIROBI
      </div>

      <div style={{ padding: '40px 20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', letterSpacing: '-1px' }}>
            SECURE<span style={{ color: '#10b981' }}>LINK</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#10b981', fontWeight: 'bold', marginBottom: '30px' }}>
            Premium Surveillance & Networking Solutions
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>📞 Call Specialist</a>
            <a href={`https://wa.me/${myNumber}?text=${whatsappMsg}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp Quote</a>
          </div>
        </section>

        {/* CCTV KITS SECTION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Complete CCTV Kit Packages</h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px' }}>All kits include Cameras, DVR, Storage, Cabling & Full Installation</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px 15px', borderRadius: '12px', backgroundColor: kit.cameras === 3 ? '#1e293b' : '#112240', border: kit.cameras === 3 ? '2px solid #10b981' : '1px solid #1e293b', textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold', textTransform: 'uppercase' }}>{kit.feat}</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.2rem' }}>{kit.cameras} Camera Kit</h3>
                <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffffff', margin: '10px 0' }}>KES {kit.price}</p>
                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{kit.channels}-Channel System</p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #1e293b', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'left' }}>
                  <li>✓ Night Vision</li>
                  <li>✓ Mobile App Viewing</li>
                  <li>✓ Hardware + Install</li>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Recent Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, index) => (
              <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <p style={{ textAlign: 'center', padding: '12px', fontSize: '0.8rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '10px' }}>Service Area</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Thika • Nairobi • Ruiru • Juja • Kiambu</p>
          <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127663.26418858547!2d37.009772!3d-1.0387574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b22989b5d%3A0xc3f5f3e9c4f4a3e2!2sThika!5e0!3m2!1sen!2ske!4v1712500000000!5m2!1sen!2ske" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services.</p>
        </footer>
      </div>
    </main>
  )
}
