import { useState, useEffect } from "react";

export const useTypingEffect = (
  text: string,
  duration: number,
  isTypeByLetter = false
) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split("") : text.split(" ");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) {
      setDone(true);
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return {
    text: items.slice(0, currentPosition).join(isTypeByLetter ? "" : " "),
    done: done,
  };
};
