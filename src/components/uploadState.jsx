import { useRef, useState } from "react";
import { uploadBlob } from "./../firebase";

const UploadState = () => {
  const [uploadImage, setUploadImage] = useState("");
  const uploadRef = useRef();

  const handleUploadBtnClick = () => {
    uploadRef.current.click();
  };

  const handleUpload = () => {
    const imageBlob = uploadRef.current.files[0];
    if (imageBlob) uploadBlob(imageBlob);
  };

  return (
    <div className="upload-state">
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png,...</p>

      <div className="upload-section">
        <img src="./image.svg" alt="" />

        {uploadImage && <img className="upload-img" src={uploadImage} alt="" />}

        <p>Drag & Drop your image here</p>
      </div>

      <span>or</span>

      <input type="file" ref={uploadRef} onChange={handleUpload} hidden />
      <button onClick={handleUploadBtnClick}>Choose a file</button>
    </div>
  );
};

export default UploadState;
