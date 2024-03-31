import Container from './Components/Container/Container';
import Textbox from './Components/Textbox/Textbox';
import ClearItems from './Components/ClearItems/ClearItems';
import { useState } from 'react';
import './App.css';

function App() {

	const [items, setItems] = useState([{name: "Giorgio", id: 1}])
	const [maxID, setMaxID] = useState(1)
	const [text, setText] = useState("")

	const showItems = items.map(el => <p>Name={el.name}, id={el.id}</p>)

	return(
		<main>
			<h1>To Do List</h1>
			<Textbox text={text} setText={setText} items={items} setItems={setItems} maxID={maxID} setMaxID={setMaxID} />
			<Container items={items} setItems={setItems} maxID={maxID} setMaxID={setMaxID} />
			<ClearItems setItems={setItems} />

			{showItems}
		</main>
	)
}


export default App;
