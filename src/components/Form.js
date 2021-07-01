import React from 'react';

export default function Form({ todos, setTodos, inputText, setInputText, setStatus }) {

	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (inputText === '') return;
		setTodos([
			...todos,
			{ text: inputText, checked: false, id: Math.random() * 1000 }
		]);
		setInputText('');
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	}

	return (
		<div id="form-container">
			<form onSubmit={submitTodoHandler}>
				<div id="container">
					<input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
					<button className="todo-btn">+</button>
				</div>
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="done">Done</option>
					<option value="pending">Pending</option>
				</select>
			</form>
		</div>
	);
}
