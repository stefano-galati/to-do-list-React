import { useState } from 'react';
import Item from './Item';

export default function Container(props){
  const [list, setList] = useState([{name: "Giorgio"}])

	const container = list.map((elem) => <Item name={elem}></Item>)
	
	return(container)
}