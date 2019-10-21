import React from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';

const App: React.FC = () => {
		const items = [
			{
				label: 'First'
			},
			{
				label: 'Second'
			}
		];
		return (
			<div>
				<AppHeader/>
				<SearchPanel/>
				<TodoList list={items}/>
			</div>
		);
	}
;

export default App;
