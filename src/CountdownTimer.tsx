import { useEffect, useState } from "react";
import { Timer } from "./components.styled";
import { useKeyPress } from "./hooks";
import { Key } from "./types";
import { formatSeconds, getReturnValues } from "./utils";

//три минуты по шестьдесят секуед на тысячу милисекунд
const MINUTES_IN_MS = 3 * 60 * 1000;
let interval = 0;

export const CountdownTimer = ({
  setIsGameStarted,
}: {
  setIsGameStarted: (isGameStarted: boolean) => void;
}) => {
  const [timer, setTimer] = useState<number>(MINUTES_IN_MS);

  const [minutes, seconds] = getReturnValues(timer);
  const formattedSeconds = formatSeconds(seconds);

  useKeyPress(() => {
    setIsGameStarted(true);

    interval = setInterval(() => {
      setTimer((timer) => timer - 1000);
    }, 1000);
  }, Key.S);

  useEffect(() => {
    if (!timer) {
      clearInterval(interval);
      setIsGameStarted(false);
    }
  }, [timer]);

  return (
    <Timer>
      {minutes}:{formattedSeconds}
    </Timer>
  );
};
