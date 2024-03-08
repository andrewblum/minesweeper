import { useState, useEffect } from "react";
import { makeBoard } from "./boardFactory.js";
import { Menubar } from "./Menubar.jsx";
import { Gameboard } from "./Gameboard.jsx";

const DIFFICULTIES = {
  EASY: { height: 8, width: 10, numberOfBombs: 5 },
  MEDIUM: { height: 14, width: 18, numberOfBombs: 20 },
  HARD: { height: 20, width: 24, numberOfBombs: 100 },
};

function isGameOver(board) {
  let won = true;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === "X") return "lose";
      if (board[r][c] === "_" || board[r][c] === "_F") won = false;
    }
  }
  return won ? "win" : null;
}

function countFlagsRemaining(board, difficulty) {
  return (
    DIFFICULTIES[difficulty].numberOfBombs -
    board.reduce((acc, row) => {
      return (
        acc + row.reduce((count, val) => count + Number(val.length > 1), 0)
      );
    }, 0)
  );
}

export function Minesweeper() {
  const [board, setBoard] = useState(makeBoard(DIFFICULTIES.EASY));
  const [difficulty, setDifficulty] = useState("EASY");
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameOver = isGameOver(board);
  const flagsRemaining = countFlagsRemaining(board, difficulty);

  useEffect(() => {
    let id;
    if (gameStarted) {
      setTime(0);
      id = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [gameStarted]);

  // # start the timer when gamestarted is set to true
  // # reset the timer when gamestarted is set to false
  // # freeze or somehow record the timer when gameOver is lose or win

  // new game , not yet started , no click        gameStarted FALSE
  // game in progress                             gameStarted TRUE
  // game thats over, no further moves allowed    gameOver === win/lose

  function changeDifficulty(e) {
    setDifficulty(e.target.value);
    setGameStarted(false);
    setBoard(makeBoard(DIFFICULTIES[e.target.value]));
  }

  function handleReset(e) {
    setGameStarted(false);
    setBoard(makeBoard(DIFFICULTIES[difficulty]));
  }

  return (
    <div>
      <Menubar
        flags={flagsRemaining}
        time={time}
        difficulty={difficulty}
        changeDifficulty={changeDifficulty}
      />
      <Gameboard
        board={board}
        setBoard={setBoard}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        numBombs={DIFFICULTIES[difficulty].numberOfBombs}
      />
      {gameOver && (
        <EndGameModal handleReset={handleReset} gameOver={gameOver} />
      )}
    </div>
  );
}

function EndGameModal({ gameOver, handleReset }) {
  return (
    <div>
      You {gameOver} {gameOver === "win" ? "😁" : "😿"}
      <button onClick={handleReset}> reset </button>
    </div>
  );
}
