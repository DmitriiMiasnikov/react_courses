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
let filterListIndex = 0;

function App() {
  const [todoDataList, setTodoData] = useState(todoData)

  const filterAll = () => setTodoData(todoData)
  const filterActive = () => setTodoData(todoData.filter(el => el.active))
  const filterDone = () => setTodoData(todoData.filter(el => !el.active))
  const buttons = [filterAll, filterActive, filterDone];
  const buttonsHandler = (item) => {
    filterListIndex = item;
    buttons[filterListIndex]()
  }
  const removeTodo = (id) => {
    todoData = [...todoData.filter(el => el.id !== id)];
    setTodoData([...todoDataList.filter(el => el.id !== id)]);
  }
  const addTodo = (labelChange) => {
    const newItem = {
      label: labelChange,
      important: false,
      active: true,
      id: Math.max(...todoData.map(el => el.id)) + 1
    }
    todoData = [...todoData, newItem];
    setTodoData([...todoDataList, newItem])
  }
  const searchTodo = (value) => {
    if (value) {
      setTodoData([...todoDataList.filter(el => el.label.includes(value))]);
    } else buttons[filterListIndex]()
  }
  return (
    <div className="App">
      <AppHeader toDo={2} done={1} />
      <div className='top-panel d-flex'>
        <SearchPanel searchTodo={searchTodo} />
        <ItemStatusBar filterAll={filterAll} filterActive={filterActive} filterDone={filterDone} buttonsHandler={buttonsHandler}/>
      </div>
      <TodoList todoData={todoDataList} removeTodo={removeTodo} />
      <ItemAddForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
