// Can use deconstruction function TabButton({ children })
// Replace props.children to children to make use of the props directly
function TabButton({ children, onSelect, isSelected }) {
    console.log('[Button] Rendered')

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}


export default TabButton;

