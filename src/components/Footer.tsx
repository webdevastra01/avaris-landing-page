import React from "react";
import { Mail, Phone } from "lucide-react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">Avaris Sales Solutions</h3>
            <p className="footer-tagline">We Sell, You Excel.</p>
            <p className="footer-description">
              Helping businesses build reliable sales systems through structured
              processes, consistent follow-ups, and dedicated support.
            </p>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>

            <a
              href="mailto:avarissales@gmail.com"
              className="footer-contact-item"
            >
              <Mail size={18} strokeWidth={2} />
              <span>avarissales@gmail.com</span>
            </a>

            <a href="tel:+639129622537" className="footer-contact-item">
              <Phone size={18} strokeWidth={2} />
              <span>+63 912 962 2537</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Avaris Sales Solutions. All rights reserved.
          </p>
          <p className="footer-location">Davao City, Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
