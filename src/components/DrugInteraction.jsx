import Card from "./Card";
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
  <Card title="⚠️ Drug Interaction Checker">
    <p>{message}</p>

    <p style={{ color: "red", fontWeight: "bold" }}>
      Educational purpose only.
    </p>
  </Card>
);
}

export default DrugInteraction;