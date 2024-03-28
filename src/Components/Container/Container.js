import { useState } from 'react';
import Item from '../Item/Item';

export default function Container(props){
  	const [items, setItems] = useState([{name: "Giorgio", id: 1}])
	const [numElements, setNumElements] = useState(1)

	console.log(items)
	const container = items.map((elem) => <Item name={elem.name} setItems={setItems}
	setNumElements={setNumElements} numElements={numElements}></Item>)
	
	return(<div className='container'>{container}</div>)
}