import classNames from "classnames";
import { useState } from "react";
import { ElementTestIds } from "../GuessUtil";

export default function GuessTile() {
  const [letter, setLetter] = useState("");
  // const [completed, setCompleted] = useState(false);
  const [colors, setColors] = useState({ bg: "white", font: "black" });
  return (
    <div
      className={classNames(
        "flex items-center justify-center size-16 border border-black border-solid",
        { "bg-white": colors.bg === "white" }
      )}
      data-testid={ElementTestIds.tile}
    >
      <p className="font-bold capitalize text-5xl m-0">{letter}</p>
    </div>
  );
}
