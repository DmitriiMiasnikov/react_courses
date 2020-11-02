import { useState } from 'react';
import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ItemStatusBar } from './components/ItemStatusBar/ItemStatusBar';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList'

function App() {
  const todoData = [
    {
      label: 'first line',
      important: false,
      active: true
    },
    {
      label: 'second line',
      important: true,
      active: true
    },
    {
      label: 'third line',
      important: false,
      active: false
    },
  ]
  const [todoDataList, setTodoData] = useState(todoData)
  const filterAll = () => setTodoData(todoData)
  const filterActive = () => setTodoData(todoData.filter(el => el.active))
  const filterDone = () => setTodoData(todoData.filter(el => !el.active))
  return (
    <div className="App">
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusBar filterAll={filterAll} filterActive={filterActive} filterDone={filterDone} />
      </div>
      <TodoList todoData={todoDataList} />
    </div>
  );
}

export default App;
