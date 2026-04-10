import React from "react";
import { Target, RefreshCw, Heart, TrendingUp } from "lucide-react";
import "../styles/AboutSection.css";

const AboutSection: React.FC = () => {
  const values = [
    {
      title: "Discipline",
      description:
        "We approach sales with structure, organization, and accountability.",
      icon: Target,
    },
    {
      title: "Consistency",
      description: "Reliable processes produce reliable results.",
      icon: RefreshCw,
    },
    {
      title: "Care",
      description:
        "Behind every lead is a person and every conversation matters.",
      icon: Heart,
    },
    {
      title: "Growth",
      description:
        "Our mission is to support the long-term growth of every client we serve.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Header */}
        <div className="about-header">
          <span className="about-tagline">About</span>
          <h2 className="about-title">About Avaris Sales Solutions</h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Belief Statement */}
          <div className="belief-block">
            <p className="belief-label">
              Avaris Sales Solutions was built on a simple belief:
            </p>
            <blockquote className="belief-quote">
              Sales should run on systems, not chance.
            </blockquote>
          </div>

          {/* Problem Statement */}
          <div className="problem-block">
            <p className="about-text">
              Many businesses work hard to attract leads but struggle to manage
              them effectively.
            </p>
            <p className="about-text highlight">
              Missed messages, delayed replies, and inconsistent follow-ups
              quietly cost businesses valuable opportunities.
            </p>
          </div>

          {/* Solution Statement */}
          <div className="solution-block">
            <p className="about-text strong">
              Avaris exists to solve that problem.
            </p>
            <p className="about-text">
              Our team provides <strong>structured sales support</strong>,{" "}
              <strong>reliable systems</strong>, and{" "}
              <strong>dedicated people</strong> who ensure every inquiry
              receives attention.
            </p>
          </div>

          {/* Transformation Statement */}
          <div className="transformation-block">
            <p className="about-text">
              We help businesses{" "}
              <span className="text-accent">transform chaos into clarity</span>{" "}
              — turning scattered leads into organized opportunities and effort
              into predictable growth.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="closing-block">
            <p className="about-text">
              Because when your sales system works, your business moves forward
              with confidence.
            </p>
          </div>
        </div>

        {/* Brand Signature */}
        <div className="brand-signature">
          <div className="signature-line"></div>
          <h3 className="signature-name">Avaris Sales Solutions</h3>
          <p className="signature-tagline">We Sell, You Excel.</p>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="values-section">
        <div className="values-container">
          <div className="values-header">
            <span className="values-tagline">Our Principles</span>
            <h3 className="values-title">The Values That Drive Us</h3>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
