import React from 'react';

const Testimonials = () => {
  const videos = [
    { id: 1, src: "/images/testimonials/testimonials 1.mp4", title: "Client Story 1" },
    { id: 2, src: "/images/testimonials/testimonial 2.mp4", title: "Client Story 2" },
    { id: 3, src: "/images/testimonials/testimonial 3 .mp4", title: "Client Story 3" },
    { id: 4, src: "/images/testimonials/testimonial 4.mp4", title: "Client Story 4" },
  ];

  return (
    <section className="testimonials-section section-padding" style={{ background: 'var(--color-off-white)' }}>
      <div className="container">
        <div className="section-header-centered">
          <span className="brand-label">HEARTFELT MOMENTS</span>
          <h2>Client <i>Testimonials</i></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Real stories from our beloved patrons who chose Oswal Jewellers for their most precious milestones.
          </p>
          <div className="title-divider"></div>
        </div>

        <div className="testimonials-video-grid">
          {videos.map((video) => (
            <div key={video.id} className="testimonial-video-card">
              <div className="video-wrapper">
                <video 
                  src={video.src} 
                  muted 
                  loop 
                  autoPlay
                  playsInline
                  className="testimonial-video"
                />
                <div className="video-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className="testimonial-info">
                <h3>{video.title}</h3>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
