import { Meta, StoryObj } from "@storybook/react";
import GuessTile from "../components/grid/GuessTile";
import { COLOR_STATES } from "../GuessUtil";

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
          [COLOR_STATES.DEFAULT]: "Default",
          [COLOR_STATES.CORRECT]: "Correct",
          [COLOR_STATES.CONTAIN]: "Contain",
          [COLOR_STATES.INCORRECT]: "Incorrect",
        },
      },
      description:
        "Changed background color based on position of the character in the result's word",
      options: [
        COLOR_STATES.DEFAULT,
        COLOR_STATES.CORRECT,
        COLOR_STATES.CONTAIN,
        COLOR_STATES.INCORRECT,
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
    color: COLOR_STATES.DEFAULT,
  },
};
