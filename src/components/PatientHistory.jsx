function PatientHistory({ history }) {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#f8f9fa",
      }}
    >
      <h2>📋 Patient History</h2>

      {history.length === 0 ? (
        <p>No previous prescriptions found.</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "15px",
              paddingBottom: "10px",
            }}
          >
            <strong>🕒 {item.date}</strong>

            <p>{item.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PatientHistory;