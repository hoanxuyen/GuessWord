import { beforeEach, describe, expect, it } from "vitest";
import GuessRow from "./GuessRow";
import { render, screen } from "@testing-library/react";
import { ElementTestIds } from "../../GuessUtil";
import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice from "../../features/GuessWordSlice";
import { Provider } from "react-redux";

describe("GuessRow Component", () => {
  const mockStore = configureStore({
    reducer: { GuessWordSlice },
    preloadedState: {
      GuessWordSlice: {
        numberOfRows: 1,
        numberOfWords: 5,
        currentRow: 0,
        completedRows: 0,
        guessWordList: [],
        answer: "",
        guessedWord: [],
        colorStates: [[]],
        isCompleted: false,
        isLost: false,
        isModalOpen: false,
        wordLength: 4,
      },
    },
  });
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <GuessRow rowid={0} />
      </Provider>
    );
  });
  it("Should render the component", () => {
    expect(screen.getByTestId(ElementTestIds.row)).toBeInTheDocument();
  });
  it("Should have 5 tiles", () => {
    expect(screen.getAllByTestId(ElementTestIds.tile).length).toBe(5);
  });
});
