export enum Key {
  Y = "y",
  N = "n",
  S = "s",
  B = "b",
}

export type ScoreType = {
  isGameStarted: boolean;
  scoreIndex: number;
  lastIndex: number;
  bank: number;
  cellValues: number[];
  setScoreIndex: (scoreIndex: number) => void;
  setBank: (bank: number) => void;
};

export type CountdownTimerType = {
  isGameStarted: boolean;
  setIsGameStarted: (isGameStarted: boolean) => void;
};
