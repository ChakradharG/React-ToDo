import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, setTodos, status }) {

	const sortByChecked = (a, b) => {
		if (!b.checked) {
			if (a.checked) return 1;
			else return 0;
		} else {
			return -1;
		}
	};

	return (
		<ul id="todo-list">
			{todos
			.filter((todo) =>
				(status === 'done' && todo.checked) ||
				(status === 'pending' && !todo.checked) ||
				status === 'all'
			)
			.sort(sortByChecked)
			.map((todo) => 
				<Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
			)}
		</ul>
	);
}