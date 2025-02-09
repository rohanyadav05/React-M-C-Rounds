import React, { useEffect, useState } from "react";
import './ProgressBarStyle.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bar-container" data-progress={progress}>
      <div
  className="bar-body"
  data-progress={progress} // Assign the progress value here
  style={{ width: `${progress}%` }}
></div>
</div>

    </>
  );
};

export default ProgressBar;
