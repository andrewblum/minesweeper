import { useState, useEffect, useRef} from "react";
import {
  makeBoard,
  isGameOver,
  countFlagsRemaining,
  DIFFICULTIES,
} from "./boardLogic.js";
import { Menubar } from "./Menubar.jsx";
import { Gameboard } from "./Gameboard.jsx";
import { Flex, Text, Button } from "@radix-ui/themes";

export function Minesweeper() {
  const [board, setBoard] = useState(makeBoard(DIFFICULTIES.EASY));
  const [difficulty, setDifficulty] = useState("EASY");
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameOver = isGameOver(board);
  const flagsRemaining = countFlagsRemaining(board, difficulty);
  const timerRef = useRef()

  if (gameOver) clearInterval(timerRef.current);

  // # start the timer when gamestarted is set to true
  // # reset the timer when gamestarted is set to false
  // # freeze or somehow record the timer when gameOver is lose or win

  // new game , not yet started , no click        gameStarted FALSE
  // game in progress                             gameStarted TRUE
  // game thats over, no further moves allowed    gameOver === win/lose

  function changeDifficulty(dif) {
    setDifficulty(dif);
    setGameStarted(false);
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
        difficulty={difficulty}
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
        <EndGameModal handleReset={handleReset} gameOver={gameOver} />
      )}
    </div>
  );
}

function EndGameModal({ gameOver, handleReset }) {
  return (
    <div>
      <Text>
        {" "}
        You {gameOver} {gameOver === "win" ? "😁" : "😿"}{" "}
      </Text>
      <Button onClick={handleReset}> Reset </Button>
    </div>
  );
}
