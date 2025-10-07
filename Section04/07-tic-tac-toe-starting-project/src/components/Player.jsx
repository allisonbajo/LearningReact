import { useState } from "react";

function Player({ initialName, symbol, isActive }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);

    // WARNING: Special consideration needed when updating state based on a previous value
    // setIsEditing(!isEditing); is not recommended
    // Use an anonymous function instead
    // Calling the function will force React to get the actual current value
    // setIsEditing((editing) => !editing);
    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        console.log(event.target.value);
        setPlayerName(event.target.value);
    }

    // Original code for player-name conditional
    //{ isEditing
        //? <input />
        //: <span className="player-name">{name}</span>
    //}

    // TIP: Placing the conditional JS code out of the markup will result
    // in cleaner code
    // let editablePlayerName = <span className="player-name">{playerName}</span>;
    // if (isEditing) {
    //     editablePlayerName = <input type="text" required value={playerName} />
    // }
    // Another way to express this

    // value will always set the value and prevents the user from changing it
    // defaultValue will provide an initial value and the user can change it
    // NOTE: There is a better way using React
    let editablePlayerName = isEditing
        ? <input type="text" value={playerName} onChange={handleChange} required />
        : <span className="player-name">{playerName}</span>;


    let buttonText = isEditing ? "Save" : "Edit";

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {buttonText}
            </button>
        </li>
    );
}


export default Player;
