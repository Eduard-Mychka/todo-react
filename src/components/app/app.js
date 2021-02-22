

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app shadow-lg p-3 mb-5 rounded">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;

