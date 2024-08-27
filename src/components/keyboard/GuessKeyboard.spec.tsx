import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import GuessKeyBoard from "./GuessKeyBoard";
import { ElementTestIds } from "../../GuessUtil";
import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice from "../../features/GuessWordSlice";
import { Provider } from "react-redux";

describe("GuessKeyboard component", () => {
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
        guessedWord: [],
        colorStates: [[]],
        wordLength: 4,
      },
    },
  });
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <GuessKeyBoard set1={["A"]} set2={["B"]} set3={["C"]} activeKey={"A"} />
      </Provider>
    );
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("Should render the component", () => {
    expect(screen.getByTestId(ElementTestIds.keyboard)).toBeInTheDocument();
  });
});
