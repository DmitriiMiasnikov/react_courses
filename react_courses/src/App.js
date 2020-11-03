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
  todoData.forEach((el, i) => el.id = i)
  const [todoDataList, setTodoData] = useState(todoData)
  const filterAll = () => setTodoData(todoData)
  const filterActive = () => setTodoData(todoData.filter(el => el.active))
  const filterDone = () => setTodoData(todoData.filter(el => !el.active))
  const removeTodo = (id) => {
    setTodoData(todoDataList.filter(el => el.id !== id))
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
