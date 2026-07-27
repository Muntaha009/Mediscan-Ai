import { useState } from "react";
import Tesseract from "tesseract.js";
import AIExplanation from "../components/AIExplanation";

function Upload() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);

    setLoading(true);

    const result = await Tesseract.recognize(
  file,
  "eng",
  {
    logger: (m) => console.log(m),
  }
);

    setText(result.data.text);
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Upload Your Prescription</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prescription Preview</h3>

          <img
            src={image}
            alt="Prescription"
            width="300"
            style={{ border: "2px solid #ccc", borderRadius: "10px" }}
          />
        </div>
      )}

      {loading && (
        <p style={{ marginTop: "20px" }}>
          🔍 Reading prescription...
        </p>
      )}

      {text && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            width: "80%",
            marginInline: "auto",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            background: "#f8f8f8",
          }}
        >
          <h3>Extracted Text</h3>

          <pre style={{ whiteSpace: "pre-wrap" }}>
            {text}
          </pre>
        </div>
      )}
     <AIExplanation text={text} /> 
    </div>
  );
}

export default Upload;