import { useState, useEffect } from "react";
import { getImageUrl } from "../firebase";

const UploadedState = ({ fileName }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function getImage() {
      const URL = await getImageUrl(fileName);
      setImageUrl(URL);
    }

    getImage();
  }, [fileName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
  };

  return (
    <div className="uploaded-state">
      <img src="./tick.svg" className="tick" alt="" />

      <h1>Uploaded Successfully!</h1>

      <img className="uploaded-img" src={imageUrl} alt="" />

      <div className="link-section">
        <div className="link">{imageUrl}</div>
        <button
          className={copied ? "copied" : ""}
          onClick={handleCopy}
          disabled={copied}
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default UploadedState;
