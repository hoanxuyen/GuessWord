import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import GuessTile from "./GuessTile";
import { COLOR_STATES, ElementTestIds } from "../../GuessUtil";

describe("test component", () => {
  beforeEach(() => {
    render(<GuessTile color={COLOR_STATES.CORRECT} letter="A" />);
  });
  it("Should render correctly", () => {
    expect(screen.getByTestId(ElementTestIds.tile)).toBeInTheDocument();
  });
  it(`Should render "A" word`, () => {
    expect(screen.getByText("A")).toBeInTheDocument();
  });
  it("Should have green background", () => {
    expect(screen.getByTestId(ElementTestIds.tile)).toHaveClass("bg-green-500");
  });
});
