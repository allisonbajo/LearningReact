import { useState } from 'react';


import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";


function App() {
    const [ userInput, setUserInput ] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6.0,
        duration: 10,
    });

    const isInputValid = (userInput.duration > 0);

    // NOTE: adding a plus (+) in front of the newValue during the assignment operator
    // will convert the input type from the default string to a number.
    // Inputs will always store values as strings despite the type being specified
    // as number. NOTE: This is probably from an old version of JS. This code without
    // the plus works without any issues.
    function handleInputChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (<>
        <Header />
        <UserInput userInput={userInput} onChangeInput={handleInputChange} />
        {!isInputValid && <p className="center">Please enter valid input data</p>}
        {isInputValid && <Result input={userInput} />}
    </>);
}


export default App
