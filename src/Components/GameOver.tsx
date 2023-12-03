import { useContext } from "react";
import { WordleContext } from "../Context/WordleContext";

function GameOver() {
  const { currAttempt, gameOver, correctWord } = useContext(WordleContext);
  return (
    <div className="gameOver mt-4 bg-slate-100 w-[375px] md:w-[400px] p-2 rounded shadow ">
      {gameOver.guessedWord ? (
        <div className="flex items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h3>شما موفق به حدس کلمه شدید</h3>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>شما نتوانستید کلمه را حدس بزنید</h3>
          </div>

          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <h3>کلمه صحیح: {correctWord}</h3>
          </div>
        </>
      )}

      {gameOver.guessedWord && (
        <h3>شما با {currAttempt.attempt}بار تلاش موفق به حدس کلمه شدید </h3>
      )}
    </div>
  );
}

export default GameOver;
