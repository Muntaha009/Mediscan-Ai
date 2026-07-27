import "../styles/UploadBox.css";

function UploadBox({ handleImage }) {
  return (
    <label className="upload-box">
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <div className="upload-icon">🩺</div>

      <div className="upload-text">
        <strong>Drag & Drop</strong> your prescription here
        <br />
        <br />
        or <strong>Click to Upload</strong>
      </div>
    </label>
  );
}

export default UploadBox;