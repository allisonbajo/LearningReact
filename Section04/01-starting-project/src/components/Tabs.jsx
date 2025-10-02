import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';


function Tabs({ buttons, children }) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}


export default Tabs;
