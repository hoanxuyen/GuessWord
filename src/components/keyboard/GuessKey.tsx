import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  handleCheck,
  setCurrentRow,
  setGuessedWord,
} from "../../features/GuessWordSlice";

export default function GuessKey({ letter }: { letter: string }) {
  const dispatch = useDispatch();
  const handleClick = (letter: string) => {
    if (letter === "ENTER") {
      dispatch(handleCheck());
      dispatch(setCurrentRow());
    } else {
      dispatch(setGuessedWord(letter));
    }
  };
  return (
    <button
      className={classNames(
        "bg-neutral-300 size-14 max-w-full flex justify-center items-center rounded m-0 border-none cursor-pointer",
        {
          "w-fit p-4": letter.length > 1,
        }
      )}
      onClick={() => handleClick(letter)}
    >
      {letter}
    </button>
  );
}
