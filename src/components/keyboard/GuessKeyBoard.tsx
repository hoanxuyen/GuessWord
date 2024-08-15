import { ElementTestIds } from "../../GuessUtil";
import GuessKey from "./GuessKey";

export default function GuessKeyBoard() {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["DELETE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];
  const keyboardRowClass = "flex flex-row gap-1";
  const renderSet = (set: string[]) => {
    return (
      <div className={keyboardRowClass}>
        {set.map((char) => (
          <GuessKey letter={char} key={char} />
        ))}
      </div>
    );
  };
  return (
    <div
      className="flex flex-col items-center gap-1"
      data-testid={ElementTestIds.keyboard}
    >
      {renderSet(set1)}
      {renderSet(set2)}
      {renderSet(set3)}
    </div>
  );
}
