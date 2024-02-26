import { useEffect } from "react";

export const useKeyPress = (callback: () => void, key: string) => {
  const onKeyDown = (event: KeyboardEvent) => {
    const isKeyPressed = event.key === key;
    if (isKeyPressed) {
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
