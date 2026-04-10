import "../styles/ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      title: "24/7 Sales Support",
      subtitle: "Sales doesn't stop when the workday ends.",
      description:
        "Our team handles your inquiries around the clock so every customer receives a timely response.",
      features: [
        "Inquiry handling",
        "Customer message responses",
        "Lead qualification",
        "Initial sales conversations",
      ],
      hasBadge: true,
    },
    {
      title: "Lead Management",
      subtitle: "Every lead deserves proper attention.",
      description:
        "We organize and manage your leads so your pipeline remains clear and structured.",
      features: [
        "Lead tracking",
        "Lead categorization",
        "Opportunity monitoring",
        "Follow-up scheduling",
      ],
      hasBadge: false,
    },
    {
      title: "Sales Follow-Up Systems",
      subtitle: "Many deals are lost simply because no one followed up.",
      description:
        "Our system ensures consistent and intentional follow-ups that move conversations forward.",
      features: [
        "Timely follow-ups",
        "Structured communication",
        "Relationship building",
        "Deal progression tracking",
      ],
      hasBadge: false,
    },
    {
      title: "Sales Reporting & Insights",
      subtitle: "Sales data should guide decisions, not create confusion.",
      description:
        "Our reporting tools give you clear visibility into your pipeline and performance.",
      features: [
        "Visual dashboards",
        "Sales activity tracking",
        "Pipeline visibility",
        "Growth insights",
      ],
      hasBadge: false,
    },
  ];

  return (
    <section id="services" className="services-section section">
      <div className="accent-circle-1"></div>
      <div className="accent-circle-2"></div>

      <div className="services-container">
        <div className="section-header">
          <span className="section-tagline">Our Services</span>
          <h2 className="section-title">Our Sales Support Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
              </div>
              <div className="service-body">
                <p className="service-description">{service.description}</p>
                <h4 className="feature-list-title">Services include:</h4>
                <ul className="feature-list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                {service.hasBadge && (
                  <div className="badge-container">
                    <span className="badge-24-7">
                      <span className="pulse-dot"></span>
                      <span>Always On</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
