import { useState } from 'react';
import Item from '../Item/Item';

export default function Container(props){
  	const [list, setList] = useState([{name: "Giorgio"}, {name: "Giacomo"}])

	console.log(list)
	const container = list.map((elem) => <Item name={elem.name}></Item>)
	
	return(<div className='container'>{container}</div>)
}