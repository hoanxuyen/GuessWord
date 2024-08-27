import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuessLayout from "./GuessLayout";

describe("GuessLayout component", () => {
  it("Should render the component", () => {
    render(<GuessLayout />);
    //the layout should always have title, default title is WORDLEGUESS
    expect(screen.getByText("W")).toBeInTheDocument();
    expect(screen.getByText("O")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
    expect(screen.getByText("D")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("G")).toBeInTheDocument();
    expect(screen.getByText("U")).toBeInTheDocument();
    expect(screen.getAllByText("E")).toHaveLength(2);
    expect(screen.getAllByText("S")).toHaveLength(2);
  });
});
