import { useState, useRef } from 'react';


export default function Player() {
  const [ enteredName, setEnteredName ] = useState(null);
  // const [ playerName, setPlayerName ] = useState('unknown entity');
  // const [ submitted, setSubmitted ] = useState(false);

  const playerName = useRef();

  // function handleChange(event) {
  //   console.log(`Name entered: ${event.target.value}`);
  //   setSubmitted(false);
  //   setEnteredName(event.target.value);
  // }

  function handleSetName() {
    console.log('Set Name clicked');
    // setPlayerName(enteredName);
    // setSubmitted(true);
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2> */}
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
