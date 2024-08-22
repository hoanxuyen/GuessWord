import { useSelector } from "react-redux";
import { ElementTestIds } from "../../GuessUtil";
import { RootState } from "../../store/store";
import GuessTileContainer from "./GuessTileContainer";

export default function GuessRow({ rowid }: { rowid: number }) {
  const numberOfWords = useSelector(
    (state: RootState) => state.GuessWordSlice.numberOfWords
  );

  const generateRow = (numberOfWords: number) => {
    const tiles = [];
    for (let i = 0; i < numberOfWords; i++) {
      tiles.push(<GuessTileContainer id={i} rowid={rowid} key={i} />);
    }
    return tiles;
  };
  return (
    <div className="flex gap-2" data-testid={ElementTestIds.row}>
      {generateRow(numberOfWords)}
    </div>
  );
}
