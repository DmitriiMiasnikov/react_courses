import { useState } from 'react';
import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ItemStatusBar } from './components/ItemStatusBar/ItemStatusBar';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList';
import { ItemAddForm } from './components/ItemAddForm/ItemAddForm';

let todoData = [
  {
    label: 'first line',
    important: false,
    active: true,
    id: 0
  },
  {
    label: 'second line',
    important: true,
    active: true,
    id: 1
  },
  {
    label: 'third line',
    important: false,
    active: false,
    id: 2
  },
];

function App() {
  const [todoDataList, setTodoData] = useState(todoData)
  const filterAll = () => setTodoData(todoData)
  const filterActive = () => setTodoData(todoData.filter(el => el.active))
  const filterDone = () => setTodoData(todoData.filter(el => !el.active))
  const removeTodo = (id) => {
    todoData = [...todoData.filter(el => el.id !== id)];
    setTodoData([...todoDataList.filter(el => el.id !== id)]);
  }
  const addTodo = () => {
    const newItem = {
      label: 'four line',
      important: false,
      active: true,
      id: Math.max(...todoData.map(el => el.id)) + 1
    }
    todoData = [...todoData, newItem];
    setTodoData([...todoDataList, newItem])
  }
  return (
    <div className="App">
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusBar filterAll={filterAll} filterActive={filterActive} filterDone={filterDone} />
      </div>
      <TodoList todoData={todoDataList} removeTodo={removeTodo} />
      <ItemAddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
