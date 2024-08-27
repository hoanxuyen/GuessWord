import { describe, expect, it } from "vitest";
import GuessModal from "./GuessModal";
import { render, screen } from "@testing-library/react";

describe("GuessModal component", () => {
  it("Should render the component", () => {
    render(<GuessModal isModalOpen={true}>Hello</GuessModal>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
