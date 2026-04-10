import { useState, useEffect } from "react";
import "../styles/NavigationBar.css";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: any, href: any) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          <span className="navbar__logo-icon">A</span>
          <span className="navbar__logo-text">
            Avaris <span className="navbar__logo-accent">Sales</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar__menu">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar__actions">
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar__toggle ${isMobileMenuOpen ? "navbar__toggle--active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${isMobileMenuOpen ? "navbar__mobile--open" : ""}`}
      >
        <ul className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__mobile-item">
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__mobile-item">
            <a
              href="#contact"
              className="navbar__mobile-cta"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigationbar;
