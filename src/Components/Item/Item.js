import "./Item.css"

export default function Item(props){
    const name = props.name
    const setItems = props.setItems
    const numElements = props.numElements
    const setNumElements = props.setNumElements
    return(
        <div className="item">
            <p>{name}</p>
            <button onClick={() => {
                setNumElements(n => n+1)
                setItems(items => [...items, {name: "Acciuga", id: numElements}])
            }}>Hello</button>
            <button onClick={() => setItems(items => items.filter(el => el.name != name))}>World</button>
        </div>
    )
}