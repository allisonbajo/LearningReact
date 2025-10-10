import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
}

const INITIAL_GAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveGameBoard(gameTurns) {
    // There was a hard bug here originally
    // The array needs to be deep copied or it will retain the updated gameBoard
    // Arrays are by reference and the initialGameBoard would have retained
    // the previous game session.
    // SOLUTION: A deep copy will guarantee that the initialGameBoard will always 
    // be filled with nulls.
    // This works since the game board is derived from gameTurns
    let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function derivedActivePlayer(gameTurns) {
    // const [ activePlayer, setActivePlayer ] = useState('X');

    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (
            firstSquareSymbol 
            && firstSquareSymbol === secondSquareSymbol 
            && firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function App() {
    const [ players, setPlayers ] = useState(PLAYERS);
    const [ gameTurns, setGameTurns ] = useState([]);
    // Instead of using a state to indicate if there is a winner
    // Simply derive it from the existing data
    // const [ hasWinner, setHasWinner ] = useState(false);
    
    const activePlayer = derivedActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');

        setGameTurns((prevTurns) => {
            // Copy the previous turns as well as insert in the first position 
            // the current turn
            // let currentPlayer = 'X';
            // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
            //     currentPlayer = 'O';
            // }
            const currentPlayer = derivedActivePlayer(prevTurns);

            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    function handleRematch() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers, 
                [symbol]: newName
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.X} 
                        symbol="X" 
                        isActive={activePlayer === 'X'} 
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player 
                        initialName={PLAYERS.O} 
                        symbol="O" 
                        isActive={activePlayer === 'O'} 
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
                <GameBoard 
                    board={gameBoard}
                    onSelectSquare={handleSelectSquare}
                />
            </div>

            <Log turns={gameTurns} />
        </main>
    );
}


export default App;
