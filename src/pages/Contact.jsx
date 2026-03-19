import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="split-section" style={{ marginTop: '40px', background: 'var(--bg-card)' }}>
        <div className="split-text">
          <h2>Let's talk.</h2>
          <p style={{ marginBottom: '40px' }}>Have a question about a product, shipping, or returns? We're here to help.</p>

          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Showroom</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-taupe)' }}>Kasturi Chowk, Pune<br />India</p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Get in touch</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-taupe)' }}>Email: hello@oswal.com<br />Phone: 8600930308</p>
          </div>
        </div>

        <div className="split-text" style={{ background: 'var(--bg-main)' }}>
          <h3 style={{ marginBottom: '20px' }}>Send us a message</h3>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your message..." required></textarea>
            <button type="submit" className="btn btn-solid" style={{ alignSelf: 'flex-start' }}>Submit details</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
