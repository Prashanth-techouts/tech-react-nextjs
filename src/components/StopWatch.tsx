import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: any;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime()}</p>
      <button className="btn" onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
