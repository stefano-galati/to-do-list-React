import "./Item.css"

export default function Item(props){
    return(
        <div className="item">
            <p>{props.name}</p>
            <button>Hello</button>
            <button>World</button>
        </div>
    )
}