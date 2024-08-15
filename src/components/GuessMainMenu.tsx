import GuessGrid from "./grid/GuessGrid";
import GuessKeyBoard from "./keyboard/GuessKeyBoard";

export default function GuessMainMenu() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="font-extrabold text-5xl m-0">GUESS WORDS</h1>
      <GuessGrid numberOfRows={5} numberOfWords={5} />
      <GuessKeyBoard />
    </div>
  );
}
