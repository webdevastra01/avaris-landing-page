import "../styles/HeroSection.css";
import heroImage from "../assets/hero_section.png";

const HeroSection = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image */}
      <div className="hero__background">
        <img
          src={heroImage}
          alt="Professional business team"
          className="hero__bg-image"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Content Card Overlay */}
      <div className="hero__container">
        <div className="hero__content-card">
          {/* Main Headline */}
          <h1 className="hero__headline">
            24/7 Outsourced Sales Support That Turns Leads Into{" "}
            <span className="hero__highlight">Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subheadline">
            Stop Missing Opportunities. Start Closing More Deals.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <a
              href="#contact"
              className="hero__cta hero__cta--primary"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="hero__cta hero__cta--secondary"
              onClick={(e) => scrollToSection(e, "#services")}
            >
              Start the Excel Fast Trial
            </a>
          </div>

          {/* CTA Note */}
          <p className="hero__cta-note">
            No commitment required • Setup within 48 hours
          </p>
        </div>
      </div>

      {/* Trust Metrics Section - Below the fold */}
      <div className="hero__trust-section">
        <div className="hero__trust-container">
          {/* Problem-Solution Text */}
          <div className="hero__body-text">
            <p className="hero__text-muted">
              Most businesses don't struggle because they lack leads. They
              struggle because inquiries are missed, replies are delayed, and
              follow-ups never happen.
            </p>
            <p className="hero__text-body">
              <strong>That's where Avaris Sales Solutions comes in.</strong> We
              provide 24/7 outsourced sales support, lead management, and
              structured follow-ups so every opportunity receives the attention
              it deserves — even when you're offline.
            </p>
            <p className="hero__text-body">
              With Avaris managing your sales pipeline, your business can
              respond faster, follow up better, and close more deals
              consistently.
            </p>
            <p className="hero__tagline">We Sell, You Excel.</p>
          </div>
          
          <h2 className="hero__trust-title">
            Built to Capture Every Opportunity
          </h2>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">24/7</span>
              <span className="hero__stat-label">Sales Support</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Lead Coverage</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">0</span>
              <span className="hero__stat-label">Missed Opportunities</span>
            </div>
          </div>

          <p className="hero__trust-tagline">
            When your sales system works around the clock, your business never
            misses a chance to grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
