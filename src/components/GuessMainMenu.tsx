import GuessGrid from "./grid/GuessGrid";
import GuessKeyBoard from "./keyboard/GuessKeyBoard";

export default function GuessMainMenu() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="font-extrabold text-5xl text-white">GUESS WORDS</h1>
      <GuessGrid />
      <GuessKeyBoard />
    </div>
  );
}
