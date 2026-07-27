import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>🩺 MediScan AI</h2>

      <p>
        AI-powered prescription analysis to help patients understand
        their medicines safely.
      </p>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 MediScan AI | Made with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;