import React, { useState, useEffect } from 'react';
import './Timer.css'; 

function Timer({sec}) {
  const [time, setTime] = useState(sec);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime&&prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <div className="timer">{time!==0?formatTime(time):"00:00"}</div>
    </div>
  );
}

export default Timer;
