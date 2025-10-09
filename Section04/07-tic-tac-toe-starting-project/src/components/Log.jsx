function Log({ turns }) {
    // This shows the output of the logs by building a list of strings
    // prior to being displayed in the markup
    // Simplifies the markup in lieu of having code outside.
    let logs = [];

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        const logText = `[${row}, ${col}] Player ${player} selected`;
        logs.push(logText);
    }

    return (
        <ol id="log">
            {logs.map((log) => (
                <li key={log}>
                    {log}
                </li>
            ))}
        </ol>
    );

    // This shows the output of the logs by building the strings within the markup
    // Advantage of this is the conciseness of the code
    // return (<>
    //     <ol id="log">
    //         {turns.map((turn) => (
    //             <li key={`${turn.square.row}${turn.square.col}`}>
    //                 {turn.player} selected {turn.square.row}, {turn.square.col}
    //             </li>
    //         ))}
    //     </ol>
    // </>);
}


export default Log;