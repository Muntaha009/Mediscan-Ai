import Card from "./Card";
function PatientHistory({ history }) {
  return (
    <Card title="📋 Patient History">
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
    </Card>
  );
}

export default PatientHistory;