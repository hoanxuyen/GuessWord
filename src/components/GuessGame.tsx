import GuessGrid from "./grid/GuessGrid";
import GuessKeyboardContainer from "./keyboard/GuessKeyBoardContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { resetGame, setOpenModal } from "../features/GuessWordSlice";
import { buttonClass } from "../GuessUtil";
import { motion } from "framer-motion";
import classNames from "classnames";
import GuessModalContainer from "./GuessModalContainer";
export default function GuessGame() {
  const isCompleted = useSelector(
    (state: RootState) => state.GuessWordSlice.isCompleted
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderBtn = ({
    label,
    onClick,
    color,
  }: {
    label: string;
    onClick: () => void;
    color: "green" | "red";
  }) => {
    return (
      <motion.button
        onClick={onClick}
        className={classNames({
          [buttonClass.green]: color === "green",
          [buttonClass.red]: color === "red",
        })}
        whileTap={{ scale: 1.1 }}
      >
        {label}
      </motion.button>
    );
  };
  const isLost = useSelector((state: RootState) => state.GuessWordSlice.isLost);
  const answer = useSelector((state: RootState) => state.GuessWordSlice.answer);
  return (
    <div className="flex flex-col items-center gap-4 mt-10 ">
      {/** If the game is completed, show modal to congrats */}
      {isCompleted && (
        <GuessModalContainer>
          <p>Congratulation, you have guessed the right word</p>
          <p>Do you want to restart the game?</p>

          <div className="flex flex-row gap-2 justify-end">
            {renderBtn({
              color: "green",
              label: "Yes",
              onClick() {
                dispatch(setOpenModal(false));
                setTimeout(() => {
                  navigate("/");
                  dispatch(resetGame());
                }, 1000);
              },
            })}
            {renderBtn({
              color: "red",
              label: "No",
              onClick() {
                dispatch(setOpenModal(false));
              },
            })}
          </div>
        </GuessModalContainer>
      )}
      {/** If out of tries , show modal to announce losing */}
      {isLost && (
        <GuessModalContainer>
          <div className="flex flex-col items-center">
            <h3 className="font-bold m-0">Game Over!!</h3>
            <p>
              The answer is: <span className="font-bold">{answer}</span>
            </p>
            <p>Would you like to restart?</p>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            {renderBtn({
              color: "green",
              label: "Yes",
              onClick() {
                dispatch(resetGame());
                navigate("/");
              },
            })}
            {renderBtn({
              color: "red",
              label: "No",
              onClick() {
                dispatch(setOpenModal(false));
              },
            })}
          </div>
        </GuessModalContainer>
      )}

      <GuessGrid />
      <GuessKeyboardContainer />
    </div>
  );
}
