import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | CCTV & Networking Projects Thika',
  description: 'Certified CCTV & Internet installation in Thika, Nairobi, and Kiambu. From Home Kits to Apartment Networking.',
}

export default function Home() {
  const myNumber = "254704770170"; 
  
  const waCctvQuote = encodeURIComponent("Hi SecureLink, I need a professional CCTV quote for my property.");
  const waWifiEnquiry = encodeURIComponent("Hi SecureLink, I am enquiring about Apartment Internet installation.");

  const kits = [
    { cameras: 3, price: "25,000", feat: "Home Starter" },
    { cameras: 4, price: "32,000", feat: "Full Residence" },
    { cameras: 6, price: "45,000", feat: "Business Basic" },
    { cameras: 8, price: "58,000", feat: "Commercial Pro" },
    { cameras: 10, price: "72,000", feat: "Enterprise" }
  ];

  // Updated to exactly 4 specific project categories
  const galleryImages = [
    { url: '/work/photo1.jpg', title: 'Network Infrastructure' },
    { url: '/work/photo2.jpg', title: 'Camera Inventory' },
    { url: '/work/photo3.jpg', title: 'Monitoring Station' },
    { url: '/work/photo4.jpg', title: 'Turbo HD DVRs' }
  ];

  return (
    <main style={{ backgroundColor: '#0a192f', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#0a192f', borderBottom: '2px solid #10b981', padding: '15px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ fontWeight: '900', fontSize: '1.4rem', letterSpacing: '1px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>CALL SPECIALIST</a>
          </div>
          <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', whiteSpace: 'nowrap', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <a href="#internet" style={{ color: '#ffffff', textDecoration: 'none' }}>Apartment Internet</a>
            <a href="#kits" style={{ color: '#ffffff', textDecoration: 'none' }}>CCTV Installation</a>
            <a href={`https://wa.me/${myNumber}?text=${waCctvQuote}`} style={{ color: '#10b981', textDecoration: 'none' }}>Request Quotation</a>
            <a href={`https://wa.me/${myNumber}?text=${waWifiEnquiry}`} style={{ color: '#10b981', textDecoration: 'none' }}>WiFi Enquiry</a>
          </div>
        </div>
      </nav>

      <div style={{ padding: '40px 20px' }}>
        
        {/* HERO */}
        <section style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', lineHeight: '1.2' }}>Secure Your Future With <br/><span style={{ color: '#10b981' }}>Expert Technology</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 30px' }}>Thika's leading provider for high-definition surveillance and seamless apartment internet infrastructure.</p>
          <a href={`https://wa.me/${myNumber}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* TRUST BUILDERS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {['Professional Finish', 'Remote Access', 'After-Sales Care'].map((item) => (
            <div key={item} style={{ padding: '25px', backgroundColor: '#112240', borderRadius: '12px', textAlign: 'center', borderBottom: '3px solid #10b981' }}>
               <h3 style={{ color: '#10b981', fontSize: '1.1rem', marginBottom: '10px' }}>{item}</h3>
               <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>High-quality standards and technical support for all Thika & Nairobi installations.</p>
            </div>
          ))}
        </section>

        {/* APARTMENT INTERNET */}
        <section id="internet" style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '40px', backgroundColor: '#112240', borderRadius: '15px', borderRight: '6px solid #10b981' }}>
          <h2 style={{ color: '#10b981', marginTop: 0 }}>Apartment Internet Infrastructure</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#94a3b8' }}>
            We install structured network cabling and managed WiFi systems for residential blocks. Deliver high-speed internet to every unit with professional management.
          </p>
        </section>

        {/* CCTV PACKAGES */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 'bold' }}>{kit.feat}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '8px 0' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff' }}>KES {kit.price}</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '5px' }}>Includes Hardware & Labor</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOUR IMAGE GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {galleryImages.map((img, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b' }}>
                <img 
                  src={img.url} 
                  alt={img.title} 
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/500x400/112240/10b981?text=${encodeURIComponent(img.title)}`;
                  }}
                />
                <div style={{ padding: '15px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', color: '#94a3b8' }}>
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAP & FOOTER */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <div style={{ width: '100%', height: '300px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <iframe src="http://googleusercontent.com/maps.google.com/thika" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '60px', fontSize: '0.8rem' }}>
          <p style={{ fontWeight: 'bold', color: '#94a3b8', marginBottom: '5px' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  )
}
