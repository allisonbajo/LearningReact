import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

// Default values for props
// ButtonsContainer = 'menu'
// OR
// ButtonsContainer = CustomComponent
function Tabs({ buttons, children, ButtonsContainer = 'menu' }) {
    // This is defined as a way to use a passed in element (build in or custom)
    // and make use of it as an element in the fragment

    // One way to avoid the remapping is to use the Pascal casing naming 
    // and use the prop directly as the HTML element.
    // The corresponding component that calls Tabs must have the attribute
    // name appropriately as well
    //const ButtonsContainer = buttonsContainer;

    // Building strings in JavaScript
    // Make sure to use the backtick (`) not single (') or double quotes (")
    // const someVariable = 'something'
    // const longString = `This is ${someVariable} long`

    return (<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>);
}


export default Tabs;
