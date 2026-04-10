import { Briefcase, Building2, TrendingUp, Check } from "lucide-react";
import "../styles/SolutionsSection.css";

function SolutionsSection() {
  const audiences = [
    {
      icon: Building2,
      title: "Small Businesses",
      subtitle: "Running a business already demands your time.",
      description:
        "We handle your sales inquiries so you can focus on operations and growth.",
    },
    {
      icon: TrendingUp,
      title: "Growing Companies",
      subtitle:
        "As your business expands, sales management becomes more complex.",
      description:
        "Our systems scale with your business and keep your pipeline organized.",
    },
    {
      icon: Briefcase,
      title: "Busy Entrepreneurs",
      subtitle: "You shouldn't have to chase every lead yourself.",
      description:
        "Let Avaris manage your sales conversations while you focus on strategy and growth.",
    },
  ];

  const packageFeatures = [
    "24/7 inquiry handling",
    "Organized lead management",
    "Sales follow-up system",
    "Clear reporting dashboard",
  ];

  const reasons = [
    {
      title: "Real People Behind Every Conversation",
      description:
        "Behind every inquiry is a real person. Our team ensures every conversation is handled professionally and with care.",
    },
    {
      title: "Structured Sales Processes",
      description:
        "Sales should never rely on luck. We build structured systems that turn effort into predictable results.",
      hasStrong: true,
    },
    {
      title: "Reliable Support",
      description:
        "Consistency builds trust. Our team shows up every day to ensure your sales pipeline keeps moving.",
    },
    {
      title: "A True Growth Partner",
      description:
        "We don't just support your sales. We help you build stronger sales foundations that support long-term growth.",
      hasStrong: true,
    },
  ];

  return (
    <section id="solutions" className="solutions-section section">
      <div className="solutions-container">
        {/* Who This Is For */}
        <div className="section-header">
          <span className="section-tagline">Who This Is For</span>
          <h2 className="section-title">Built For Growing Businesses</h2>
        </div>

        <div className="solutions-grid">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div key={index} className="solution-card">
                <div className="solution-icon">
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                <h3 className="solution-title">{audience.title}</h3>
                <p className="solution-subtitle">{audience.subtitle}</p>
                <p className="solution-description">{audience.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Offer */}
        <div className="featured-section">
          <div className="featured-header">
            <span className="featured-eyebrow">Featured Offer</span>
            <h3 className="featured-main-title">Try the Avaris Sales System</h3>
          </div>

          <div className="featured-grid">
            <div className="featured-left">
              <h4 className="featured-title">Excel Fast Trial Package</h4>
              <p className="featured-description">
                Experience the Avaris system with our Excel Fast Trial Package.
              </p>
              <div className="featured-price">
                ₱9,999 <span>Trial Package</span>
              </div>
              <p className="package-note">
                Perfect for businesses that want to see how a structured sales
                system improves results.
              </p>
              <p className="setup-note">Setup within 48 hours.</p>
              <button className="btn-cta">Start Your Trial Today</button>
            </div>

            <div className="featured-right">
              <div className="package-card">
                <h4 className="package-title">Includes:</h4>
                <ul className="package-list">
                  {packageFeatures.map((feature, index) => (
                    <li key={index}>
                      <Check size={18} strokeWidth={3} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Avaris */}
        <div className="why-section">
          <div className="why-header">
            <span className="section-tagline">Why Avaris</span>
            <h3 className="why-title">
              Why Businesses Choose Avaris Sales Solutions
            </h3>
          </div>

          <div className="why-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="why-card">
                <h4 className="why-card-title">{reason.title}</h4>
                <p className="why-card-text">
                  {reason.hasStrong ? (
                    <>
                      {reason.title === "Structured Sales Processes" ? (
                        <>
                          Sales should never rely on luck.{" "}
                          <strong>
                            We build structured systems that turn effort into
                            predictable results.
                          </strong>
                        </>
                      ) : (
                        <>
                          We don't just support your sales.{" "}
                          <strong>
                            We help you build stronger sales foundations that
                            support long-term growth.
                          </strong>
                        </>
                      )}
                    </>
                  ) : (
                    reason.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
