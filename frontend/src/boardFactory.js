export function makeBoard({ height, width, numberOfBombs }) {
    // mine (covered) "M" + "F" for flagged
    // mine (uncovered) "E"
    // blank (uncovered) "0"
    // blank (covered) "_" + "F" for flagged
    // blank (uncovered) near a bomb "1"-"8"
    const board  = Array.from(Array(height), () => new Array(width));
    const bombs = getBombCoords(board, numberOfBombs);
    for (let r = 0; r < height ; r++) {
        for (let c = 0; c < width ; c++) {
            board[r][c] = bombs.has(`${r},${c}`) ? "M" : "0";
        }
    }
    return board;
}

/**
 * @param {number[][]} board - Game board
 * @param {number} numBombs - Number of bombs
 * @return {Set<string>} Set of bomb coordinates
 */
function getBombCoords(board, numBombs) {
    const height = board.length;
    const width = board[0].length;
    const bombs = new Set();

    while (bombs.size < numBombs) {
        const row = Math.floor(Math.random() * height);
        const col = Math.floor(Math.random() * width);
        const coords = `${row},${col}`;

        if (!bombs.has(coords)) bombs.add(coords);
    }

    return bombs;
}
