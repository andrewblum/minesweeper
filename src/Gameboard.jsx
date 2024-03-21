import { placeBombs, revealEmptyAreaAroundClick } from "./gameLogic.js";
import { GameboardCell } from "./GameboardCell.jsx";

export function Gameboard({
  board,
  setBoard,
  gameStarted,
  setGameStarted,
  numBombs,
  setTime,
  timerRef,
}) {
  function handleCellClick(e, r, c, board, setBoard) {
    let boardCopy = JSON.parse(JSON.stringify(board));
    if (!gameStarted && e.type !== "contextmenu") {
      boardCopy = placeBombs(r, c, boardCopy, numBombs);
      setGameStarted(true);
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    if (e.type === "contextmenu") {
      // click is a right click, place/remove a flag if able
      handlePlaceFlag(e, r, c, boardCopy);
    } else if (boardCopy[r][c][1] === "F") {
      // ignore left clicks on flags
      return;
    } else if (boardCopy[r][c] === "M") {
      // clicked on a bomb
      boardCopy[r][c] = "X";
    } else {
      revealEmptyAreaAroundClick(r, c, boardCopy);
    }
    setBoard(boardCopy);
  }

  function handlePlaceFlag(e, r, c, board) {
    e.preventDefault();
    if (board[r][c].length > 1) {
      board[r][c] = board[r][c][0];
    } else if (board[r][c] === "_" || board[r][c] === "M") {
      board[r][c] += "F";
    }
  }

  function renderBoard() {
    const arr = [];
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        arr.push(
          <GameboardCell
            key={`${r},${c}`}
            value={board[r][c]}
            onClick={(e) => handleCellClick(e, r, c, board, setBoard)}
          />
        );
      }
    }
    return arr;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplate: `repeat(${board.length}, 40px) / repeat(${board[0].length}, 40px)`,
      }}
    >
      {renderBoard()}
    </div>
  );
}
