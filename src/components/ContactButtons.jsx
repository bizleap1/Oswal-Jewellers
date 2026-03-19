import React from 'react';

const ContactButtons = () => {
  const openWhatsApp = () => {
    const phoneNumber = "8600930308";
    const message = "Hello! I'm interested in your jewellery collection.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const openPhone = () => {
    window.location.href = "tel:8600930308";
  };

  return (
    <div className="contact-buttons">
      <button 
        onClick={openWhatsApp}
        className="contact-btn whatsapp" 
        title="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <button 
        onClick={openPhone}
        className="contact-btn phone" 
        title="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
      </button>
    </div>
  );
};

export default ContactButtons;
