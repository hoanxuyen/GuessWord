import { describe, expect, it } from "vitest";
import GuessGuide from "./GuessGuide";
import { render, screen } from "@testing-library/react";

describe("GuessGuide component", () => {
  it("Should render component", () => {
    render(<GuessGuide />);
    expect(screen.getByText("Welcome to the Word-Guessing Game!"));
  });
});
