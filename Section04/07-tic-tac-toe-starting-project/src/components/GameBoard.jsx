// import { useState } from 'react';

// Refactor the GameBoard to have the data in the App component
// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ];

function GameBoard({ board, onSelectSquare }) {
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     // console.log(`row ${rowIndex}, col ${colIndex}`);
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         // console.log(updatedGameBoard);
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         // console.log(updatedGameBoard);
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                    disabled={playerSymbol !== null}
                                >
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
