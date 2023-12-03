import  { useContext } from "react";
import { WordleContext } from "../Context/WordleContext";

function Key({ keyVal, bigKey, disabled }:KeyProps) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(WordleContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
        className={`flex items-center justify-center bg-slate-300 w-20 h-14 rounded-sm cursor-pointer text-xl ${bigKey ? 'w-[120px]':''}  ${disabled ? 'bg-slate-800 text-slate-50':''}`}
        id={bigKey ? "big" : disabled ? "disabled":''}
        onClick={selectLetter}
      >
        {keyVal}
    </div>

  );
}

export default Key;
