import { useRef } from "react";
import { uploadBlob } from "./../firebase";

const UploadState = ({ setFileName, setLoading, setUploadedStage }) => {
  const uploadRef = useRef();

  const handleUploadBtnClick = () => uploadRef.current.click();

  const handleDrag = (e) => e.preventDefault();

  const handleFileSelect = () => handleUpload(uploadRef.current.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();

    handleUpload(e.dataTransfer.files[0]);
  };

  const handleUpload = (imageBlob) => {
    if (!imageBlob) return;

    setLoading(true);

    async function postImage() {
      try {
        const fileName = await uploadBlob(imageBlob);

        setLoading(false);
        setUploadedStage(true);

        setFileName(fileName);
      } catch (error) {
        console.log(error.message);

        setLoading(false);
        setUploadedStage(false);
      }
    }

    postImage();
  };

  return (
    <div className="upload-state">
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png,...</p>

      <div
        className="upload-section"
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <img src="./image.svg" alt="" />

        <p>Drag & Drop your image here</p>
      </div>

      <span>or</span>

      <input type="file" ref={uploadRef} onChange={handleFileSelect} hidden />
      <button onClick={handleUploadBtnClick}>Choose a file</button>
    </div>
  );
};

export default UploadState;
