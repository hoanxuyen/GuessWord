import { useEffect, useState } from "react";
import { COLOR_STATES } from "../GuessUtil";
import GuessTile from "./grid/GuessTile";

export default function GuessTitle({
  title = "wordleguess",
}: {
  title: string;
}) {
  const [colors, setColors] = useState<COLOR_STATES[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(
        title.split("").map(() => {
          const colorOptions = [
            COLOR_STATES.CORRECT,
            COLOR_STATES.CONTAIN,
            COLOR_STATES.INCORRECT,
          ];
          return colorOptions[Math.floor(Math.random() * colorOptions.length)];
        })
      );
    }, 2000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [title]);

  const renderTitle = title
    .split("")
    .map((letter, index) => (
      <GuessTile key={index} letter={letter} color={colors[index]} />
    ));

  return (
    <div className="flex gap-2 flex-wrap justify-center">{renderTitle}</div>
  );
}
