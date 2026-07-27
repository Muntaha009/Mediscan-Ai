function DrugInteraction({ text }) {
  if (!text) return null;

  const lowerText = text.toLowerCase();

  let message = "✅ No common drug interactions detected.";

  if (
    lowerText.includes("paracetamol") &&
    lowerText.includes("ibuprofen")
  ) {
    message =
      "⚠️ Paracetamol and Ibuprofen can sometimes be taken together, but only as advised by a healthcare professional.";
  }

  if (
    lowerText.includes("amoxicillin") &&
    lowerText.includes("warfarin")
  ) {
    message =
      "⚠️ Amoxicillin may affect the action of Warfarin. Medical supervision is recommended.";
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff8e1",
      }}
    >
      <h2>⚠️ Drug Interaction Checker</h2>

      <p>{message}</p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        This is an educational demonstration and should not replace professional medical advice.
      </p>
    </div>
  );
}

export default DrugInteraction;