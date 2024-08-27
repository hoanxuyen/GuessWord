export default function GuessFooter() {
  return (
    <div>
      <p className="font-italic">
        Inspired by Wordle game on{" "}
        <a
          className="font-bold visited:!text-black"
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
        >
          NYTIMES
        </a>{" "}
        and GuessWord game on{" "}
        <a
          className="font-bold visited:!text-black"
          href="https://www.mindgames.com/game/Guess+Word"
          target="_blank"
        >
          MINDGAMES
        </a>
      </p>
    </div>
  );
}
