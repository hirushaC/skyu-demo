import React, { useCallback, useEffect, useRef, useState } from "react";

const CountDown = ({ onComplete }) => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Specify your target date here
  const targetDate = new Date("March 21, 2024 12:00:00").getTime();

  const calculateTimeLeft = useCallback(() => {
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      };
    } else {
      onComplete();
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
  }, [targetDate, onComplete]);

  useEffect(() => {
    const updateCountdown = () => {
      setCountDownTime(calculateTimeLeft());
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <div className="flex items-center justify-center lg:rounded-2xl rounded-lg bg-white shadow-xl lg:w-[550px] lg:px-16 px-6 py-5">
      <div className="flex items-center justify-center gap-3">
        {/* Days */}
        <div className="flex flex-col items-center justify-center gap-1 lg:px-4 lg:py-2">
          <span className="text-2xl font-bold lg:text-5xl">
            {countDownTime?.days}
          </span>
          <span className="text-center text-xs capitalize text-[#878B9E]">
            {countDownTime?.days === "01" ? "Day" : "Days"}
          </span>
        </div>
        {/* Colon */}
        <span className="text-lg lg:text-3xl -mt-5">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center gap-1 lg:px-4 lg:py-2">
          <span className="text-2xl font-bold lg:text-5xl">
            {countDownTime?.hours}
          </span>
          <span className="text-center text-xs font-medium text-[#878B9E]">
            {countDownTime?.hours === "01" ? "Hour" : "Hours"}
          </span>
        </div>
        {/* Colon */}
        <span className="text-lg lg:text-3xl -mt-5">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center justify-center gap-1 lg:px-4 lg:py-2">
          <span className="text-2xl font-bold lg:text-5xl">
            {countDownTime?.minutes}
          </span>
          <span className="text-center text-xs capitalize text-[#878B9E]">
            {countDownTime?.minutes === "01" ? "Minute" : "Minutes"}
          </span>
        </div>
        {/* Colon */}
        <span className="text-lg lg:text-3xl -mt-5">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center justify-center gap-1 lg:px-4 lg:py-2">
          <span className="text-2xl font-bold lg:text-5xl">
            {countDownTime?.seconds}
          </span>
          <span className="text-center text-xs capitalize text-[#878B9E]">
            {countDownTime?.seconds === "01" ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
