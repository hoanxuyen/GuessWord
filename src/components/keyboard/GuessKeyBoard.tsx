import { useDispatch } from "react-redux";
import { ElementTestIds } from "../../GuessUtil";
import GuessKey from "./GuessKey";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  handleCheck,
  removeCurrentWord,
  setCurrentRow,
  setGuessedWord,
} from "../../features/GuessWordSlice";

export default function GuessKeyBoard() {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["DELETE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];
  const keyboardRowClass = "flex flex-row gap-1";
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const renderSet = (set: string[]) => {
    return (
      <div className={keyboardRowClass}>
        {set.map((char) => (
          <GuessKey letter={char} key={char} isActive={activeKey === char} />
        ))}
      </div>
    );
  };
  const dispatch = useDispatch();
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
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
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  useEffect(() => {
    if (activeKey) {
      // If there an activeKey, reset it to null after 100ms to reset the animation
      const timer = setTimeout(() => setActiveKey(null), 100);
      return () => clearTimeout(timer);
    }
  }, [activeKey]);
  return (
    <div
      className="flex flex-col items-center gap-1"
      data-testid={ElementTestIds.keyboard}
    >
      {renderSet(set1)}
      {renderSet(set2)}
      {renderSet(set3)}
    </div>
  );
}
