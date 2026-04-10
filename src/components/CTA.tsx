import { ArrowRight, Zap } from "lucide-react";
import "../styles/CTA.css";

function CTA() {
  return (
    <section className="final-cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Strengthen Your Sales System?</h2>

        <div className="cta-text-blocks">
          <p className="cta-text">
            If sales feels unpredictable or overwhelming...
          </p>
          <p className="cta-text highlight">
            It may be the system behind them.
          </p>
          <p className="cta-text">
            Let Avaris help you turn missed opportunities...
          </p>
        </div>

        <div className="cta-buttons">
          <button className="btn-cta-primary">
            <span>Book a Consultation</span>
            <ArrowRight size={20} />
          </button>

          <button className="btn-cta-secondary">
            <Zap size={20} />
            <span>Start the Excel Fast Trial</span>
          </button>
        </div>

        <p className="cta-trust">No commitment required • Setup in 48 hours</p>
      </div>
    </section>
  );
}

export default CTA;
