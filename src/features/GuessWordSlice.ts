import { createSlice } from "@reduxjs/toolkit";
import { COLORSTATES } from "../GuessUtil";

type GuessedWordSliceType = {
  numberOfRows: number;
  numberOfWords: number;
  currentRow: number;
  completedRows: number;
  guessWordList: string[] | [];
  answer: string;
  guessedWord: string[];
  colorStates: string[][];
};

const initialState: GuessedWordSliceType = {
  numberOfRows: 5,
  numberOfWords: 5,
  currentRow: 0,
  completedRows: 0,
  guessWordList: [],
  answer: "GAMES",
  guessedWord: [],
  colorStates: [], // To store the color states for each guess
};

const guessWordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
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
    setCurrentRow: (state) => {
      if (state.guessedWord[state.currentRow]?.length === state.numberOfWords) {
        state.colorStates[state.currentRow] = [];
        const currentGuess = state.guessedWord[state.currentRow] || "";
        const colors = currentGuess.split("").map((letter, index) => {
          if (state.answer[index] === letter) return COLORSTATES.CORRECT; // Correct position
          if (state.answer.includes(letter)) return COLORSTATES.CONTAIN; // Wrong position
          return COLORSTATES.INCORRECT; // Incorrect letter
        });
        state.colorStates[state.currentRow] = colors;
        state.currentRow += 1;
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
      state.guessedWord = [];
      state.colorStates = [];
    },
    handleCheck: (state) => {
      const currentGuess = state.guessedWord[state.currentRow];
      if (currentGuess === state.answer) {
        console.log("correct");
        alert("Congratulations! You've guessed the word!");
      } else {
        console.log("not correct");
      }
    },
  },
});

export const {
  setGuessedWord,
  handleCheck,
  setCurrentRow,
  resetGame,
  removeCurrentWord,
} = guessWordSlice.actions;
export default guessWordSlice.reducer;
