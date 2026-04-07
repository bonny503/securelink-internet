export default function Home() {
  const myNumber = "254704770170"; 

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  const brands = ["Hikvision", "UNV (Uniview)", "Dahua", "TP-Link", "Ubiquiti"];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 1. LIVE STATUS BAR */}
      <div style={{ backgroundColor: '#064e3b', padding: '10px', textAlign: 'center', fontSize: '0.8rem', borderBottom: '1px solid #10b981' }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', marginRight: '8px', boxShadow: '0 0 8px #10b981' }}></span>
        AVAILABLE FOR INSTALLATIONS TODAY IN THIKA & NAIROBI
      </div>

      <div style={{ padding: '40px 20px' }}>
        {/* Header / Hero */}
        <section style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', letterSpacing: '-1px' }}>
            SECURE<span style={{ color: '#10b981' }}>LINK</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Top-Rated CCTV Installation & WiFi Networking Solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', transition: '0.3s' }}>📞 Call Now</a>
            <a href={`https://wa.me/${myNumber}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp</a>
          </div>
        </section>

        {/* 2. BRANDS WE SUPPORT */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>Authorized Installer For</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', opacity: '0.7' }}>
            {brands.map((brand) => (
              <span key={brand} style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#94a3b8' }}>{brand}</span>
            ))}
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
            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '2px solid #10b981', textAlign: 'center' }}>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Home Security</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 3,500</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>Starting Price / Installation</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block', fontSize: '0.95rem' }}>
                <li>✅ CCTV Installation</li>
                <li>✅ Mobile App Integration</li>
                <li>✅ 24/7 Remote Viewing</li>
              </ul>
            </div>

            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Office Networking</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 4,000</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>Starting Price / Installation</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', textAlign: 'left', display: 'inline-block', fontSize: '0.95rem' }}>
                <li>✅ WiFi Mesh Setup</li>
                <li>✅ Network Configuration</li>
                <li>✅ Connectivity Speed Test</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. GOOGLE MAPS / SERVICE AREA */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Our Service Area</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Covering Thika, Nairobi, Kiambu, and surrounding areas.</p>
          <div style={{ width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127659.3496033481!2d37.00977233261718!3d-1.0343354999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f489370002167%3A0xe5a36371756574f7!2sThika!5e0!3m2!1sen!2ske!4v1712500000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services.</p>
        </footer>
      </div>
    </main>
  );
}
