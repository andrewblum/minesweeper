/**
 * @param {object} options - Options hash containing board deminsions
 * @param {number} options.height - Number of rows
 * @param {number} options.width - Number of columns
 * @return {number[][]} Empty game board
 */
export function makeBoard({ height, width }) {
  // mine (covered) "M" + "F" for flagged
  // mine (uncovered) "X"
  // blank (uncovered) "0"
  // blank (covered) "_" + "F" for flagged
  // blank (uncovered) near a bomb "1"-"8"
  const board = Array.from(Array(height), () => new Array(width));
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      board[r][c] = "_";
    }
  }
  return board;
}
/**
 * @param {number} r - Row index
 * @param {number} c - Column index
 * @param {number[][]} board - Game board
 * @param {number} numBombs - Number of bombs to place on board
 * @return {number[][]} board - Game board
 */
export function placeBombs(r, c, board, numBombs) {
  // never bomb a bomb on the R, C clicked
  // generate some random blob around the R C clicked and place no bombs there either
  // based on difficulty/board size/ bomb number
  // pick from a random range of area to be safe zone
  // for example , easy would pikc randombly between ( M * N ) * 1/6 through ( M * N ) * 1/3
  // this is how many cells to make safe around the initial click

  // we now know how many safe cells to generate
  // starting from R, C, decide on a safe cell to add in one of the 8 directions
  // RANDOMLY until we have enough to satisfy

  // safe_cords = [[5,5], [4,4]]

  // repeat until safe_cords length === desired number of safe cells
  //     pick random cord safe_cords
  //         pick random card around that one which is NOT yet in safe coords
  const safeCoords = getSafeCoords(board, r, c);
  const bombCoords = getBombCoords(board, numBombs, safeCoords);
  console.log(safeCoords);
  console.log(bombCoords);
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      board[r][c] = bombCoords.has(`${r},${c}`) ? "M" : "_";
    }
  }
  return board;
}

/**
 * @param {number[][]} board - Game board
 * @param {number} r - Row index of initial user click
 * @param {number} c - Column index of initial user click
 * @return {Set<string>} Set of safe coordinates
 */
function getSafeCoords(board, r, c) {
  const safeCoords = new Set();
  const area = board.length * board[0].length;
  const maxRatio = area <= 80 ? 0.33 : 0.28;
  const minRatio = area <= 80 ? 0.17 : 0.14;
  const max = area * maxRatio;
  const min = area * minRatio;
  const numSafe = Math.floor(Math.random() * (max - min) + min);

  safeCoords.add(`${r},${c}`);

  while (safeCoords.size < numSafe) {
    const [row, col] = [...safeCoords][
      Math.floor(Math.random() * safeCoords.size)
    ].split(",");
    const surroundings = getSurroundingSquares(Number(row), Number(col), board);
    const cell = surroundings[Math.floor(Math.random() * surroundings.length)];
    const coords = `${cell[0]},${cell[1]}`;

    if (!safeCoords.has(coords)) safeCoords.add(coords);
  }

  return safeCoords;
}

/**
 * @param {number[][]} board - Game board
 * @param {number} numBombs - Number of bombs
 * @param {Set<string>} safeCoords - Set of safe coordinates
 * @return {Set<string>} Set of bomb coordinates
 */
function getBombCoords(board, numBombs, safeCoords) {
  const height = board.length;
  const width = board[0].length;
  const bombCoords = new Set();

  while (bombCoords.size < numBombs) {
    const row = Math.floor(Math.random() * height);
    const col = Math.floor(Math.random() * width);
    const coords = `${row},${col}`;

    if (!bombCoords.has(coords) && !safeCoords.has(coords)) {
      bombCoords.add(coords);
    }
  }

  return bombCoords;
}

/**
 * @param {number} r - Row index
 * @param {number} c - Column index
 * @param {number[][]} board - Game board
 * @return {number[][]} - Coordinates of surrounding squares of [r, c]
 */
export function getSurroundingSquares(r, c, board) {
  const sqrs = [];
  for (const [i, j] of [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ]) {
    const [x, y] = [r + i, c + j];
    if (x >= 0 && y >= 0 && x < board.length && y < board[0].length) {
      sqrs.push([x, y]);
    }
  }
  return sqrs;
}
