import { useSelector } from "react-redux";
import { ElementTestIds } from "../../GuessUtil";
import GuessTile from "./GuessTile";
import { RootState } from "../../store/store";

export default function GuessRow({ rowid }: { rowid: number }) {
  const numberOfWords = useSelector(
    (state: RootState) => state.GuessWordSlice.numberOfWords
  );

  const generateRow = (numberOfWords: number) => {
    const tiles = [];
    for (let i = 0; i < numberOfWords; i++) {
      tiles.push(<GuessTile id={i} rowid={rowid} key={i} />);
    }
    return tiles;
  };
console.log("render row")
  return (
    <div className="flex gap-2" data-testid={ElementTestIds.row}>
      {generateRow(numberOfWords)}
    </div>
  );
}
