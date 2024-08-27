import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import GuessTitle from "./GuessTitle";
import { ElementTestIds } from "../GuessUtil";

describe("GuessTitle component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.resetAllMocks();
  });
  it("Should render 5 letters T I T L E in 5 GuessTile", () => {
    render(<GuessTitle title="TITLE" />);
    expect(screen.getAllByTestId(ElementTestIds.tile)).toHaveLength(5);
    expect(screen.getAllByText("T")).toHaveLength(2);
    expect(screen.getByText("I")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("E")).toBeInTheDocument();
  });
  it("Should change background color after 2 seconds", () => {
    render(<GuessTitle title="TITLE" />);
    vi.spyOn(global.Math, "random").mockReturnValue(0.1); // return the first option in the colorOptions array (green)
    act(() => {
      vi.advanceTimersByTime(2100);
    });
    const tiles = screen.getAllByTestId(ElementTestIds.tile);
    tiles.map((tile) => expect(tile).toHaveClass("bg-green-500"));
  });
  it("Should clear the interval on unmount", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval");
    const { unmount } = render(<GuessTitle title="TITLE" />);
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
