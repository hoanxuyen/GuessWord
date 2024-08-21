import { Meta, StoryObj } from "@storybook/react";
import GuessKey from "../components/keyboard/GuessKey";

const meta: Meta<typeof GuessKey> = {
  title: "Keyboard/Key",
  component: GuessKey,
  parameters: {
    layout: "centered",
  },
  tags:["autodocs"],
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Controls the active state and animation of the key",
      options: [true, false],
      defaultValue: false,
    },
    letter: {
      control: "text",
      description: "The letter to be displayed on the key",
      defaultValue: "A",
      name: "Word on the key",
    },
    onClick: {
      action: "clicked",
      description: "Function to handle click events",
    },
  },
} satisfies Meta<typeof GuessKey>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Key: Story = {
  args: {
    letter: "A",
    isActive: false,
  },
};
