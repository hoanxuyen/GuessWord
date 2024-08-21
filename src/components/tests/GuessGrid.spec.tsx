import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import GuessGrid from "../grid/GuessGrid";
import { ElementTestIds } from "../../GuessUtil";
import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice from "../../features/GuessWordSlice";
import { Provider } from "react-redux";

describe("GuessGrid component", () => {
  const mockStore = configureStore({
    reducer: { GuessWordSlice },
    preloadedState: {
      GuessWordSlice: {
        numberOfRows: 5,
        numberOfWords: 5,
        currentRow: 0,
        completedRows: 0,
        guessWordList: [],
        answer: "TESTI",
        guessedWord: ["T"],
        colorStates: [["lightgreen"]],
      },
    },
  });
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <GuessGrid />
      </Provider>
    );
  });
  it("Should render component", () => {
    expect(screen.getByTestId(ElementTestIds.grid)).toBeInTheDocument();
  });
  it("Should render 20 words and 5 row", () => {
    expect(screen.getAllByTestId(ElementTestIds.tile).length).toBe(25); // 20 words
    expect(screen.getAllByTestId(ElementTestIds.row).length).toBe(5); // 5 rows
  });
});
