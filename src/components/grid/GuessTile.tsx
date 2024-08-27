import classNames from "classnames";
import { COLOR_STATES, ElementTestIds } from "../../GuessUtil";
import { motion } from "framer-motion";
export default function GuessTile({
  color,
  letter,
}: {
  color: COLOR_STATES;
  letter: string;
}) {
  const tileVariants = {
    onType: {
      boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.1)",
      scale: [1, 1.2, 1],
      transition: { ease: "easeInOut", duration: 0.1 },
    },
    idle: {},
  };
  return (
    <motion.div
      className={classNames(
        "flex items-center justify-center w-12 h-12 text-center font-bold rounded-lg shadow-md transition-colors",
        {
          "bg-white": !color && !letter, // White background when no letter is entered
          "bg-white !text-black": !color && letter, // Gray background when letter is entered but not checked
          "text-white": color || letter, // Text is black when letter is entered or color state is set
          "bg-green-500": color === COLOR_STATES.CORRECT,
          "bg-yellow-400": color === COLOR_STATES.CONTAIN,
          "bg-gray-700": color === COLOR_STATES.INCORRECT,
        }
      )}
      data-testid={ElementTestIds.tile}
      variants={tileVariants}
      animate={letter ? "onType" : "idle"}
    >
      <p className="font-bold capitalize text-4xl m-0">{letter}</p>
    </motion.div>
  );
}
