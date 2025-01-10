import React from 'react';
import './Contact.css';
import email from './assets/images/contact/email.png';
import linkedin from './assets/images/contact/linkedin.png';
import github from './assets/images/contact/github.png';

function Contact() {
  return (
    <section className="banner">
      <div className="slider" style={{ "--quantity": 3 }}>
        <div className="item" style={{ "--position": 1 }}>
          <a href="mailto:rene3phillips@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <a href="https://www.linkedin.com/in/rene3phillips/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <a href="https://github.com/rene3phillips" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>

      <div className="content" id="contact-me">
        <div className="contact-container">
          <h1 data-content="Contact">Contact</h1>
          <h2 className="me">me!</h2>
        </div>
        <div className="model"></div>
      </div>
    </section>
  );
}

export default Contact;