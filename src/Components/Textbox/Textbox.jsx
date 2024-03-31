import "./Textbox.css"

export default function Textbox(props){
    const {text, setText, items, setItems, maxID, setMaxID, setIsChanging} = props
    //console.log(text, items)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAction = () => {
        if(text!=="" && items.find((element) => element.name === text) === undefined){
            setItems(items => [...items, {name: text, id: maxID+1, checked: false}])
            setMaxID(n => n+1)
            setText(text => "")
            setIsChanging(false)
            //console.log(items, maxID, text) 
        }
    }

    return(<div id="textboxContainer">
        <input type="textbox" onChange={handleChange} value={text} />
        <button onClick={handleAction}>Add</button>
    </div>)
}