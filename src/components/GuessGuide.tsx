import { COLOR_STATES } from "../GuessUtil";
import GuessTile from "./grid/GuessTile";

export default function GuessGuide() {
  const bulletClass = "list-none list-inside pl-5";
  return (
    <div className="m-2 p-4 sm:p-8 bg-gray-50 rounded-lg shadow-md sm:max-w-5xl max-w-full overflow-auto h-[55vh] sm:h-[70vh] custom-scroll text-sm sm:text-base">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
        Welcome to the Word-Guessing Game!
      </h2>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
        Objective
      </h3>
      <p className={`${bulletClass} text-gray-600`}>
        The goal of the game is to guess the secret word within a limited number
        of attempts. Each word can be either 4, 5, or 6 letters long, depending
        on the selected game mode.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
        How to Play
      </h3>
      <ol className="list-decimal list-inside  text-gray-600 leading-relaxed p-0 space-y-2">
        <li>
          <strong>Choose the Word Length:</strong>
          <ul className={bulletClass}>
            <li>
              <strong>Left Arrow (◀):</strong> Decreases the word length. For
              example, if the current word length is 5, clicking this button
              will change it to 4.
            </li>
            <li>
              <strong>Right Arrow (▶):</strong> Increases the word length. For
              example, if the current word length is 5, clicking this button
              will change it to 6.
            </li>
            <li>
              <strong>Start Button:</strong> The central button shows the
              current word length. Click this button to start the game with the
              selected word length.
            </li>
          </ul>
        </li>
        <li>
          <strong>Start the Game:</strong>
          <p className={bulletClass}>
            Once you've selected your desired word length, click the{" "}
            <strong>Start Button</strong> in the center to begin the game. The
            game will randomly select a word of the chosen length from the word
            list, and you will need to guess it.
          </p>
        </li>
        <li>
          <strong>Make Your Guesses:</strong>
          <p className={bulletClass}>
            Type your guess using the on-screen keyboard or your physical
            keyboard. Your guess should be a valid word with the correct number
            of letters.
          </p>
          <p className={bulletClass}>
            After each guess, the game will provide feedback on how close your
            guess is to the secret word:
          </p>
          <ul className={`${bulletClass} space-y-2`}>
            <li className="flex flex-row items-center gap-2">
              {<GuessTile color={COLOR_STATES.CORRECT} letter="A" />}
              <strong className="text-green-500">
                Green (Correct Position):
              </strong>
              The letter is in the word and in the correct position.
            </li>
            <li className="flex flex-row items-center gap-2">
              {<GuessTile color={COLOR_STATES.CONTAIN} letter="B" />}
              <strong className="text-yellow-600">
                Yellow (Wrong Position):
              </strong>
              The letter is in the word but in the wrong position.
            </li>
            <li className="flex flex-row items-center gap-2">
              {<GuessTile color={COLOR_STATES.INCORRECT} letter="C" />}
              <strong className="text-gray-600">
                Gray (Incorrect Letter):
              </strong>
              The letter is not in the word at all.
            </li>
          </ul>
        </li>
        <li>
          <strong>Winning the Game:</strong>
          <p className={bulletClass}>
            You win the game by correctly guessing the secret word within the
            allowed number of attempts. If you guess the word correctly, a
            congratulatory message will appear, and the game will reset.
          </p>
        </li>
        <li>
          <strong>Losing the Game:</strong>
          <p className={bulletClass}>
            If you use up all your attempts without guessing the word correctly,
            the game will reveal the correct word and reset for another round.
          </p>
        </li>
      </ol>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Tips</h3>
      <ul className="list-inside text-gray-600 leading-relaxed bg-slate-300 shadow-lg rounded p-4">
        <li>
          Start with common letters to quickly narrow down the possible words.
        </li>
        <li>Use the color feedback to adjust your guesses intelligently.</li>
        <li>
          Pay attention to letter positions to get closer to the correct word.
        </li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
        Restarting the Game
      </h3>
      <p className="text-gray-600">
        You can reset the game at any time by clicking the
        <strong>Reset</strong> button or refreshing the page.
      </p>

      <h3 className="text-xl sm:text-xl font-semibold mt-6 text-center text-gray-800">
        Good Luck!
      </h3>
    </div>
  );
}
