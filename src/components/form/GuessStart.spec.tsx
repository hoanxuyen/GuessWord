import { configureStore } from "@reduxjs/toolkit";
import { beforeEach, describe, expect, it, vi } from "vitest";
import GuessWordSlice from "../../features/GuessWordSlice";
import { render, screen } from "@testing-library/react";
import GuessStart from "./GuessStart";
import { Provider } from "react-redux";
import { ElementTestIds } from "../../GuessUtil";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom"
    );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});
describe("GuessForm component", () => {
  const mockStore = configureStore({
    reducer: { GuessWordSlice },
    preloadedState: {
      GuessWordSlice: {
        numberOfRows: 1,
        numberOfWords: 4,
        currentRow: 0,
        completedRows: 0,
        guessWordList: [],
        answer: "TESTI",
        guessedWord: [],
        colorStates: [[]],
        wordLength: 4,
        isModalOpen: false,
        isCompleted: false,
        isLost: false,
      },
    },
  });
  window.scrollTo = vi.fn();
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <GuessStart />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render component", () => {
    expect(screen.getByTestId(ElementTestIds.start)).toBeInTheDocument();
  });

  it("Should render with correct initial word length", () => {
    expect(screen.getByText("4 LETTERS")).toBeInTheDocument();
  });

  it('Should dispatch setWordLength when clicking "◀" or "▶" button', async () => {
    const prevButton = screen.getByRole("button", { name: "◀" });
    const nextButton = screen.getByRole("button", { name: "▶" });

    await userEvent.click(prevButton);
    expect(screen.getByText("6 LETTERS")).toBeInTheDocument();
    await userEvent.click(nextButton);
    expect(screen.getByText("4 LETTERS")).toBeInTheDocument();
    await userEvent.click(nextButton);
    expect(screen.getByText("5 LETTERS")).toBeInTheDocument();
  });

  it("Should navigate to /game when clicking start button", async () => {
    await userEvent.click(screen.getByRole("button", { name: "Start" }));
    expect(mockedUseNavigate).toHaveBeenCalledWith("/game");
  });
});
