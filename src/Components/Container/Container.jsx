import Item from '../Item/Item';
import "./Container.css"

export default function Container(props){

	const items = props.items
	const setItems = props.setItems
	const maxID = props.maxID
	const setMaxID = props.setMaxID

	//console.log(items)
	const container = items.map((elem) => <Item name={elem.name} setItems={setItems}
	id={elem.id} maxID={maxID} setMaxID={setMaxID}></Item>)

	
	
	return(<div className='container'>{container}</div>)
}