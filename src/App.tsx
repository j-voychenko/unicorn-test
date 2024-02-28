import { useState } from "react";
import { useKeyPress } from "./hooks";
import { ScoreContainer, ScoreCell, Bank } from "./components.styled";
import { CountdownTimer } from "./CountdownTimer";
import { Key } from "./types";
import "./App.css";

function App() {
  const cellValues = [128, 64, 32, 16, 4, 2, 0];
  const lastIndex = cellValues.length - 1;

  const [scoreIndex, setScoreIndex] = useState<number>(lastIndex);
  const [bank, setBank] = useState<number>(0);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(true);

  useKeyPress(() => {
    let valueIndex = scoreIndex - 1;

    if (scoreIndex === 0) {
      setBank(bank + cellValues[scoreIndex]);
      valueIndex = lastIndex;
    }

    if (!isGameStarted) {
      return;
    }

    setScoreIndex(valueIndex);
  }, Key.Y);

  useKeyPress(() => {
    if (scoreIndex === lastIndex) {
      return;
    }

    if (!isGameStarted) {
      return;
    }

    setScoreIndex(scoreIndex + 1);
  }, Key.N);

  useKeyPress(() => {
    if (!isGameStarted) {
      return;
    }

    setScoreIndex(lastIndex);
    setBank(bank + cellValues[scoreIndex]);
  }, Key.B);

  return (
    <>
      <ScoreContainer>
        {cellValues.map((value, index) => (
          <ScoreCell $isActive={scoreIndex <= index} key={value + index}>
            {value}
          </ScoreCell>
        ))}
      </ScoreContainer>
      <CountdownTimer setIsGameStarted={setIsGameStarted} />
      <Bank>{bank}</Bank>
    </>
  );
}

export default App;
