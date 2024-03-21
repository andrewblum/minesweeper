import { useState, useRef } from "react";
import {
  makeBoard,
  isGameOver,
  countFlagsRemaining,
  DIFFICULTIES,
} from "./gameLogic.js";
import { Menubar } from "./Menubar.jsx";
import { Gameboard } from "./Gameboard.jsx";
import { EndGameModal } from "./EndGameModal.jsx";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Minesweeper() {
  const [board, setBoard] = useState(makeBoard(DIFFICULTIES.EASY));
  const [difficulty, setDifficulty] = useState("EASY");
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameOver = isGameOver(board);
  const flagsRemaining = countFlagsRemaining(board, difficulty);
  const timerRef = useRef();
  if (gameOver) clearInterval(timerRef.current);

  // new game , not yet started , no click        gameStarted FALSE
  // game in progress                             gameStarted TRUE
  // game thats over, no further moves allowed    gameOver === win/lose

  function changeDifficulty(dif) {
    setDifficulty(dif);
    setGameStarted(false);
    setTime(0);
    clearInterval(timerRef.current);
    setBoard(makeBoard(DIFFICULTIES[dif]));
  }

  function handleReset(e) {
    setGameStarted(false);
    setTime(0);
    setBoard(makeBoard(DIFFICULTIES[difficulty]));
    clearInterval(timerRef.current);
  }

  return (
    <div className="flex flex-col justify-center content-center border-4 rounded-xl relative">
      <Menubar
        flags={flagsRemaining}
        time={time}
        changeDifficulty={changeDifficulty}
        handleReset={handleReset}
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
        <EndGameModal
          handleReset={handleReset}
          gameOver={gameOver}
          time={time}
        />
      )}

      <div className="absolute -top-[16px] right-[-16px] rotate-[-15deg] rounded-full bg-white border-2 hover:rotate-0 transition-all">
        <a href="https://github.com/andrewblum/minesweeper" target="_blank">
          <GitHubLogoIcon width="32" height="32" />
        </a>
      </div>
    </div>
  );
}
