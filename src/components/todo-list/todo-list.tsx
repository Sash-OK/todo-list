import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList: React.FC<{list: {label: string}[]}> = ({ list }) => {
	const elements = list.map((item, i) => {
		return (
			<li className="todo-item list-group-item " key={i}>
				<TodoListItem item={item} />
			</li>
		)
	});
	
	return (
		<ul className="list-group">
			{elements}
		</ul>
	)
};

export default TodoList;
