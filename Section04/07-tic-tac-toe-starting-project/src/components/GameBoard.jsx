import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({ activePlayerSymbol, onSelectSquare }) {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    // const [] = useState();

    function handleSelectSquare(rowIndex, colIndex) {
        // console.log(`row ${rowIndex}, col ${colIndex}`);
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            // console.log(updatedGameBoard);
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            // console.log(updatedGameBoard);
            return updatedGameBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}


export default GameBoard;
