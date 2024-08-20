import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ElementTestIds } from "../../GuessUtil";
import { createSelector } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
export default function GuessTile({
  id,
  rowid,
}: {
  id: number;
  rowid: number;
}) {
  /**
   *  Normally, we would use useSelector to directly get the state's value
   *  But useSelector make the apps re-render every times  dispatch being called if there's any changed to the selector.
   *  In this case, the dispatch is called when a key is pressed => call useSelector again => The useSelector will compares the return value of the selector function to the previous return value using === (reference equality) to determine wheter the returned value has changed.
   *  Most cases, the returned value is string or number so the useSelector will know the value hasn't been change and will not re-render the component.
   *  But since the returned value is array look identical with the prev array, the refference equality check will fail.
   *  This will cause useSelector to consider the state as "changed," triggering a re-render of the component. Which is bad for performance.
   *
   *  To prevent uncecessary re-render we can use memoized selector with createSelector.
   *  createSelector will only re-run if the input state has changed, and they can return the same refference if the value hasn't changed
   */
  const getColorsByRowId = (rowId: number) =>
    createSelector(
      [(state: RootState) => state.GuessWordSlice.colorStates],
      (colorStates) => colorStates[rowId] || [] // only re-run if colorStates changes
    );
  const colors = useSelector(getColorsByRowId(rowid)); // get the colors of the rows, when the key is being pressed it will not trigger re-render because nothing is changed, only when clicking enter it will validate with color, update the colorStates array
  const getGuessLetter = (rowId: number, id: number) =>
    createSelector(
      [(state: RootState) => state.GuessWordSlice.guessedWord],
      (guessedWord) => guessedWord[rowId]?.[id] || "" // Only re-run if guessedWord changes
    );
  const letter = useSelector(getGuessLetter(rowid, id));
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
          "bg-white": !colors[id] && !letter, // White background when no letter is entered
          "bg-white text-black": !colors[id] && letter, // Gray background when letter is entered but not checked
          "text-black": colors[id] || letter, // Text is black when letter is entered or color state is set
          "text-white": !colors[id] && !letter, // Text is white when the cell is empty
          "bg-green-500": colors[id] === "lightgreen",
          "bg-yellow-400": colors[id] === "gold",
          "bg-gray-700": colors[id] === "grey",
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
