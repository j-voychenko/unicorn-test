import { useEffect, useState } from "react";

export const useCountdownSeconds = (seconds: number): number => {
  const [timer, setTimer] = useState<number>(seconds);

  useEffect(() => {
    if (!timer) return;

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return timer;
};

export const useKeyPress = (callback: () => void, key: string) => {
  const onKeyDown = (event: KeyboardEvent) => {
    const wasKeyPressed = event.key === key;
    if (wasKeyPressed) {
      event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};
