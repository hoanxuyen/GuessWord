import { ElementTestIds } from "../../GuessUtil";
import GuessRow from "./GuessRow";

type GuessGridProps = {
  numberOfRows: number;
  numberOfWords: number;
};

export default function GuessGrid({
  numberOfRows,
  numberOfWords,
}: GuessGridProps) {
  const generateGrid = (numberOfRows: number, numberOfWords: number) => {
    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
      rows.push(<GuessRow key={i} numberOfWords={numberOfWords} />);
    }
    return rows;
  };

  return (
    <div
      className="flex flex-col gap-4 items-center"
      data-testid={ElementTestIds.grid}
    >
      {generateGrid(numberOfRows, numberOfWords)}
    </div>
  );
}
