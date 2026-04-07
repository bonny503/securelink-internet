import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | CCTV Kits & Apartment Internet Thika',
  description: 'Premium CCTV Kits and Apartment Internet installation in Thika, Nairobi, and Kiambu.',
  keywords: ['CCTV Kit Kenya', 'Apartment Internet Thika', 'WiFi Enquiries Kenya', 'CCTV Quotation'],
}

export default function Home() {
  const myNumber = "254704770170"; 
  
  // Custom WhatsApp messages for each category
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I would like a custom CCTV Quotation for my property.");
  const waWifiEnquiry = encodeURIComponent("Hi SecureLink, I have an enquiry regarding WiFi installation/Apartment internet.");

  const projectPhotos = [
    { url: '/work/photo%201.jpeg', title: 'Network Infrastructure' },
    { url: '/work/photo%202.jpeg', title: 'Camera Inventory' },
    { url: '/work/photo%205.jpeg', title: 'Monitoring Station' },
    { url: '/work/photo%207.jpeg', title: 'Turbo HD DVRs' }
  ];

  const kits = [
    { cameras: 3, price: "25,000", channels: 4, feat: "Home Starter" },
    { cameras: 4, price: "32,000", channels: 4, feat: "Full Residence" },
    { cameras: 6, price: "45,000", channels: 8, feat: "Business Basic" },
    { cameras: 8, price: "58,000", channels: 8, feat: "Commercial Pro" },
    { cameras: 10, price: "72,000", channels: 16, feat: "Enterprise" }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 1. NEW CATEGORY MENU BAR */}
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: 'rgba(10, 25, 47, 0.98)', 
        borderBottom: '1px solid #10b981',
        padding: '10px 0'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          {/* Logo & Call Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>CALL NOW</a>
          </div>
          
          {/* Category Links Row */}
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            overflowX: 'auto', 
            paddingBottom: '5px',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: '600'
          }}>
            <a href="#kits" style={{ color: '#10b981', textDecoration: 'none', whiteSpace: 'nowrap' }}>CCTV Installation</a>
            <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ color: '#ffffff', textDecoration: 'none', whiteSpace: 'nowrap' }}>CCTV Quotation</a>
            <a href="#internet" style={{ color: '#ffffff', textDecoration: 'none', whiteSpace: 'nowrap' }}>Apartment Internet</a>
            <a href={`https://wa.me/${myNumber}?text=${waWifiEnquiry}`} style={{ color: '#ffffff', textDecoration: 'none', whiteSpace: 'nowrap' }}>WiFi Enquiries</a>
          </div>
        </div>
      </nav>

      {/* LIVE STATUS */}
      <div style={{ backgroundColor: '#064e3b', padding: '8px', textAlign: 'center', fontSize: '0.7rem' }}>
         AVAILABLE FOR INSTALLATIONS IN THIKA & NAIROBI
      </div>

      <div style={{ padding: '40px 20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Professional Security & Networking</h1>
          <p style={{ color: '#94a3b8' }}>Certified Installers for Hikvision, UNV, and High-Speed Mesh WiFi</p>
        </section>

        {/* 2. APARTMENT INTERNET SECTION */}
        <section id="internet" style={{ maxWidth: '1100px', margin: '0 auto 80px', padding: '30px', backgroundColor: '#112240', borderRadius: '16px', borderLeft: '5px solid #10b981' }}>
          <h2 style={{ color: '#10b981', marginTop: 0 }}>Apartment Internet Installation</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            We specialize in structured cabling and WiFi distribution for apartments and residential blocks. 
            Get seamless roaming and high-speed internet in every room.
          </p>
          <div style={{ marginTop: '20px' }}>
             <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Labor from KES 4,000</span>
          </div>
        </section>

        {/* CCTV KITS SECTION */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full CCTV Installation Kits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px 15px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>{kit.feat}</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.2rem' }}>{kit.cameras} Camera Kit</h3>
                <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffffff' }}>KES {kit.price}</p>
                <div style={{ marginTop: '15px', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'left' }}>
                  <li>✓ Full HD Night Vision</li>
                  <li>✓ Mobile Remote Viewing</li>
                  <li>✓ Professional Cabling</li>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Project Showcase</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {projectPhotos.map((photo, index) => (
              <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b' }}>
                <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '30px', paddingBottom: '30px' }}>
          <p>© 2026 SecureLink Internet & CCTV Services.</p>
        </footer>
      </div>
    </main>
  )
}
