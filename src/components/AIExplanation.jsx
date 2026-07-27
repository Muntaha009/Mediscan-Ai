import Card from "./Card";
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
  <Card title="🤖 AI Medicine Analysis">
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
  </Card>
);
}

export default AIExplanation;