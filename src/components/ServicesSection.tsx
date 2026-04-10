import "../styles/ServicesSection.css";

function ServicesSection() {
  return (
    <section id="services" className="services-section section">
      <div className="accent-circle-1"></div>
      <div className="accent-circle-2"></div>

      <div className="services-container">
        <div className="section-header">
          <span className="section-tagline">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-header">
              <h3 className="service-title">24/7 Sales Support</h3>
              <p className="service-subtitle">
                Sales doesn't stop when the workday ends.
              </p>
            </div>
            <div className="service-body">
              <p className="service-description">
                Our team handles inquiries, messages, and leads around the clock
                so <strong>no opportunity is left waiting</strong>.
              </p>
              <h4 className="feature-list-title">What we do</h4>
              <ul className="feature-list">
                <li>Inquiry handling</li>
                <li>Customer replies</li>
                <li>Lead qualification</li>
                <li>Follow-up conversations</li>
              </ul>
              <div className="badge-container">
                <span className="badge-24-7">
                  <span className="pulse-dot"></span>
                  <span>Always On</span>
                </span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <h3 className="service-title">Lead Management</h3>
              <p className="service-subtitle">Every inquiry is valuable.</p>
            </div>
            <div className="service-body">
              <p className="service-description">
                We organize your leads into a clear, structured system so{" "}
                <strong>nothing slips through the cracks</strong>.
              </p>
              <h4 className="feature-list-title">Included</h4>
              <ul className="feature-list">
                <li>Lead tracking</li>
                <li>Lead categorization</li>
                <li>Follow-up scheduling</li>
                <li>Opportunity monitoring</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <h3 className="service-title">Sales Follow-Up Systems</h3>
              <p className="service-subtitle">
                Many deals are lost because no one followed up.
              </p>
            </div>
            <div className="service-body">
              <p className="service-description">
                We ensure every lead receives consistent, intentional follow-ups
                that <strong>keep conversations moving forward</strong>.
              </p>
              <h4 className="feature-list-title">Our approach</h4>
              <ul className="feature-list">
                <li>Timely follow-ups</li>
                <li>Structured communication</li>
                <li>Relationship building</li>
                <li>Deal progression tracking</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <h3 className="service-title">Sales Reporting & Insights</h3>
              <p className="service-subtitle">
                Sales data shouldn't be confusing.
              </p>
            </div>
            <div className="service-body">
              <p className="service-description">
                Our reporting system provides clear insights into your pipeline
                so <strong>you can make better decisions</strong>.
              </p>
              <h4 className="feature-list-title">You get</h4>
              <ul className="feature-list">
                <li>Clear dashboards</li>
                <li>Sales activity tracking</li>
                <li>Pipeline visibility</li>
                <li>Growth insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
