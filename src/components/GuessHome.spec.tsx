import { describe, expect, it } from "vitest";
import GuessHome from "./GuessHome";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";

describe("GuessHome component", () => {
  it("Should render the component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GuessHome />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Welcome to the Word-Guessing Game!")); // GuessGuide
    expect(screen.getByRole("button", { name: "Start" })); // GuessStart
  });
});
