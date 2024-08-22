import GuessGrid from "./grid/GuessGrid";
import GuessKeyboardContainer from "./keyboard/GuessKeyBoardContainer";

export default function GuessMainMenu() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="font-extrabold text-5xl text-white">GUESS WORDS</h1>
      <GuessGrid />
      <GuessKeyboardContainer />
    </div>
  );
}
