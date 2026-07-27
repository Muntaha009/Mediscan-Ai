import { useState } from "react";

function Upload() {
  const [image, setImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
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
    </div>
  );
}

export default Upload;