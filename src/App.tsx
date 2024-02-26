import { useEffect, useState } from "react";
import { useCountdownSeconds, useKeyPress } from "./hooks";
import { ScoreContainer, ScoreCell, Timer, Bank } from "./components.styled";
import "./App.css";

function App() {
  const cellValues = [128, 64, 32, 16, 4, 2, 0];
  const lastIndex = cellValues.length - 1;

  const [seconds, setSeconds] = useState<number>(30);
  const [scoreIndex, setScoreIndex] = useState<number>(lastIndex);
  const [bank, setBank] = useState<number>(0);
  const timer = useCountdownSeconds(seconds);

  const startTimer = () => {
    if (!!seconds) setSeconds(seconds - 1);
  };

  useKeyPress(() => {
    setInterval(startTimer, 1000);
  }, "s");

  useKeyPress(() => {
    //вынесла в отдельные переменные, чтобы избежать хуков в кондишенах
    let bankSum = bank;
    let valueIndex = scoreIndex - 1;

    if (scoreIndex === 0) {
      bankSum += bank + cellValues[scoreIndex];
      valueIndex = lastIndex;
    }

    setScoreIndex(valueIndex);
    setBank(bankSum);
  }, "y");

  useKeyPress(() => {
    if (scoreIndex === lastIndex) {
      return;
    }

    setScoreIndex(scoreIndex + 1);
  }, "n");

  useKeyPress(() => {
    setScoreIndex(lastIndex);
    setBank(bank + cellValues[scoreIndex]);
  }, "b");

  return (
    <>
      <ScoreContainer>
        {cellValues.map((value, index) => (
          <ScoreCell $isActive={scoreIndex <= index} key={value}>
            {value}
          </ScoreCell>
        ))}
      </ScoreContainer>
      <Timer>{seconds}</Timer>
      <Bank>{bank}</Bank>
    </>
  );
}

export default App;
