import { useState } from "react";
import Card from "./Card";
function MedicineReminder() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);

  const addReminder = () => {
    if (!medicine || !time) {
      alert("Please enter medicine name and time.");
      return;
    }

    setReminders([
      ...reminders,
      { medicine, time }
    ]);

    setMedicine("");
    setTime("");
  };

 return (
  <Card title="💊 Medicine Reminder">
      <h2>💊 Medicine Reminder</h2>

      <input
        type="text"
        placeholder="Medicine Name"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />

      <br /><br />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <button onClick={addReminder}>
        Add Reminder
      </button>

      <hr />

      <h3>Saved Reminders</h3>

      <ul>
        {reminders.map((item, index) => (
          <li key={index}>
            💊 {item.medicine} — ⏰ {item.time}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default MedicineReminder;