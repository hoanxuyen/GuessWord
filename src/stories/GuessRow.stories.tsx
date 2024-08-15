import { Meta, StoryObj } from "@storybook/react";
import GuessRow from "../components/grid/GuessRow";

const meta: Meta = {
  title: "Grid/Row",
  component: GuessRow,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    numberOfWords: { control: "number" },
  },
  args: {
    numberOfWords: 3,
  },
} satisfies Meta<typeof GuessRow>;
export default meta;
type Story = StoryObj<typeof GuessRow>;
export const Row: Story = {};
