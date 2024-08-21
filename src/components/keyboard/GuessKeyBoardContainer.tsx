import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import {
  handleCheck,
  removeCurrentWord,
  setCurrentRow,
  setGuessedWord,
} from "../../features/GuessWordSlice";
import GuessKeyBoard from "./GuessKeyBoard";

export default function GuessKeyboardContainer() {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["DELETE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleKeyPress = useCallback(
    (key: string) => {
      setActiveKey(key); // update activeKey when pressed
      if (key === "ENTER") {
        dispatch(handleCheck());
        dispatch(setCurrentRow());
      } else if (key === "BACKSPACE" || key === "DELETE") {
        dispatch(removeCurrentWord());
      } else if (/^[A-Z]$/.test(key)) {
        // using Regex or include to check
        dispatch(setGuessedWord(key));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      handleKeyPress(key);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    if (activeKey) {
      // If there an activeKey, reset it to null after 100ms to reset the animation
      const timer = setTimeout(() => setActiveKey(null), 100);
      return () => clearTimeout(timer);
    }
  }, [activeKey]);

  return (
    <GuessKeyBoard
      set1={set1}
      set2={set2}
      set3={set3}
      activeKey={activeKey}
    />
  );
}
