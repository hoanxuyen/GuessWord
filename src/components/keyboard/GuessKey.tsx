import classNames from "classnames";

export default function GuessKey({ letter }: { letter: string }) {
  return (
    <button
      className={classNames(
        "bg-neutral-300 size-14 max-w-full flex justify-center items-center rounded m-0 border-none",
        {
          "w-fit p-4": letter.length > 1,
        }
      )}
    >
      {letter}
    </button>
  );
}
