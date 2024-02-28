import { useState } from "react";
import { useKeyPress } from "./hooks";
import { Bank } from "./components.styled";
import { CountdownTimer } from "./CountdownTimer";
import { Key } from "./types";
import "./App.css";
import { Score } from "./Score";

const CELL_VALUES = [128, 64, 32, 16, 4, 2, 0];

function App() {
  const lastIndex = CELL_VALUES.length - 1;

  const [bank, setBank] = useState<number>(0);
  const [scoreIndex, setScoreIndex] = useState<number>(lastIndex);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  useKeyPress(() => {
    if (!isGameStarted) {
      return;
    }

    setScoreIndex(lastIndex);
    setBank(bank + CELL_VALUES[scoreIndex]);
  }, Key.B);

  return (
    <>
      <Score
        isGameStarted={isGameStarted}
        scoreIndex={scoreIndex}
        lastIndex={lastIndex}
        bank={bank}
        cellValues={CELL_VALUES}
        setScoreIndex={setScoreIndex}
        setBank={setBank}
      />
      <CountdownTimer
        isGameStarted={isGameStarted}
        lastIndex={lastIndex}
        setIsGameStarted={setIsGameStarted}
        setBank={setBank}
        setScoreIndex={setScoreIndex}
      />
      <Bank>{bank}</Bank>
    </>
  );
}

export default App;
