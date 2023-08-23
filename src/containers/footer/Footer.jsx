import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className='gpt3__footer-header'>
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-info">
        <div className="gpt3__footer-info-brand">
          <img src={logo} alt="logo" />
          <h5>Flowmark, All Rights Reserved</h5>
        </div>
        <div className="gpt3__footer-info-links">
          <h4>Links</h4>
          <h5>Overons</h5>
          <h5>Social Media</h5>
          <h5>Counters</h5>
          <h5>Contact</h5>
        </div>
        <div className="gpt3__footer-info-company">
          <h4>Company</h4>
          <h5>Terms & Conditions</h5>
          <h5>Privacy Policy</h5>
          <h5>Contact</h5>
        </div>
        <div className="gpt3__footer-info-contact">
          <h4>Get in touch</h4>
          <h5>Adresss:</h5>
          <h5>Phone Number:</h5>
          <h5>Email:</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
