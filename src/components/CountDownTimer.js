import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/utils.js";
import fulllogo from "../assets/fulllogo.png";
import "./CountDownTimer.css";

function CountDownTimer() {
  const launchDate = new Date('2023-09-21T18:00:00+08:00'); // Sunday, September 17, 2023, 6:00 PM Malaysia time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="launch-timer">
      <img src={fulllogo} alt="FullLogo" className="FullLogo" />
      <div className="timer">
        <div className="time-unit">
          <div className="time">{timeLeft.days}</div>
          <div className="unit">Days</div>
        </div>
        <div className="time-unit">
          <div className="time">{timeLeft.hours}</div>
          <div className="unit">Hours</div>
        </div>
        <div className="time-unit">
          <div className="time">{timeLeft.minutes}</div>
          <div className="unit">Minutes</div>
        </div>
        <div className="time-unit">
          <div className="time">{timeLeft.seconds}</div>
          <div className="unit">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
