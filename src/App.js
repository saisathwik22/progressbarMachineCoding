// Solve in 15-20 mins....EASY
import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`, // 75% filled
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [1, 5, 10, 30, 50, 70, 90, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
