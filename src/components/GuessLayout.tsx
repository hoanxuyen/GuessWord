import { Outlet } from "react-router-dom";
import GuessTitle from "./GuessTitle";

export default function GuessLayout() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <GuessTitle title="WORDLEGUESS"/>
      <Outlet />
    </div>
  );
}
