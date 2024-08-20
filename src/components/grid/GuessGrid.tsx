import { useSelector } from "react-redux";
import { ElementTestIds } from "../../GuessUtil";
import GuessRow from "./GuessRow";
import { RootState } from "../../store/store";

export default function GuessGrid() {
  const numberOfRows = useSelector(
    (state: RootState) => state.GuessWordSlice.numberOfRows
  );
  const generateGrid = (numberOfRows: number) => {
    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
      rows.push(<GuessRow key={i} rowid={i} />);
    }
    return rows;
  };
  return (
    <div
      className="flex flex-col gap-4 items-center"
      data-testid={ElementTestIds.grid}
    >
      {generateGrid(numberOfRows)}
    </div>
  );
}
