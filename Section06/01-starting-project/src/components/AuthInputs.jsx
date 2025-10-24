import { useState } from 'react';
// import { styled } from 'styled-components';

import Input from './Input.jsx';
import Button from './Button.jsx';


// Styled components
// Tagged template (JS feature)
// NOTE:
// General practice is to use one method for styling instead of mixing.
// Use styled components (SC) as opposed to mixing SC with vanilla CSS.
// NOTE:
// When using props for SCs make use of the dollar sign ($) prefix for the props
// to avoid any default prop name conflict
// const ControlContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     margin-bottom: 1.5rem;
// `;

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    // NOTE:
    // Using inline styles simplifies dynamic/conditional styling
    // style={{
    //     backgroundColor: emailNotValid ? : '#fed2d2' : '#d1d5db'
    // }}
    // NOTE:
    // Using dynamic class in styling is similar to inline styles
    // Make use of backticks (`) to create a dynamic string
    // NOTE:
    // replacing <div className="controls"> with <ControlContainer>
    // NOTE:
                    // <Label $invalid={emailNotValid}>Email</Label>
                    // <Input
                    //     type="email"
                    //     // style={{
                    //     //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
                    //     // }}
                    //     $invalid={emailNotValid}
                    //     onChange={(event) => handleInputChange('email', event.target.value)}
                    // />
                    // <Label $invalid={passwordNotValid}>Password</Label>
                    // <Input
                    //     type="password"
                    //     $invalid={passwordNotValid}
                    //     onChange={(event) => handleInputChange('password', event.target.value)}
                    // />
    return (
        <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
            <div className="flex flex-col gap-2 mb-6">
                <Input 
                    type='email'
                    label='Email' 
                    invalid={emailNotValid} 
                    onChange={(event) => handleInputChange('email', event.target.value)} 
                />
                <Input 
                    type='password'
                    label='Password' 
                    invalid={passwordNotValid} 
                    onChange={(event) => handleInputChange('password', event.target.value)} 
                />
            </div>
            <div className="flex justify-end gap-4">
                <button type="button" className="text-amber-400 hover:text-amber-500">
                    Create a new account
                </button>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}
