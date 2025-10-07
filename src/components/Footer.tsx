import React from 'react';
import '../styles/footer.css';
import iso_27001 from '../assets/iso_27001.png';
import iso_9001 from '../assets/iso_9001.png';
import logo from '../assets/logo.png'; // Make sure you import the logo correctly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column footer-logo">
        <img src={logo} alt="Joble logo" className="footer-logo-img" />
        <p className="newsletter-text">
          Subscribe to our Newsletter to never miss a thing
        </p>
        <div className="input_email">
          <input type="email" placeholder="Enter your email" />
          <button className="submit_email" type="submit">Subscribe</button>
        </div>
      </div>

      <div className="footer-column">
        <h3>Our Platform</h3>
        <ul>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Our Relationships</h3>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Get Started</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <div className="footer-column contact-us">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="mailto:support@joble.app">support@joble.app</a></li>
          <li>
            228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301,
            United States of America
          </li>
          <li>Benoordenhoutseweg 46, 2596 BC Den Haag, Netherlands</li>
        </ul>
        <div className="iso">
          <img src={iso_27001} alt="ISO 27001 certification" />
          <img src={iso_9001} alt="ISO 9001 certification" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
