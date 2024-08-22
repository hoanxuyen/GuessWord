import { ElementTestIds } from "../../GuessUtil";
import GuessKeyContainer from "./GuessKeyContainer";
type GuessKeyboardProps = {
  set1: string[];
  set2: string[];
  set3: string[];
  activeKey: string | null;
};

export default function GuessKeyBoard({
  set1,
  set2,
  set3,
  activeKey,
}: GuessKeyboardProps) {
  const keyboardRowClass = "flex flex-row gap-1";
  const renderSet = (set: string[]) => {
    return (
      <div className={keyboardRowClass}>
        {set.map((char) => (
          <GuessKeyContainer
            letter={char}
            key={char}
            isActive={activeKey === char}
          />
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
