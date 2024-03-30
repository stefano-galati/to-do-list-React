import "./Item.css"

export default function Item(props){
    const {name, id, items, setItems, maxID, setMaxID, text, setText} = props

    return(
        <div className="item">
            <p>{name}</p>
            <button onClick={() => setItems(items => items.filter(el => el.id !== id))}>X</button>
        </div>
    )
}