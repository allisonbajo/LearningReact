import { styled } from 'styled-components';

import logo from '../assets/logo.png';
//import classes from './Header.module.css';


// const StyledHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 2rem;
//     margin-bottom: 2rem;

//     & img {
//         object-fit: contain;
//         margin-bottom: 2rem;
//         width: 11rem;
//         height: 11rem;
//     }

//     & h1 {
//         font-size: 1.5rem;
//         font-weight: 600;
//         letter-spacing: 0.4em;
//         text-align: center;
//         text-transform: uppercase;
//         color: #9a3412;
//         font-family: 'Pacifico', cursive;
//         margin: 0;
//     }

//     & p {
//         text-align: center;
//         color: #a39191;
//         margin: 0;
//     }

//     .paragraph {
//         text-align: center;
//         color: #a39191;
//         margin: 0;
//     }

//     @media (min-width: 768px) {
//         & {
//             margin-bottom: 4rem;
//         }

//         & h1 {
//             font-size: 2.25rem;
//         }
//     }
// `;

export default function Header() {
    // Setting inline styles in JSX is similar to HTML
    // Add attribute "style" with a dynamic object
    // NOTE: dashes are not supported as attribute names. Use camel casing
    // style={ {<object>} }
    // style = {{
    //     color: "red",
    //     textAlign: ...,
    // }}

    // Removed this to enable the use of nested styled components
    // <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    return (
        <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
            <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object-contain"/>
            <h1 className="text-xl md:text-4xl font-semibold font-title tracking-widest text-center uppercase text-amber-800">ReactArt</h1>
            <p className="text-stone-500">A community of artists and art-lovers.</p>
        </header>
    );
}
