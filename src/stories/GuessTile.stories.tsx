import { Meta, StoryObj } from "@storybook/react";
import GuessTile from "../components/GuessTile";

const meta: Meta = {
  title: "Grid/Tile",
  component: GuessTile,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GuessTile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Tile: Story = {};
