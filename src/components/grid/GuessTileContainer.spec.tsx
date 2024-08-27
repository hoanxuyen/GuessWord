import { configureStore } from "@reduxjs/toolkit";
import { beforeEach, describe, expect, it } from "vitest";
import GuessWordSlice from "../../features/GuessWordSlice";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GuessTileContainer from "./GuessTileContainer";
import { COLOR_STATES, ElementTestIds } from "../../GuessUtil";

describe("GuessTileContainer component", () => {
  const mockStore = configureStore({
    reducer: { GuessWordSlice },
    preloadedState: {
      GuessWordSlice: {
        numberOfRows: 1,
        numberOfWords: 5,
        currentRow: 0,
        completedRows: 0,
        guessWordList: [],
        answer: "TESTI",
        guessedWord: ["T", "E", "R", "T", "A"],
        colorStates: [[COLOR_STATES.CORRECT]],
        wordLength: 5,
        isCompleted: false,
        isLost: false,
        isModalOpen: false,
      },
    },
  });
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <GuessTileContainer id={0} rowid={0} />
      </Provider>
    );
  });
  it("Should render GuessTile with correct letter and color", () => {
    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestIds.tile)).toHaveClass("bg-green-500");
  });
});
