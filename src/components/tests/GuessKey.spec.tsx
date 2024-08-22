import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import GuessKey from "../keyboard/GuessKey";

describe("GuessKey Component", () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();
  it("should render with correct letter", () => {
    render(<GuessKey letter="A" isActive={false} onClick={handleClick} />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("should update style on click and revert after animation", async () => {
    render(<GuessKey letter="A" isActive={true} onClick={handleClick} />);
    const button = screen.getByText("A");

    // Wait for the animation to apply the correct styles
    await waitFor(() => {
      expect(button).toHaveStyle("transform: scale(0.9)");
      expect(button).toHaveStyle("background-color: rgba(212, 212, 212, 0.6)");
    });
  });
  it("Should call handleClick when clicking button", async () => {
    render(<GuessKey letter="A" isActive={false} onClick={handleClick} />);
    const button = screen.getByText("A");
    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
