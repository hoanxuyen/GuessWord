import { createSlice } from "@reduxjs/toolkit";
import { COLOR_STATES } from "../GuessUtil";
import { fiveLetter, fourLetter, sixLetter } from "../GuessDictionary";

type GuessedWordSliceType = {
  numberOfRows: number;
  numberOfWords: number;
  currentRow: number;
  completedRows: number;
  guessWordList: string[];
  answer: string;
  guessedWord: string[];
  colorStates: string[][];
  wordLength: number;
  isModalOpen: boolean;
  isCompleted: boolean;
  isLost: boolean;
};

const initialState: GuessedWordSliceType = {
  numberOfRows: 5,
  numberOfWords: 4,
  currentRow: 0,
  completedRows: 0, // currently not using
  guessWordList: [],
  answer: "",
  guessedWord: [""],
  colorStates: [], // To store the color states for each guess
  wordLength: 4, // Default word length is 4 Letters
  isModalOpen: false,
  isCompleted: false, // Complete the game
  isLost: false,
};

const guessWordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setWordLength: (state, action) => {
      state.wordLength = action.payload;
      switch (action.payload) {
        case 4:
          state.numberOfWords = 4;
          state.guessWordList = [...fourLetter];
          break;
        case 5:
          state.numberOfWords = 5;
          state.guessWordList = [...fiveLetter];
          break;
        case 6:
          state.numberOfWords = 6;
          state.guessWordList = [...sixLetter];
          break;
        default:
          state.numberOfWords = 4;
          state.guessWordList = [...fourLetter];
          break;
      }
    },
    setAnswer: (state) => {
      //Pick a random answer from the list
      state.answer =
        state.guessWordList[
          Math.floor(Math.random() * state.guessWordList.length)
        ].toUpperCase();
    },
    setGuessedWord: (state, action) => {
      if (state.guessedWord[state.currentRow]?.length === state.numberOfWords)
        return; // Stop if reached word's length
      if (!state.guessedWord[state.currentRow]) {
        state.guessedWord[state.currentRow] = "";
      } // If undefined , current guessedWord at current row will be empty string
      if (action.payload !== "DELETE") {
        state.guessedWord[state.currentRow] = state.guessedWord[
          state.currentRow
        ].concat(action.payload);
      }
    },
    removeCurrentWord: (state) => {
      if (state.guessedWord[state.currentRow]?.length > 0) {
        // Remove the last character from the guessed word at the current row
        state.guessedWord[state.currentRow] = state.guessedWord[
          state.currentRow
        ].slice(0, -1);
      }
    },
    resetGame: (state) => {
      // Resets the game state
      state.currentRow = 0;
      state.answer = "";
      state.guessedWord = [""];
      state.colorStates = [];
      state.isLost = false;
      state.isCompleted = false;
      state.isModalOpen = false;
    },
    handleCheck: (state) => {
      const currentGuess = state.guessedWord[state.currentRow];
      // Check if the guessed word has the correct length
      if (currentGuess?.length !== state.wordLength) {
        return;
      }
      if (state.guessedWord[state.currentRow]?.length === state.numberOfWords) {
        state.colorStates[state.currentRow] = [];
        const currentGuess = state.guessedWord[state.currentRow] || "";
        const colors = currentGuess.split("").map((letter, index) => {
          if (state.answer[index] === letter) return COLOR_STATES.CORRECT; // Correct position
          if (state.answer.includes(letter)) return COLOR_STATES.CONTAIN; // Wrong position
          return COLOR_STATES.INCORRECT; // Incorrect letter
        });
        state.colorStates[state.currentRow] = colors;
        state.currentRow += 1;
      }
      if (currentGuess === state.answer) {
        state.isCompleted = true;
        state.isModalOpen = true;
      }
      if (
        // if the last answer is incorrect , set losing to true
        state.currentRow === state.numberOfRows &&
        currentGuess !== state.answer
      ) {
        state.isLost = true;
        state.isModalOpen = true;
      }
    },
    setOpenModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  setWordLength,
  setAnswer,
  setGuessedWord,
  handleCheck,
  resetGame,
  removeCurrentWord,
  setOpenModal,
} = guessWordSlice.actions;
export default guessWordSlice.reducer;
