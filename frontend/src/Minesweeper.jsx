import { useState, useRef} from "react";
import {
  makeBoard,
  isGameOver,
  countFlagsRemaining,
  DIFFICULTIES,
} from "./gameLogic.js";
import { Menubar } from "./Menubar.jsx";
import { Gameboard } from "./Gameboard.jsx";
import { EndGameModal } from "./EndGameModal.jsx"


export function Minesweeper() {
  const [board, setBoard] = useState(makeBoard(DIFFICULTIES.EASY));
  const [difficulty, setDifficulty] = useState("EASY");
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameOver = isGameOver(board);
  const flagsRemaining = countFlagsRemaining(board, difficulty);
  const timerRef = useRef()
  if (gameOver) clearInterval(timerRef.current);

  // new game , not yet started , no click        gameStarted FALSE
  // game in progress                             gameStarted TRUE
  // game thats over, no further moves allowed    gameOver === win/lose

  function changeDifficulty(dif) {
    setDifficulty(dif);
    setGameStarted(false);
    setTime(0);
    clearInterval(timerRef.current)
    setBoard(makeBoard(DIFFICULTIES[dif]));
  }

  function handleReset(e) {
    setGameStarted(false);
    setTime(0);
    setBoard(makeBoard(DIFFICULTIES[difficulty]));
  }

  return (
    <div>
      <Menubar
        flags={flagsRemaining}
        time={time}
        changeDifficulty={changeDifficulty}
      />
      <Gameboard
        board={board}
        setBoard={setBoard}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        numBombs={DIFFICULTIES[difficulty].numberOfBombs}
        timerRef={timerRef}
        setTime={setTime}
      />
      {gameOver && (
        <EndGameModal handleReset={handleReset} gameOver={gameOver} time={time}/>
      )}
    </div>
  );
}

