import { Metadata } from 'next'

// 1. THIS IS THE SEO MAGIC: These tags tell Google what your site is about
export const metadata: Metadata = {
  title: 'SecureLink | Top CCTV & Networking Services Thika & Nairobi',
  description: 'Professional CCTV installation, WiFi Mesh networking, and security solutions in Thika, Nairobi, and Kiambu. Authorized Hikvision & UNV installer.',
  keywords: ['CCTV installation Thika', 'Networking Nairobi', 'Security cameras Kenya', 'WiFi Mesh Thika', 'SecureLink Internet', 'Hikvision Kenya'],
}

export default function Home() {
  const myNumber = "254704770170"; 

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  const brands = ["Hikvision", "UNV", "Dahua", "TP-Link", "Ubiquiti"];

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
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Secure your home and business with Kenya’s most reliable surveillance and internet specialists.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)' }}>📞 Call Specialist</a>
            <a href={`https://wa.me/${myNumber}`} target="_blank" style={{ backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp Quote</a>
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>Authorized Equipment Installer</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
            {brands.map((brand) => (
              <span key={brand} style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#475569' }}>{brand}</span>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Real Projects, Real Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, index) => (
              <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', backgroundColor: '#112240' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <p style={{ textAlign: 'center', padding: '12px', fontSize: '0.9rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing & "Attraction" Cards */}
        <section style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Best Value in Central Kenya</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '2px solid #10b981', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-15px', right: '20px', backgroundColor: '#10b981', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>POPULAR</span>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Home Security</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 3,500</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.2' }}>
                <li>✅ Professional Installation</li>
                <li>✅ 1 Year Warranty</li>
                <li>✅ Mobile App Access</li>
              </ul>
            </div>

            <div style={{ padding: '40px 30px', borderRadius: '16px', backgroundColor: '#112240', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Office Networking</h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>KES 4,000</p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', lineHeight: '2.2' }}>
                <li>✅ Zero Dead-Zone WiFi</li>
                <li>✅ Structured Cabling</li>
                <li>✅ Business Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Area / SEO Section */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Areas We Serve</h2>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Dedicated support in <b>Thika Town</b>, <b>Nairobi CBD</b>, <b>Ruiru</b>, <b>Juja</b>, and <b>Kiambu County</b>.</p>
          <div style={{ width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.48395561008!2d36.98066565!3d-1.04231685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c619d7%3A0x863335509761922!2sThika!5e0!3m2!1sen!2ske!4v1712500000000!5m2!1sen!2ske" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
            ></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services. Trusted Technicians in Kenya.</p>
        </footer>
      </div>
    </main>
  )
}
