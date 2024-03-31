import Item from '../Item/Item';
import "./Container.css"

export default function Container(props){

	const {items, setItems, maxID, setMaxID, setText, isChanging, setIsChanging} = props

	//console.log(items)
	const container = items.map((elem) => <Item name={elem.name} setItems={setItems}
	checked={elem.checked} id={elem.id} setText={setText} isChanging={isChanging}
	setIsChanging={setIsChanging}></Item>)

	return(<div className='container'>{container}</div>)
}