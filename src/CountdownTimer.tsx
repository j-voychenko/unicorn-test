import { useEffect, useState } from "react";
import { Timer } from "./components.styled";
import { useKeyPress } from "./hooks";
import { Key } from "./types";
import { formatSeconds, getReturnValues } from "./utils";

//три минуты по шестьдесят секуед на тысячу милисекунд
const MINUTES_IN_MS = 5 * 1000;
const dateTimeAfterThreeMinutes = new Date().getTime() + MINUTES_IN_MS;
const NOW = new Date().getTime();
let interval;

export const CountdownTimer = () => {
  const [timer, setTimer] = useState<number>(dateTimeAfterThreeMinutes - NOW);

  const countDownTimer = new Date(dateTimeAfterThreeMinutes).getTime();
  const [minutes, seconds] = getReturnValues(timer);
  const formattedSeconds = formatSeconds(seconds);

  useKeyPress(() => {
    interval = setInterval(() => {
      setTimer(countDownTimer - new Date().getTime());
    }, 1000);
  }, Key.S);

  useEffect(() => {
    console.log(timer);
    if (minutes === 0 && seconds === 0) {
      //   console.log(timer);
      clearInterval(interval);
    }
  }, [timer]);

  return (
    <Timer>
      {minutes}:{formattedSeconds}
    </Timer>
  );
};
