import { placeBombs, revealEmptyAreaAroundClick } from "./gameLogic.js";
import { cn } from "./lib/utils.js";

function getNumberColor(value) {
  switch (value) {
    case "1":
      return "text-blue-600";
    case "2":
      return "text-green-600";
    case "3":
      return "text-red-600";
    case "4":
      return "text-indigo-700";
    case "5":
      return "text-rose-700";
    case "6":
      return "text-teal-600";
    case "7":
      return "text-slate-600";
    case "8":
      return "text-zinc-400";
    default:
      return "text-current";
  }
}

function GameboardCell({ value, onClick }) {
  let display = "";
  if (value === "X") {
    display = "💣";
  } else if ("12345678".includes(value)) {
    display = value;
  } else if (value.endsWith("F")) {
    display = "🚩";
  }

  return (
    <div
      className={cn(
        "flex justify-center items-center",
        "border border-white font-bold",
        value === "_" || value === "M"
          ? "cursor-pointer hover:bg-slate-100"
          : "cursor-default",
        value === "0" || "12345678".includes(value)
          ? `bg-slate-200 ${getNumberColor(value)}`
          : "bg-slate-300"
      )}
      onClick={onClick}
      onContextMenu={onClick}
    >
      {display}
    </div>
  );
}

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
