import "../styles/TrustProblemSection.css";

const TrustProblemSection = () => {
  const problems = [
    "Slow responses to inquiries",
    "Missed follow-ups with interested clients",
    "Disorganized lead tracking",
    "Conversations that were never continued",
  ];

  return (
    <section id="problem" className="trust-problem">
      <div className="trust-problem__container">
        {/* Section Header */}
        <div className="trust-problem__header">
          <span className="trust-problem__eyebrow">The Hidden Problem</span>
          <h2 className="trust-problem__title">
            Why Businesses Lose Sales{" "}
            <span className="trust-problem__highlight">
              Without Realizing It
            </span>
          </h2>
        </div>

        {/* Opening Statement */}
        <div className="trust-problem__intro">
          <p className="trust-problem__lead">Sales rarely fail loudly.</p>
          <p className="trust-problem__sublead">
            They disappear quietly between small gaps in your process:
          </p>
        </div>

        {/* Problem Grid */}
        <div className="trust-problem__grid">
          {problems.map((problem, index) => (
            <div key={index} className="trust-problem__item">
              <div className="trust-problem__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <p className="trust-problem__text">{problem}</p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="trust-problem__impact">
          <p className="trust-problem__warning">
            By the time you realize it, potential customers have already moved
            on.
          </p>
        </div>

        {/* Solution Transition */}
        <div className="trust-problem__solution">
          <div className="trust-problem__divider">
            <span className="trust-problem__divider-line"></span>
            <span className="trust-problem__divider-icon">→</span>
            <span className="trust-problem__divider-line"></span>
          </div>

          <div className="trust-problem__statements">
            <p className="trust-problem__truth-bold">The truth is simple:</p>
            <p className="trust-problem__falsehood">
              More marketing won't fix this.
            </p>
            <p className="trust-problem__truth">
              What you need is a sales system that captures every opportunity.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="trust-problem__closing">
          <p className="trust-problem__mission">
            That's exactly what <strong>Avaris Sales Solutions</strong>{" "}
            provides.
          </p>
          <p className="trust-problem__sub-mission">
            We help businesses build structured sales processes that turn
            scattered leads into predictable revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustProblemSection;
