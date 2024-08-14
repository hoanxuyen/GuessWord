import { ElementTestIds } from "../GuessUtil";
import GuessTile from "./GuessTile";

type GuessRowProps = {
  numberOfWords: number;
};

export default function GuessRow({ numberOfWords }: GuessRowProps) {
  const generateRow = (numberOfWords: number) => {
    const tiles = [];
    for (let i = 0; i < numberOfWords; i++) {
      tiles.push(<GuessTile key={i} />);
    }
    console.log(tiles);
    return tiles;
  };

  return (
    <div className="flex gap-2" data-testid={ElementTestIds.row}>
      {generateRow(numberOfWords)}
    </div>
  );
}
