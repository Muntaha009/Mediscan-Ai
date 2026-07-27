function AIExplanation({ text }) {
  if (!text) return null;

  const lowerText = text.toLowerCase();

  const medicines = [];

  if (lowerText.includes("paracetamol")) {
    medicines.push(
      "💊 Paracetamol: Commonly used to reduce fever and relieve mild to moderate pain."
    );
  }

  if (lowerText.includes("amoxicillin")) {
    medicines.push(
      "💊 Amoxicillin: An antibiotic commonly prescribed to treat bacterial infections."
    );
  }

  if (lowerText.includes("cetirizine")) {
    medicines.push(
      "💊 Cetirizine: Often used to relieve allergy symptoms such as sneezing and itching."
    );
  }

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
      <h2>🤖 AI Medicine Analysis</h2>

      {medicines.length > 0 ? (
        <ul>
          {medicines.map((medicine, index) => (
            <li key={index}>{medicine}</li>
          ))}
        </ul>
      ) : (
        <p>No recognized medicine names were found in the extracted text.</p>
      )}

      <hr />

      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ This information is for educational purposes only and is not a
        substitute for professional medical advice.
      </p>
    </div>
  );
}

export default AIExplanation;