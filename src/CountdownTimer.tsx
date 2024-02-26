import { useEffect, useState } from "react";
import { Timer } from "./components.styled";
import { useKeyPress, useTimer } from "./hooks";
import { Key } from "./types";
import { formatSeconds, getReturnValues } from "./utils";

//три минуты по шестьдесят секуед на тысячу милисекунд
const MINUTES_IN_MS = 3 * 60 * 1000;
const NOW = new Date().getTime();

export const CountdownTimer = () => {
  const dateTimeAfterThreeMinutes = NOW + MINUTES_IN_MS;

  const [timer, setTimer] = useState<number>(dateTimeAfterThreeMinutes - NOW);

  const [minutes, seconds] = getReturnValues(timer);
  const formattedSeconds = formatSeconds(seconds);

  const countDownTimer = new Date(dateTimeAfterThreeMinutes).getTime();

  useKeyPress(() => {
    const interval = setInterval(() => {
      setTimer(countDownTimer - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, Key.S);

  return (
    <Timer>
      {minutes}:{formattedSeconds}
    </Timer>
  );
};
