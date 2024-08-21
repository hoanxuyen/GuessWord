import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import GuessTile from "./GuessTile";
export default function GuessTileContainer({
  id,
  rowid,
}: {
  id: number;
  rowid: number;
}) {
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

  return <GuessTile letter={letter} color={colors[id]} />;
}
