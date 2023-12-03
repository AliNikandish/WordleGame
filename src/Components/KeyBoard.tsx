import { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { WordleContext } from "../Context/WordleContext";

function Keyboard() {
  const keys1 = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح","ج", "چ" , "پ"];
  const keys2 = ["ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ"];
  const keys3 = ["ظ", "ط", "ز", "ر", "ذ", "د", "ئ", "و", "ژ", "آ"];

  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(WordleContext);

  const handleKeyboard = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>|any) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard  w-[360px] sm:w-[390px] md:w-[500px] h-[200px] mt-16" onKeyDown={handleKeyboard}>
      <div className="row flex gap-x-1 mb-1 ">
        {keys1.map((key) => {
          return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className=" row flex gap-x-1 mb-1 mx-14 mt-2 ">
        {keys2.map((key) => {
          return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="row flex gap-x-1 mb-1 mt-2 ">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
