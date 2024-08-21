import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GuessKey from "../keyboard/GuessKey";
import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice, {
  handleCheck,
  removeCurrentWord,
  setCurrentRow,
  setGuessedWord,
} from "../../features/GuessWordSlice";
import { Provider } from "react-redux";
import { userEvent } from "@storybook/test";
import GuessKeyContainer from "../keyboard/GuessKeyContainer";

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
      },
    },
  });
  const user = userEvent.setup();
  const spyOnDispatch = vi.spyOn(mockStore, "dispatch");
  it("Should render component", () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="A" isActive={false} />
      </Provider>
    );
  });
  it("should pass correct props to GuessKey", () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="A" isActive={false} />
      </Provider>
    );

    const button = screen.getByText("A");
    expect(button).toBeInTheDocument();
  });
  it('Should dispatch handleCheck and setCurrentRow when "ENTER" is clicked', async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="ENTER" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByText("ENTER"));
    expect(spyOnDispatch).toHaveBeenCalledWith(handleCheck());
    expect(spyOnDispatch).toHaveBeenCalledWith(setCurrentRow());
  });
  it('Should dispatch removeCurrentWord when "DELETE" is clicked', async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="DELETE" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByText("DELETE"));
    expect(spyOnDispatch).toHaveBeenCalledWith(removeCurrentWord());
  });
  it("Should dispatch setGuessedWord when a letter is clicked", async () => {
    render(
      <Provider store={mockStore}>
        <GuessKeyContainer letter="A" isActive={false} />
      </Provider>
    );
    await user.click(screen.getByText("A"));
    expect(spyOnDispatch).toHaveBeenCalledWith(setGuessedWord("A"));
  });
});
