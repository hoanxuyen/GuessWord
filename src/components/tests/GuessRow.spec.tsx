import { beforeEach, describe, expect, it } from "vitest";
import GuessRow from "../GuessRow";
import { render, screen } from "@testing-library/react";
import { ElementTestIds } from "../../GuessUtil";

describe("GuessRow Component", () => {
  beforeEach(() => {
    render(<GuessRow numberOfWords={5} />);
  });
  it("Should render the component", () => {
    expect(screen.getByTestId(ElementTestIds.row)).toBeInTheDocument();
  });
  it("Should have 5 tiles when number of words is 5", () => {
    expect(screen.getAllByTestId(ElementTestIds.tile).length).toBe(5);
  });
});
