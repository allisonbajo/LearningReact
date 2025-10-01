// Can use deconstruction function TabButton({ children })
// Replace props.children to children to make use of the props directly
function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}


export default TabButton;

