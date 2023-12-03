type WordleContextProviderProps = {
  children: React.ReactNode;
};

type WordleContextType = {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currAttempt: {
    attempt: number;
    letter: number;
  };
  setCurrAttempt: React.Dispatch<
    React.SetStateAction<{
      attempt: number;
      letter: number;
    }>
  >;
  correctWord: string;
  onSelectLetter: (key: string) => void;
  onDelete: () => void;
  onEnter: () => any;
  setDisabledLetters:
    | React.Dispatch<React.SetStateAction<never[]>>
    | React.Dispatch<React.SetStateAction<any[]>>;
  disabledLetters: any;
  gameOver: {
    gameOver: boolean;
    guessedWord: boolean;
  };
};
