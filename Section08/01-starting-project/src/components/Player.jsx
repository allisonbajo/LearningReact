import { useState } from 'react';


export default function Player() {
  const [ enteredName, setEnteredName ] = useState('');
  // const [ playerName, setPlayerName ] = useState('unknown entity');
  const [ submitted, setSubmitted ] = useState(false);

  function handleChange(event) {
    setEnteredName(event.target.value);
    console.log(`Name entered: ${event.target.value}`);
  }

  function handleSetName() {
    console.log('Set Name clicked');
    // setPlayerName(enteredName);
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredName} />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
