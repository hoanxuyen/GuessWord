import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, it, vi } from "vitest";
import GuessWordSlice from "../features/GuessWordSlice";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import GuessGame from "./GuessGame";
import { BrowserRouter } from "react-router-dom";
import { ElementTestIds } from "../GuessUtil";
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
describe("GuessGame component", () => {
  const factory = ({ currentGuess }: { currentGuess: string }) => {
    const mockStore = configureStore({
      reducer: { GuessWordSlice },
      preloadedState: {
        GuessWordSlice: {
          numberOfRows: 1,
          numberOfWords: 4,
          currentRow: 0,
          completedRows: 0,
          guessWordList: [],
          answer: "TEST",
          guessedWord: [currentGuess],
          colorStates: [[]],
          wordLength: 4,
          isModalOpen: false,
          isCompleted: false,
          isLost: false,
        },
      },
    });
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <GuessGame />
        </BrowserRouter>
      </Provider>
    );
  };

  it("Should render the component", () => {
    factory({ currentGuess: "TEST" });
    expect(screen.getByTestId(ElementTestIds.grid)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestIds.keyboard)).toBeInTheDocument();
  });

  describe("congrat modal", () => {
    it("Should show congrat modal when finish the game with correct answer", async () => {
      factory({ currentGuess: "TEST" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      expect(
        screen.getByText("Congratulation, you have guessed the right word")
      ).toBeInTheDocument();
    });
    it("Should navigate to / after clicking Yes in congrat modal", async () => {
      factory({ currentGuess: "TEST" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      await userEvent.click(screen.getByRole("button", { name: "Yes" }));

      await waitFor(() => {
        expect(mockedUseNavigate).toHaveBeenCalledWith("/");
      });
    });
    it("Should close the modal after clicking No in the congrat modal", async () => {
      factory({ currentGuess: "TEST" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      await userEvent.click(screen.getByRole("button", { name: "No" }));

      await waitFor(() => {
        expect(
          screen.queryByText("Congratulation, you have guessed the right word")
        ).not.toBeInTheDocument();
      });
    });
  });
  describe("Losing modal", () => {
    it("Should show modal if the last guess is false", async () => {
      factory({ currentGuess: "TESR" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      expect(screen.getByText("Game Over!!")).toBeInTheDocument();
    });
    it("Should navigate to / after clicking Yes in Losing modal", async () => {
      factory({ currentGuess: "TESR" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      await userEvent.click(screen.getByRole("button", { name: "Yes" }));

      await waitFor(() => {
        expect(mockedUseNavigate).toHaveBeenCalledWith("/");
      });
    });
    it("Should close the modal after clicking No in the Losing modal", async () => {
      factory({ currentGuess: "TESR" });
      await userEvent.click(screen.getByRole("button", { name: "ENTER" }));
      await userEvent.click(screen.getByRole("button", { name: "No" }));

      await waitFor(() => {
        expect(screen.queryByText("Game Over!!")).not.toBeInTheDocument();
      });
    });
  });
});
