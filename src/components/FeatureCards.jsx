import "./FeatureCards.css";

function FeatureCards() {
  return (
    <div className="features">
      <div className="feature-card">
        <h2>🔍 OCR Technology</h2>
        <p>
          Extracts text from printed and handwritten prescriptions.
        </p>
      </div>

      <div className="feature-card">
        <h2>🤖 AI Medicine Analysis</h2>
        <p>
          Explains medicines in simple language for patients.
        </p>
      </div>

      <div className="feature-card">
        <h2>⚠️ Drug Safety</h2>
        <p>
          Checks possible medicine interactions and warnings.
        </p>
      </div>
    </div>
  );
}

export default FeatureCards;