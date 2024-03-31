import "./Item.css"

export default function Item(props){
    const {name, id, setItems, text, setText, checked, isChanging, setIsChanging} = props

    const handleCheck = () => {
        setItems(items => {
            const newItems = structuredClone(items)
            console.log("Ok", id)
            let index = newItems.findIndex(el => el.id === id)
            //console.log("Before",items[index].checked, newItems[index].checked)
            newItems[index].checked = !items[index].checked
            //console.log("After",items[index].checked, newItems[index].checked)
            return newItems
        })
    }

    const handleModify = () => {
        if(isChanging === false){
            setIsChanging(true)
            setText(old => name)
            setItems(items => items.filter(el => el.id !== id))
        }
        
    }

    return(
        <div className="item">
            <p onClick={handleCheck}>{checked?<s>{name}</s>:name}</p>
            <button onClick={() => setItems(items => items.filter(el => el.id !== id))}>X</button>
            <button onClick={handleModify}>M</button>
        </div>
    )
}