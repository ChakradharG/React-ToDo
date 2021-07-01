import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {
	const [ inputText, setInputText ] = useState('');
	const [ todos, setTodos ] = useState([]);
	const [ status, setStatus ] = useState('all');

	useEffect(() => {
		const cachedTodos = localStorage.getItem('todos');
		if (cachedTodos) setTodos(JSON.parse(cachedTodos));
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [ todos ])

	return (
		<div>
			<header>
				<h1>ToDo</h1>
			</header>
			<Form 
				inputText={inputText} 
				setInputText={setInputText} 
				todos={todos} 
				setTodos={setTodos} 
				setStatus={setStatus}
			/>
			<TodoList 
				todos={todos} 
				setTodos={setTodos} 
				status={status}
			/>
		</div>
	);
}
