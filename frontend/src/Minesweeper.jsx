import { useState } from 'react';
import { makeBoard } from './boardFactory.js';
import { Menubar } from './Menubar.jsx';
import { Gameboard } from './Gameboard.jsx';

const DIFFICULTIES = { 
    EASY: { height: 8, width: 10, numberOfBombs: 10 }, 
    MEDIUM: { height: 14, width: 18, numberOfBombs: 40 }, 
    HARD: { height: 20, width: 24, numberOfBombs: 100 }, 
};

function isGameOver(board) {
    return null;
}

function countFlags(board) {
    return 0;
}


export function Minesweeper() {
    const [board, setBoard] = useState(makeBoard(DIFFICULTIES.EASY));
    const time = 0;
    const gameOver = isGameOver(board);
    const numFlags = countFlags(board);


    function changeDifficulty(e) {
        setBoard(makeBoard(DIFFICULTIES[e.target.value]));
    }

    return (
        <div>
            <Menubar flags={numFlags} time={time} changeDifficulty={changeDifficulty} />
            <Gameboard board={board} setBoard={setBoard} />
            {gameOver && <EndGameModal gameOver={gameOver}></EndGameModal>}
        </div>
    );
}

function EndGameModal({ gameOver }) {
    return (
        <div>
            You {gameOver} {gameOver === "win" ? "😁" : "😿"}
            <button> reset </button>
        </div>
    );
}

