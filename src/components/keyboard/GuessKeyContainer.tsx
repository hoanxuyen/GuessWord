import { useDispatch } from "react-redux";
import {
  handleCheck,
  removeCurrentWord,
  setGuessedWord,
} from "../../features/GuessWordSlice";
import GuessKey from "./GuessKey";

export default function GuessKeyContainer({
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
    <GuessKey
      letter={letter}
      isActive={isActive}
      onClick={() => handleClick(letter)}
    />
  );
}
