import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Editorial Hero */}
      <div className="page-hero contact-page-hero">
        <div className="container">
          <span className="brand-label">REACH OUT</span>
          <h1 className="contact-hero-title">
            Let's Start a <i>Conversation</i>
          </h1>
          <div className="title-divider"></div>
          <p className="contact-hero-sub">
            Whether you seek a bespoke masterpiece or wish to explore our heritage collections, 
            our advisors are dedicated to providing an unparalleled experience.
          </p>
        </div>
      </div>

      {/* Combined Contact & Form Section */}
      <section className="section-padding" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="contact-split-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left Info Column */}
            <div className="contact-info-col">
              <span className="brand-label">THE ATELIER</span>
              <h2 className="section-serif" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Visit <i>Us</i></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '50px', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                Experience the world of Oswal Jewellers in person. Our flagship boutique in Pune houses 
                our most exclusive collections in an environment of refined luxury. Let us help you find 
                or create your next heirloom.
              </p>

              <div className="contact-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                <div className="detail-item" style={{ display: 'flex', gap: '25px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginTop: '5px' }}></i>
                  <div>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Showroom Location</h4>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>Oswal Jewellers, Kasturi Chowk,<br/>Pune, Maharashtra 411002<br/>India</p>
                  </div>
                </div>

                <div className="detail-item" style={{ display: 'flex', gap: '25px' }}>
                  <i className="fa-regular fa-clock" style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginTop: '5px' }}></i>
                  <div>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Opening Hours</h4>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>Tuesday - Sunday: 10:00 AM - 8:30 PM<br/>Monday: Closed</p>
                  </div>
                </div>

                <div className="detail-item" style={{ display: 'flex', gap: '25px' }}>
                  <i className="fa-solid fa-envelope-open-text" style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginTop: '5px' }}></i>
                  <div>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '15px', color: 'var(--color-charcoal)' }}>Direct Enquiries</h4>
                    <div style={{ marginBottom: '20px' }}>
                      <p style={{ color: 'var(--color-gold)', fontWeight: '600', marginBottom: '5px' }}>Jewellery Enquiries:</p>
                      <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                        oswaljewel@gmail.com<br/>
                        <a href="tel:9767351211" style={{ color: 'inherit' }}>9767351211</a> / <a href="tel:9371704222" style={{ color: 'inherit' }}>9371704222</a>
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-gold)', fontWeight: '600', marginBottom: '5px' }}>Silver House Enquiries:</p>
                      <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                        oswalsilverhouse@gmail.com<br/>
                        <a href="tel:9607013888" style={{ color: 'inherit' }}>9607013888</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              <div className="contact-form-container" style={{ background: 'white', padding: '60px', boxShadow: 'var(--shadow-premium)', border: '1px solid var(--color-beige)' }}>
                <span className="brand-label">BESPOKE SERVICES</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '40px', fontWeight: '400' }}>Send an <i>Inquiry</i></h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully.'); }}>
                  <div style={{ marginBottom: '25px' }}>
                    <input type="text" placeholder="Your Full Name" style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '1px solid var(--color-beige)', outline: 'none', fontSize: '1.05rem', background: 'transparent' }} required />
                  </div>
                  <div style={{ marginBottom: '25px' }}>
                    <input type="email" placeholder="Your Email Address" style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '1px solid var(--color-beige)', outline: 'none', fontSize: '1.05rem', background: 'transparent' }} required />
                  </div>
                  <div style={{ marginBottom: '35px' }}>
                    <select style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '1px solid var(--color-beige)', outline: 'none', fontSize: '1.05rem', background: 'transparent', color: 'var(--color-text-muted)', cursor: 'pointer' }} required>
                      <option value="">Subject of Inquiry</option>
                      <option value="bespoke">Bespoke Jewelry Design</option>
                      <option value="wedding">Bridal Consultation</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '40px' }}>
                    <textarea placeholder="Your Message" style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '1px solid var(--color-beige)', outline: 'none', minHeight: '120px', resize: 'vertical', fontSize: '1.05rem', background: 'transparent' }} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-gold-outline" style={{ width: '100%', padding: '20px' }}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-visual" style={{ height: '500px', position: 'relative', overflow: 'hidden', background: '#e0e0e0' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2505527878366!2d73.8553653153549!3d18.517616987410427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fc281df6f%3A0xfecf2d47051dc5d8!2sKasturi%20Chowk%2C%20Raviwar%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Oswal Jewellers Location Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
