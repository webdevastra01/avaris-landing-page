import { Briefcase, Building2, TrendingUp } from "lucide-react";
import "../styles/SolutionsSection.css";

function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: "For Small Businesses",
      subtitle: "Running a business already demands your time.",
      description:
        "We handle your sales inquiries so you can focus on operations and growth.",
    },
    {
      icon: TrendingUp,
      title: "For Growing Companies",
      subtitle:
        "As your business expands, sales management becomes more complex.",
      description: "We provide systems and support that scale with you.",
    },
    {
      icon: Briefcase,
      title: "For Busy Entrepreneurs",
      subtitle:
        "You shouldn't have to answer every message or chase every lead.",
      description:
        "Let Avaris manage your sales conversations while you focus on strategy.",
    },
  ];

  return (
    <section id="solutions" className="solutions-section section">
      <div className="solutions-container">
        <div className="section-header">
          <span className="section-tagline">Solutions</span>
          <h2 className="section-title">Solutions For Growing Businesses</h2>
          <p
            className="text-body"
            style={{ marginTop: "var(--space-md)", fontSize: "1.1rem" }}
          >
            Whether you're a startup, SME, or growing team, Avaris helps you
            build a reliable sales engine.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="solution-card">
                <div className="solution-icon">
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-subtitle">{solution.subtitle}</p>
                <p className="solution-description">{solution.description}</p>
              </div>
            );
          })}
        </div>
        <div className="featured-section">
          <div className="featured-grid">
            <div className="featured-left">
              <span className="featured-badge">Featured Offer</span>
              <h3 className="featured-title">Excel Fast Trial Package</h3>
              <p className="featured-description">
                Experience the Avaris system with our Excel Fast Trial Package.
              </p>
              <div className="featured-price">
                ₱9,999 <span>Trial Package</span>
              </div>
              <p className="package-note">
                This is the fastest way to see how a structured sales system can
                improve your business.
              </p>
              <button className="btn-cta">Start Your Trial Today</button>
            </div>

            <div className="featured-right">
              <div className="package-card">
                <h4 className="package-title">Includes:</h4>
                <ul className="package-list">
                  <li>24/7 inquiry handling</li>
                  <li>Organized lead management</li>
                  <li>Sales follow-up system</li>
                  <li>Clear reporting dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="why-section">
          <div className="why-header">
            <span
              className="section-tagline"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Why Avaris
            </span>
            <h3 className="why-title">Why Businesses Choose Avaris</h3>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h4 className="why-card-title">Real People Behind the System</h4>
              <p className="why-card-text">
                Behind every inquiry is a real person. Our team ensures every
                conversation is handled with care.
              </p>
            </div>

            <div className="why-card">
              <h4 className="why-card-title">Structured Sales Processes</h4>
              <p className="why-card-text">
                Sales should never depend on luck.{" "}
                <strong>
                  We build reliable systems that turn effort into results.
                </strong>
              </p>
            </div>

            <div className="why-card">
              <h4 className="why-card-title">Consistency & Reliability</h4>
              <p className="why-card-text">
                Reliability isn't something you promise once.{" "}
                <strong>It's something you show every day</strong> through
                consistent follow-ups and dependable support.
              </p>
            </div>

            <div className="why-card">
              <h4 className="why-card-title">A Partner In Your Growth</h4>
              <p className="why-card-text">
                We're not just a service provider.{" "}
                <strong>We're a growth partner</strong> that helps your business
                build stronger sales foundations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
