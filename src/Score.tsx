import { ScoreCell, ScoreContainer } from "./components.styled";
import { useKeyPress } from "./hooks";
import { Key, ScoreType } from "./types";

export const Score = ({
  isGameStarted,
  scoreIndex,
  lastIndex,
  bank,
  cellValues,
  setScoreIndex,
  setBank,
}: ScoreType) => {
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

  return (
    <ScoreContainer>
      {cellValues.map((value, index) => (
        <ScoreCell $isActive={scoreIndex <= index} key={value + index}>
          {value}
        </ScoreCell>
      ))}
    </ScoreContainer>
  );
};
