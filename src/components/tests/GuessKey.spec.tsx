import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuessKey from "../keyboard/GuessKey";

describe("GuessKey component", () => {
  it("Should render component", () => {
    render(<GuessKey letter="A" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
