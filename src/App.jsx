import Container from './Components/Container/Container';
import Textbox from './Components/Textbox/Textbox';
import ClearItems from './Components/ClearItems/ClearItems';
import { useState } from 'react';
import './App.css';

function App() {

	const [items, setItems] = useState([{name: "Giorgio", id: 1, checked:false}])
	const [maxID, setMaxID] = useState(1)
	const [text, setText] = useState("")
	const [isChanging, setIsChanging] = useState(false)

	const showItems = items.map(el => <p>Name={el.name}, id={el.id} checked={el.checked?"True":"False"}</p>)

	return(
		<main>
			<h1>To Do List</h1>
			<Textbox text={text} setText={setText} items={items} setItems={setItems} maxID={maxID} 
			setMaxID={setMaxID} isChanging={isChanging} setIsChanging={setIsChanging}/>
			<Container items={items} setItems={setItems} maxID={maxID} setMaxID={setMaxID} setText={setText}
			isChanging={isChanging} setIsChanging={setIsChanging}/>
			<ClearItems setItems={setItems} />

			{showItems}
		</main>
	)
}


export default App;
