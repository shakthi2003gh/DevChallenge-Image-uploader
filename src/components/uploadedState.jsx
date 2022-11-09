import { useState } from "react";

const UploadedState = () => {
  const link = "";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <div className="uploaded-state">
      <img src="./tick.svg" className="tick" alt="" />

      <h1>Uploaded Successfully!</h1>

      <img className="uploaded-img" src={link} alt="uploaded" />

      <div className="link-section">
        <div className="link">{link}</div>
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
