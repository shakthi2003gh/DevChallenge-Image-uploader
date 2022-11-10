import { useState } from "react";
import UploadState from "./components/uploadState";
import UploadedState from "./components/uploadedState";
import LoadingState from "./components/loadingState";

function App() {
  const [fileName, setFileName] = useState("");
  const [uploadedStage, setUploadedStage] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadProps = { setFileName, setUploadedStage, setLoading };
  const uploadedProps = { fileName };

  return (
    <>
      {!uploadedStage && !loading && <UploadState {...uploadProps} />}
      {loading && <LoadingState />}
      {uploadedStage && !loading && <UploadedState {...uploadedProps} />}
    </>
  );
}

export default App;
