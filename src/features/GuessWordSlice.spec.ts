import { beforeEach, describe, expect, it, vi } from "vitest";
import GuessWordSlice, {
  handleCheck,
  removeCurrentWord,
  resetGame,
  setAnswer,
  setGuessedWord,
  setOpenModal,
  setWordLength,
} from "./GuessWordSlice";
import { fiveLetter, fourLetter, sixLetter } from "../GuessDictionary";
import { COLOR_STATES } from "../GuessUtil";

describe("GuessWord reducer", () => {
  const initialState = {
    numberOfRows: 5,
    numberOfWords: 4,
    currentRow: 0,
    completedRows: 0,
    guessWordList: [],
    answer: "",
    guessedWord: [""],
    colorStates: [],
    wordLength: 4,
    isModalOpen: false,
    isCompleted: false,
    isLost: false,
  };
  it("Should handle initial state", () => {
    expect(GuessWordSlice(initialState, { type: "unknow" })).toEqual(
      initialState
    );
  });
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0); // Return first value
  });
  describe("setWordLength action", () => {
    it.each([
      {
        wordLength: 4,
        expectedWords: fourLetter,
        expectedNumberOfWords: 4,
      },
      {
        wordLength: 5,
        expectedWords: fiveLetter,
        expectedNumberOfWords: 5,
      },
      {
        wordLength: 6,
        expectedWords: sixLetter,
        expectedNumberOfWords: 6,
      },
      {
        wordLength: 3,
        expectedWords: fourLetter,
        expectedNumberOfWords: 4, // default case
      },
    ])(
      "Should handle setWordLength with $wordLength",
      ({ wordLength, expectedWords, expectedNumberOfWords }) => {
        const action = setWordLength(wordLength);
        const state = GuessWordSlice(initialState, action);
        expect(state.wordLength).toBe(wordLength);
        expect(state.numberOfWords).toBe(expectedNumberOfWords);
        expect(state.guessWordList).toStrictEqual(expectedWords);
      }
    );
  });
  describe("setAnswer action", () => {
    it("Should assign a random word in the list to be answer", () => {
      const state = { ...initialState, guessWordList: fourLetter }; // apply fourLetter list as default list
      const newState = GuessWordSlice(state, setAnswer());
      expect(newState.answer).toBe(fourLetter[0].toUpperCase());
    });
  });
  describe("setGuessedWord action", () => {
    it("Should append a letter to guessedWord[]", () => {
      const action = setGuessedWord("A");
      const state = GuessWordSlice(initialState, action);
      expect(state.guessedWord[state.currentRow]).toBe("A");
    });
    it("Should not append if guessed word reaches number of words", () => {
      const stateWithFullWord = {
        ...initialState,
        guessedWord: ["WORD"],
      };
      const action = setGuessedWord("A");
      const state = GuessWordSlice(stateWithFullWord, action);
      expect(state.guessedWord[state.currentRow]).toBe("WORD");
    });
  });
  describe("removeCurrentWord action", () => {
    it("SHould remove the last character from the guessedWord", () => {
      const stateWithWord = {
        ...initialState,
        guessedWord: ["WORD"],
      };
      const action = removeCurrentWord();
      const state = GuessWordSlice(stateWithWord, action);
      expect(state.guessedWord[state.currentRow]).toBe("WOR");
    });
  });
  describe("resetGame action", () => {
    it("Should reset the game state", () => {
      const stateWithGameProgress = {
        ...initialState,
        currentRow: 3,
        guessedWord: ["WORD", "TEST"],
        answer: "RESET",
      };
      const action = resetGame();
      const state = GuessWordSlice(stateWithGameProgress, action);
      expect(state).toEqual(initialState);
    });
  });
  describe("handleCheck action", () => {
    it("Should set the correct color states and increment currentRow", () => {
      const stateWithAnswer = {
        ...initialState,
        guessedWord: ["WORD"],
        answer: "WOOD",
      };
      const action = handleCheck();
      const state = GuessWordSlice(stateWithAnswer, action);
      expect(state.colorStates[0]).toEqual([
        COLOR_STATES.CORRECT,
        COLOR_STATES.CORRECT,
        COLOR_STATES.INCORRECT,
        COLOR_STATES.CORRECT,
      ]);
      expect(state.currentRow).toBe(1);
    });
    it("Should set isCompleted to true if guess is correct", () => {
      const stateWithCorrectGuess = {
        ...initialState,
        guessedWord: ["WOOD"],
        answer: "WOOD",
      };
      const action = handleCheck();
      const state = GuessWordSlice(stateWithCorrectGuess, action);
      expect(state.isCompleted).toBe(true);
      expect(state.isModalOpen).toBe(true);
    });
    it("Should set isLost to true if last guess is incorrect", () => {
      const stateWithIncorrectLastGuess = {
        ...initialState,
        currentRow: 4,
        numberOfRows: 5,
        guessedWord: ["a", "b", "c", "d", "WOLL"],
        answer: "WOOD",
      };
      const action = handleCheck();
      const state = GuessWordSlice(stateWithIncorrectLastGuess, action);
      expect(state.isLost).toBe(true);
      expect(state.isModalOpen).toBe(true);
    });
  });
  describe("setOpenModal action", () => {
    it("Should open the modal", () => {
      const action = setOpenModal(true);
      const state = GuessWordSlice(initialState, action);
      expect(state.isModalOpen).toBe(true);
    });

    it("Should close the modal", () => {
      const action = setOpenModal(false);
      const state = GuessWordSlice(
        { ...initialState, isModalOpen: true },
        action
      );
      expect(state.isModalOpen).toBe(false);
    });
  });
});
