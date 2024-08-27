import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setAnswer, setWordLength } from "../../features/GuessWordSlice";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { buttonClass, ElementTestIds } from "../../GuessUtil";
import { useNavigate } from "react-router-dom";

const DirectionButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={buttonClass.green}
      whileHover={{ scale: 1.1 }}
    >
      {direction === "left" ? "◀" : "▶"}
    </motion.button>
  );
};

const WordLengthDisplay = ({
  wordLength,
  direction,
  variants,
}: {
  wordLength: number;
  direction: "up" | "down";
  variants: Variants;
}) => {
  return (
    <AnimatePresence>
      {[4, 5, 6].includes(wordLength) && (
        <motion.div
          key={wordLength}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, type: "tween" }}
          className="font-bold"
          whileHover={{ scale: 1.1 }}
        >
          {`${wordLength} LETTERS`}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      exit={{ scale: [1.2, 0.8, 0.6], opacity: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className="bg-green-500 h-10 text-lg text-white font-bold py-2 px-4 rounded shadow-lg border-none cursor-pointer"
    >
      Start
    </motion.button>
  );
};

export default function GuessStart() {
  const dispatch = useDispatch();
  const wordLength = useSelector(
    (state: RootState) => state.GuessWordSlice.wordLength
  );
  const navigate = useNavigate();
  const [direction, setDirection] = useState<"up" | "down">("up");

  const handleLeftClick = () => {
    setDirection("down");
    const newLength = wordLength === 4 ? 6 : wordLength - 1;
    dispatch(setWordLength(newLength));
  };

  const handleRightClick = () => {
    setDirection("up");
    const newLength = wordLength === 6 ? 4 : wordLength + 1;
    dispatch(setWordLength(newLength));
  };

  const handleStartGame = () => {
    dispatch(setWordLength(wordLength));
    dispatch(setAnswer());
    navigate("/game");
  };

  const variants = {
    enter: (direction: "up" | "down") => ({
      y: direction === "up" ? 30 : -30,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: "up" | "down") => ({
      y: direction === "up" ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="flex items-center gap-2"
          data-testid={ElementTestIds.start}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <DirectionButton direction="left" onClick={handleLeftClick} />
          <button
            type="button"
            onClick={handleStartGame}
            className="bg-green-500 text-white rounded h-10 px-4 border-none overflow-hidden cursor-pointer"
          >
            <WordLengthDisplay
              wordLength={wordLength}
              direction={direction}
              variants={variants}
            />
          </button>
          <DirectionButton direction="right" onClick={handleRightClick} />
        </motion.div>

        <StartButton onClick={handleStartGame} />
      </div>
    </AnimatePresence>
  );
}
