import { Meta, StoryObj } from "@storybook/react";
import GuessModal from "../components/GuessModal";

const meta: Meta<typeof GuessModal> = {
  title: "Components/Modal",
  component: GuessModal,
  args: {
    children: "This is GuessModal",
    isModalOpen: true,
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "The content tobe displayed in the modal",
      name: "What to display in the modal",
    },
    isModalOpen: {
      type: "boolean",
      name: "Opened ?",
      description: "The state for open or closing modal",
    },
  },
} satisfies Meta<typeof GuessModal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    children: "HoDu iz nub",
  },
};
