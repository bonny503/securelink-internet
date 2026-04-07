import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureLink | CCTV & Networking Projects Kenya',
  description: 'Certified CCTV & Internet installation in Thika, Nairobi, Kiambu, and Mombasa. From Home Kits to Apartment Networking.',
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

  const galleryPhotos = [
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
            <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '1px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></div>
            <a href={`tel:+${myNumber}`} style={{ backgroundColor: '#10b981', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>CALL SPECIALIST</a>
          </div>
          <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', whiteSpace: 'nowrap', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
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
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2' }}>Secure Your Future With <br/><span style={{ color: '#10b981' }}>Expert Technology</span></h1>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px' }}>Leading provider for high-definition surveillance and seamless apartment internet infrastructure across Kenya.</p>
          <a href={`https://wa.me/${myNumber}`} style={{ border: '2px solid #10b981', color: '#10b981', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE CONSULTATION</a>
        </section>

        {/* TRUST BUILDERS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Professional Finish</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Clean, hidden-wire installations using professional trunking and conduit for maximum security.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>Remote Access</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Monitor your property from anywhere in the world with specialized mobile viewing configurations.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#112240', borderRadius: '15px', textAlign: 'center' }}>
             <h3 style={{ color: '#10b981' }}>After-Sales Care</h3>
             <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Full 12-month technical support and hardware warranty for complete peace of mind.</p>
          </div>
        </section>

        {/* APARTMENT INTERNET */}
        <section id="internet" style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '50px', backgroundColor: '#112240', borderRadius: '20px', borderRight: '8px solid #10b981' }}>
          <h2 style={{ color: '#10b981', marginTop: 0 }}>Apartment Internet Infrastructure</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            Specialized network deployment for residential blocks and commercial buildings. We handle everything from fiber distribution to communal mesh WiFi.
          </p>
        </section>

        {/* CCTV PACKAGES */}
        <section id="kits" style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Full Installation Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {kits.map((kit) => (
              <div key={kit.cameras} style={{ padding: '25px 15px', borderRadius: '12px', backgroundColor: '#112240', border: '1px solid #1e293b', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>{kit.feat}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '10px 0' }}>{kit.cameras} Cameras</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>KES {kit.price}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '10px' }}>Inc. Hardware & Labor</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Technical Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {galleryPhotos.map((photo, i) => (
              <div key={i} style={{ backgroundColor: '#112240', borderRadius: '10px', overflow: 'hidden', border: '1px solid #1e293b' }}>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300/112240/10b981?text=SecureLink+Project"; }}
                />
                <p style={{ padding: '10px', textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>{photo.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UPDATED MULTI-LOCATION MAP */}
        <section style={{ maxWidth: '1100px', margin: '0 auto 100px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>National Service Coverage</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Providing expert technical solutions in Nairobi, Kiambu, and Mombasa.</p>
          <div style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', border: '2px solid #1e293b' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1538356.96962283!2d37.9405625!3d-2.6105556!3m2!1i1024!2i768!4f13.1!2m1!1sNairobi%2C%20Kiambu%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1712500000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#475569', paddingBottom: '60px' }}>
          <p style={{ fontWeight: 'bold', color: '#94a3b8' }}>SECURELINK KENYA</p>
          <p>© 2026. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  )
}
