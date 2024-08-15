import { ElementTestIds } from "../../GuessUtil";
import GuessKey from "./GuessKey";

export default function GuessKeyBoard() {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const keyboardRowClass = "flex flex-row gap-1";
  const renderSet1 = () => {
    return (
      <div className={keyboardRowClass}>
        {set1.map((char) => (
          <GuessKey letter={char} key={char} />
        ))}
      </div>
    );
  };
  const renderSet2 = () => {
    return (
      <div className={keyboardRowClass}>
        {set2.map((char) => (
          <GuessKey letter={char} key={char} />
        ))}
      </div>
    );
  };
  const renderSet3 = () => {
    return (
      <div className={keyboardRowClass}>
        <GuessKey letter="DELETE" />
        {set3.map((char) => (
          <GuessKey letter={char} key={char} />
        ))}
        <GuessKey letter="ENTER" />
      </div>
    );
  };
  return (
    <div
      className="flex flex-col items-center gap-1"
      data-testid={ElementTestIds.keyboard}
    >
      {renderSet1()}
      {renderSet2()}
      {renderSet3()}
    </div>
  );
}
