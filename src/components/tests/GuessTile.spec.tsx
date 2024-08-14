import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuessTile from "../GuessTile";
import { ElementTestIds } from "../../GuessUtil";

describe("test component", () => {
  it("Should render correctly", () => {
    render(<GuessTile />);
    screen.debug();
    expect(screen.getByTestId(ElementTestIds.tile)).toBeInTheDocument();
  });
});
