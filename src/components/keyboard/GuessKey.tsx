import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  handleCheck,
  removeCurrentWord,
  setCurrentRow,
  setGuessedWord,
} from "../../features/GuessWordSlice";
import { motion } from "framer-motion";
export default function GuessKey({
  letter,
  isActive,
}: {
  letter: string;
  isActive: boolean;
}) {
  const dispatch = useDispatch();
  const handleClick = (letter: string) => {
    switch (letter) {
      case "ENTER":
        dispatch(handleCheck());
        dispatch(setCurrentRow());
        break;
      case "DELETE":
        dispatch(removeCurrentWord());
        break;
      default:
        dispatch(setGuessedWord(letter));
        break;
    }
  };
  return (
    <motion.button
      className={classNames(
        "bg-neutral-300 size-14 max-w-full flex justify-center items-center rounded m-0 border-none cursor-pointer",
        {
          "w-fit p-4": letter.length > 1,
        }
      )}
      onClick={() => handleClick(letter)}
      whileTap={{ scale: 0.9 }}
      animate={
        isActive
          ? { scale: 0.9, backgroundColor: "rgb(212,212,212,0.6)" }
          : { scale: 1 }
      } // Animate based on active state
      transition={{ duration: 0.1 }}
    >
      {letter}
    </motion.button>
  );
}
