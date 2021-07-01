import React from 'react';
import checkBtn from '../check.svg';
import deleteBtn from '../delete.svg';

export default function Todo({ todo, todos, setTodos }) {

	const deleteHandler = () => {
		setTodos(todos.filter(elem => elem.id !== todo.id))
	};

	const checkHandler = () => {
		setTodos(todos.map((elem) => {
			if (elem.id === todo.id) {
				return ({ ...elem, checked: !elem.checked });
			 } else {
				 return (elem);
			 }
		}))
	}

	return (
		<div className="todo">
			<li className={`todo-item ${todo.checked ? 'checked' : ''}`}>{todo.text}</li>
			<button className="btn" onClick={checkHandler}>
				<img src={checkBtn} alt="C" />
			</button>
			<button className="btn" onClick={deleteHandler}>
				<img src={deleteBtn} alt="D" />
			</button>
		</div>
	);
}
