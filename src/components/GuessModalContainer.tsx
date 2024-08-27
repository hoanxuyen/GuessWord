import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import GuessModal from "./GuessModal";
export default function GuessModalContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isModalOpen = useSelector(
    (state: RootState) => state.GuessWordSlice.isModalOpen
  );

  return <GuessModal isModalOpen={isModalOpen}>{children}</GuessModal>;
}
