import { Meta, StoryObj } from "@storybook/react";
import GuessGrid from "../components/GuessGrid";

const meta = {
  title: "Grid/Grid",
  component: GuessGrid,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    numberOfWords: { control: "number" },
    numberOfRows: { control: "number" },
  },
  args: {
    numberOfWords: 3,
    numberOfRows: 3,
  },
} satisfies Meta<typeof GuessGrid>;
export default meta;
type Story = StoryObj<typeof GuessGrid>;
export const Grid: Story = {};
