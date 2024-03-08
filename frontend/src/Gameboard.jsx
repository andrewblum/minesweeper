import { getSurroundingSquares, placeBombs } from "./boardFactory";

function GameboardCell({ value, onClick }) {
  let display = "📦";

  if (value === "0") {
    display = "⬜️";
  } else if (value === "X") {
    display = "💣";
  } else if ("12345678".includes(value)) {
    display = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"][
      Number(value) - 1
    ];
  } else if (value.endsWith("F")) {
    display = "⛳️";
  }

  return (
    <div
      style={{ cursor: value === "_" || value === "M" ? "pointer" : "auto" }}
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
}) {
  function handleCellClick(e, r, c, board, setBoard) {
    function numMinesAround(r, c, board) {
      return getSurroundingSquares(r, c, board).reduce((acc, [x, y]) => {
        return acc + Number(board[x][y] == "M" || board[x][y] == "MF");
      }, 0);
    }

    function dfs(r, c, board) {
      if (board[r][c].startsWith("_")) {
        const mines = numMinesAround(r, c, board);
        if (mines > 0) {
          board[r][c] = String(mines);
        } else {
          board[r][c] = "0";
          for (const [x, y] of getSurroundingSquares(r, c, board)) {
            dfs(x, y, board);
          }
        }
      }
    }

    let boardCopy = JSON.parse(JSON.stringify(board));
    if (!gameStarted) {
      boardCopy = placeBombs(r, c, boardCopy, numBombs);
      setGameStarted(true);
    }
    if (e.type === "contextmenu") {
      handlePlaceFlag(e, r, c, boardCopy);
    } else if (boardCopy[r][c] === "M" || boardCopy[r][c] === "MF") {
      boardCopy[r][c] = "X";
    } else {
      dfs(r, c, boardCopy);
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
