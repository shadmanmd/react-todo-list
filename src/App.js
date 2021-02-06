import React, {useState, useEffect} from 'react';
import './App.css';
// Importing components
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
	
	// State
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	
	// useEffect(function, state) - run the function every time the state changes
	// If we want it to run only once, then pass an empty array in place of the state
	useEffect(() => {
		getLocalTodos();
	}, []);
	
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);
	
	// Functions
	const filterHandler = () => {
		switch(status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true));
			break;
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false));
			break;
			default:
				setFilteredTodos(todos)
			break;
		}
	}
	
	// Save to window.localStorage
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	
	const getLocalTodos = () => {
		if(localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
		}
	}
	
  return (
    <div className="App">
			<header>
				<h1>Todo App</h1>
			</header>
			<Form 
				todos={todos} 
				setTodos={setTodos} 
				inputText={inputText} 
				setInputText={setInputText} 
				setStatus={setStatus}
			/>
			<TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
