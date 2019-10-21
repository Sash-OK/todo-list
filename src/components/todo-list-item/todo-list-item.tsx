import React from 'react';

const TodoListItem: React.FC<any> = ({item}) => {
	return (<span>{item.label}</span>)
};

export default TodoListItem;
