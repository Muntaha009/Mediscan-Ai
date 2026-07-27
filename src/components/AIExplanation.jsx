function AIExplanation({ text }) {
  if (!text) return null;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#eef7ff",
      }}
    >
      <h2>🤖 AI Explanation</h2>

      <p><strong>Extracted Prescription:</strong></p>

      <p>{text}</p>

      <hr />

      <h3>General Analysis</h3>

      <ul>
        <li>✅ Prescription text has been detected successfully.</li>
        <li>💊 The prescription may contain one or more medicines.</li>
        <li>📖 Please verify medicine names with your doctor or pharmacist.</li>
        <li>⚠️ Never change the prescribed dosage without medical advice.</li>
      </ul>

      <p style={{ color: "red", fontWeight: "bold" }}>
        Educational purpose only. This is not a medical diagnosis.
      </p>
    </div>
  );
}

export default AIExplanation;