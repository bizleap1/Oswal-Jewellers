import React from 'react';

const FloatingBeacons = () => {
  const openWhatsApp = () => {
    const phoneNumber = "9767351211";
    const message = "Hello! I'm interested in your jewellery collection.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const openPhone = () => {
    window.location.href = "tel:9767351211";
  };

  return (
    <div className="floating-beacons">
      <button 
        onClick={openWhatsApp}
        className="beacon-btn whatsapp" 
        title="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="tooltip">WhatsApp</span>
      </button>
      <button 
        onClick={openPhone}
        className="beacon-btn phone" 
        title="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
        <span className="tooltip">Call Oswal</span>
      </button>
    </div>
  );
};

export default FloatingBeacons;
