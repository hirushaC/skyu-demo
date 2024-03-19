import React, { useState } from "react";
import { MultiStepLoader } from "./MultiStepLoader";

const loadingStates = [
  {
    text: "Set up job",
  },
  {
    text: "Run :: Decoding Secrets & Configuring AWS credentials",
  },
  {
    text: "Run :: Build App",
  },
  {
    text: "Run :: Sync with S3 bucket & Deployed",
  },
  {
    text: "Completed job",
  },
  {
    text: "Welcome to SkyU",
  },
];

export function InitialLoad({ onComplete }) {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* Core Loader Modal */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
        onComplete={() => {
          setLoading(false);
          onComplete();
        }}
      />
    </div>
  );
}
