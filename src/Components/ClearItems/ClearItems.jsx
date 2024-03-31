import "./ClearItems.css"

export default function ClearItems(props){
    const setItems = props.setItems
    const handleClick = () => setItems([])

    return(
        <div id="clearItems">
            <button onClick={handleClick}>Clear Items</button>
        </div>
    )
}