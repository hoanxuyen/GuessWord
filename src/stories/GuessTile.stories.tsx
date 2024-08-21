import { Meta, StoryObj } from "@storybook/react";
import GuessTile from "../components/grid/GuessTile";
import { COLORSTATES } from "../GuessUtil";

const meta: Meta<typeof GuessTile> = {
  title: "Grid/Tile",
  component: GuessTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "radio",
        labels: {
          [COLORSTATES.DEFAULT]: "Default",
          [COLORSTATES.CORRECT]: "Correct",
          [COLORSTATES.CONTAIN]: "Contain",
          [COLORSTATES.INCORRECT]: "Incorrect",
        },
      },
      description:
        "Changed background color based on position of the character in the result's word",
      options: [
        COLORSTATES.DEFAULT,
        COLORSTATES.CORRECT,
        COLORSTATES.CONTAIN,
        COLORSTATES.INCORRECT,
      ],
      name: "Color States",
    },
    letter: {
      control: "text",
      description: "The letter to be displayed in the tile",
      defaultValue: "A",
      name: "Word in Tile",
    },
  },
} satisfies Meta<typeof GuessTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tile: Story = {
  args: {
    color: COLORSTATES.DEFAULT,
  },
};
