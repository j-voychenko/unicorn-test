import { useEffect, useState } from "react";
import {
  TimeIsOver,
  TimeIsOverContainer,
  Timer,
  StartNewGame,
} from "./components.styled";
import { useKeyPress } from "../hooks";
import { CountdownTimerType, Key } from "../types";
import { formatSeconds, getTime } from "../utils";

//три минуты по шестьдесят секуед на тысячу милисекунд
const MINUTES_IN_MS = 3 * 60 * 1000;
let interval = 0;

export const CountdownTimer = ({
  isGameStarted,
  lastIndex,
  setIsGameStarted,
  setBank,
  setScoreIndex,
}: CountdownTimerType) => {
  const [timer, setTimer] = useState<number>(MINUTES_IN_MS);

  const [minutes, seconds] = getTime(timer);
  const formattedSeconds = formatSeconds(seconds);

  useKeyPress(() => {
    if (!isGameStarted) {
      setTimer(MINUTES_IN_MS);
      setIsGameStarted(true);

      interval = setInterval(() => {
        setTimer((timer) => timer - 1000);
      }, 1000);
    }
  }, Key.S);

  useEffect(() => {
    if (!timer) {
      clearInterval(interval);
      setIsGameStarted(false);
    }
  }, [timer]);

  const onStartNewGameClick = () => {
    setTimer(MINUTES_IN_MS);
    setBank(0);
    setScoreIndex(lastIndex);
  };

  return (
    <>
      {!timer ? (
        <TimeIsOverContainer>
          <TimeIsOver>Игра закончена,&nbsp;</TimeIsOver>
          <StartNewGame onClick={onStartNewGameClick}>
            попробуйте еще раз
          </StartNewGame>
        </TimeIsOverContainer>
      ) : (
        <Timer>
          {minutes}:{formattedSeconds}
        </Timer>
      )}
    </>
  );
};
