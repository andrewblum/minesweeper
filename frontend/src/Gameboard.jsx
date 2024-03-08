function GameboardCell({ value }) {
    console.log(value)
    return (
        <span>
            {value}
        </span>
    );
}

export function Gameboard({ board }) {
    
    function handleCellClick(r, c) {
        alert(`you clicked ${r, c}`);
    }

    function renderBoard() {
        const arr = [];

        for (let r = 0; r < board.length ; r++) {
            for (let c = 0; c < board[0].length ; c++) {
                arr.push(<GameboardCell value={board[r][c]} onClick={() => handleCellClick(r, c)}/>);
            }

            arr.push(<p></p>);
        }

        return arr;
    }

    console.log(board)

    return (
        <div>
            {renderBoard()}
        </div>
    );
}
