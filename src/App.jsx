import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to MediScan AI</h1>

        <p>
          Upload your doctor's prescription and let AI explain your medicines
          in simple language.
        </p>

        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Upload Prescription
        </button>
      </div>
    </>
  );
}

export default App;