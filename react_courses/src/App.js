import { useState } from 'react';
import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ItemStatusBar } from './components/ItemStatusBar/ItemStatusBar';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList'

function App() {
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
  ]
  const [todoDataList, setTodoData] = useState(todoData)
  const [removed, setRemoved] = useState([]);
  const filterAll = () => setTodoData(todoData.filter(el => !removed.includes(el.id)))
  const filterActive = () => setTodoData(todoData.filter(el => el.active && !removed.includes(el.id)))
  const filterDone = () => setTodoData(todoData.filter(el => !el.active && !removed.includes(el.id)))
  const removeTodo = (id) => {
    setTodoData(todoDataList.filter(el => el.id !== id))
    setRemoved([...removed, id])
  }
  return (
    <div className="App">
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusBar filterAll={filterAll} filterActive={filterActive} filterDone={filterDone} />
      </div>
      <TodoList todoData={todoDataList} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
