import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuessKeyBoard from "../keyboard/GuessKeyBoard";
import { ElementTestIds } from "../../GuessUtil";

describe("GuessKeyboard component", () => {
  it("Should render the component", () => {
    render(<GuessKeyBoard />);
    expect(screen.getByTestId(ElementTestIds.keyboard)).toBeInTheDocument();
  });
});
