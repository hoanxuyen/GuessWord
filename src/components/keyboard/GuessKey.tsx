import classNames from "classnames";
import { motion } from "framer-motion";
export default function GuessKey({
  letter,
  isActive,
  onClick,
}: {
  letter: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={classNames(
        "bg-neutral-300 size-7 sm:size-14 max-w-full flex justify-center items-center rounded m-0 border-none cursor-pointer",
        {
          "!w-fit sm:p-4": letter.length > 1,
        }
      )}
      onClick={() => onClick()}
      whileTap={{ scale: 0.9, backgroundColor: "rgb(212,212,212,0.6)" }}
      animate={
        isActive
          ? { scale: 0.9, backgroundColor: "rgb(212,212,212,0.6)" }
          : { scale: 1 }
      } // Animate based on active state
      transition={{ duration: 0.1 }}
    >
      {letter}
    </motion.button>
  );
}
