import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span style={{ fontSize: "28px" }}>🩺</span>
        <h2>MediScan AI</h2>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">History</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default Navbar;