import "./Stats.css";

function Stats() {
  return (
    <div className="stats">

      <div className="stat-card">
        <h2>📄</h2>
        <h3>500+</h3>
        <p>Prescriptions Scanned</p>
      </div>

      <div className="stat-card">
        <h2>🤖</h2>
        <h3>1000+</h3>
        <p>AI Explanations</p>
      </div>

      <div className="stat-card">
        <h2>⚠️</h2>
        <h3>250+</h3>
        <p>Drug Safety Checks</p>
      </div>

      <div className="stat-card">
        <h2>💊</h2>
        <h3>300+</h3>
        <p>Medicine Reminders</p>
      </div>

    </div>
  );
}

export default Stats;