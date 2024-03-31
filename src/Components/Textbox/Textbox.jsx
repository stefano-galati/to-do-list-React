import "./Textbox.css"

export default function Textbox(props){
    const {text, setText, items, setItems, maxID, setMaxID} = props
    //console.log(text, items)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAction = () => {
        setItems(items => [...items, {name: text, id: maxID+1}])
        setMaxID(n => n+1)
        setText(text => "")
        console.log(items, maxID, text)
    }

    return(<div>
        <input type="textbox" onChange={handleChange} value={text} />
        <button onClick={handleAction}>Add</button>
    </div>)
}