import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>🩺 MediScan AI</h1>

      <p>
        Upload your medical prescription and let AI explain medicines,
        identify possible drug interactions, and help you manage your medication safely.
      </p>

      <div className="hero-buttons">
        <button>📄 Upload Prescription</button>
        <button className="secondary">ℹ️ Learn More</button>
      </div>
    </div>
  );
}

export default Hero;