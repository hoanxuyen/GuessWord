import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice, {
  handleCheck,
  removeCurrentWord,
  setGuessedWord,
} from "../../features/GuessWordSlice";
import { Provider } from "react-redux";
import GuessKeyContainer from "./GuessKeyContainer";
import userEvent from "@testing-library/user-event";

describe("GuessKey component", () => {
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
        isCompleted: false,
        isLost: false,
        isModalOpen: false,
      },
    },
  });
  const user = userEvent.setup();
  const spyOnDispatch = vi.spyOn(mockStore, "dispatch");

  it("should pass correct props to GuessKey", () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="A" isActive={false} />
      </Provider>
    );

    const button = screen.getByRole("button", { name: "A" });

    expect(button).toBeInTheDocument();
  });

  it('Should dispatch handleCheck when "ENTER" is clicked', async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="ENTER" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByRole("button", { name: "ENTER" }));

    expect(spyOnDispatch).toHaveBeenCalledWith(handleCheck());
  });
  it('Should dispatch removeCurrentWord when "DELETE" is clicked', async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="DELETE" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByRole("button", { name: "DELETE" }));

    expect(spyOnDispatch).toHaveBeenCalledWith(removeCurrentWord());
  });
  it("Should dispatch setGuessedWord when a letter is clicked", async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="A" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByRole("button", { name: "A" }));

    expect(spyOnDispatch).toHaveBeenCalledWith(setGuessedWord("A"));
  });
});
