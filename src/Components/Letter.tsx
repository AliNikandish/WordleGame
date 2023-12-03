import { useContext, useEffect } from 'react'
import { WordleContext } from '../Context/WordleContext'


const Letter = ({ letterPos, attemptVal }:LetterProps) => {
  const { board, setDisabledLetters, currAttempt, correctWord }=useContext(WordleContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord[letterPos] === letter;
  const almost =!correct && letter !== "" && correctWord.includes(letter);

  const letterState:letterState|boolean = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev:string[]) => [...prev, letter] as any);
    }
  }, [currAttempt.attempt]);
  return (
    <div className=' h-20 w-20 border flex justify-center items-center bg-slate-400 text-white text-3xl font-bold' id={letterState ? letterState : letterState.toString()}>
         {letter}
    </div>
  )
}

export default Letter