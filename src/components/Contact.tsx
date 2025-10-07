import React, { useState } from 'react';
import './Contact.css';

 
import facebookIcon from '../assets/fb.png';
import emailIcon from '../assets/email.png';
import telegramIcon from '../assets/tg.png';

const CONTACT_LINKS = {
  facebook: 'https://www.facebook.com/lynlyn.rocero.71',
  email: 'mailto:orlynrocero@gmail.com',
  telegram: 'https://t.me/ors12',
};

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessageSent(false); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
     
    setMessageSent(true); 
    setFormData({ name: '', email: '', message: '' });

    
    setTimeout(() => {
        setMessageSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-title-underline"></div>

      <div className="contact-content-wrapper">
        
        
        <div className="contact-form-side">
          <div className="form-box">
            <h3 className="form-heading">Send me a message</h3>
            {messageSent && (
                <p className="success-message">Message received successfully! I'll be in touch soon. </p>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows={5}
              ></textarea>
              
              <button type="submit" className="form-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

       
        <div className="contact-icons-side">
          <h3 className="contact-social-heading">Connect with me</h3>
          
          <div className="social-links-grid">
              <a 
                href={CONTACT_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-card"
              >
                <img src={facebookIcon} alt="Facebook Icon" className="contact-icon-img" />
                <span className="contact-name">Facebook</span>
              </a>

              <a 
                href={CONTACT_LINKS.email} 
                className="contact-item-card"
              >
                <img src={emailIcon} alt="Email Icon" className="contact-icon-img" />
                <span className="contact-name">Email</span>
              </a>

              <a 
                href={CONTACT_LINKS.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-card"
              >
                <img src={telegramIcon} alt="Telegram Icon" className="contact-icon-img" />
                <span className="contact-name">Telegram</span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;