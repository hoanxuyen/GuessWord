import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuessTile from "../grid/GuessTile";
import { ElementTestIds } from "../../GuessUtil";

describe("test component", () => {
  it("Should render correctly", () => {
    render(<GuessTile />);
    expect(screen.getByTestId(ElementTestIds.tile)).toBeInTheDocument();
  });
});
