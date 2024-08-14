import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import GuessGrid from "../GuessGrid";
import { ElementTestIds } from "../../GuessUtil";

describe("GuessGrid component", () => {
  beforeEach(() => {
    render(<GuessGrid numberOfWords={4} numberOfRows={5} />);
  });
  it("Should render component", () => {
    expect(screen.getByTestId(ElementTestIds.grid)).toBeInTheDocument();
  });
  it("Should render 20 words and 4 row", () => {
    expect(screen.getAllByTestId(ElementTestIds.tile).length).toBe(20); // 20 words
    expect(screen.getAllByTestId(ElementTestIds.row).length).toBe(5); // 5 rows
  });
});
