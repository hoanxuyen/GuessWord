import { Meta, StoryObj } from "@storybook/react";
import GuessKeyBoard from "../components/keyboard/GuessKeyBoard";
import GuessKeyboardContainer from "../components/keyboard/GuessKeyBoardContainer";
import { Provider } from "react-redux";
import { store } from "../store/store";

const meta: Meta<typeof GuessKeyBoard> = {
  title: "Keyboard/Keyboard",
  component: GuessKeyBoard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  argTypes: {
    activeKey: {
      control: "text",
      description: "The currently active key that is pressed",
      defaultValue: null,
    },
    set1: {
      description: "The first row of the keyboard.",
    },
    set2: {
      description: "The second row of the keyboard.",
    },
    set3: {
      description: "The third row of the keyboard, including DELETE and ENTER.",
    },
  },
} satisfies Meta<typeof GuessKeyBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Keyboard: Story = {
  render: () => {
    return <GuessKeyboardContainer />;
  },
};
