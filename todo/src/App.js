import { useState } from 'react';
import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ItemStatusBar } from './components/ItemStatusBar/ItemStatusBar';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList';
import { ItemAddForm } from './components/ItemAddForm/ItemAddForm';

const state = {
  todoData: [
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
  ],
  filterListIndex: 0,
  buttons: ['All', 'Active', 'Done'],
  activeButton: 'All',
}

function App() {
  const [todoDataList, setTodoData] = useState(state.todoData)
  const [searchInputEmpty, setSearchInputEmpty] = useState(true);
  const filterAll = () => setTodoData(state.todoData)
  const filterActive = () => setTodoData(state.todoData.filter(el => el.active))
  const filterDone = () => setTodoData(state.todoData.filter(el => !el.active))
  const buttons = { 'All': filterAll, 'Active': filterActive, 'Done': filterDone };
  const buttonsHandler = (item) => {
    state.activeButton = item;
    buttons[state.activeButton]()
    setSearchInputEmpty(true)
  }
  const removeTodo = (id) => {
    state.todoData = [...state.todoData.filter(el => el.id !== id)];
    setTodoData([...todoDataList.filter(el => el.id !== id)]);
  }
  const addTodo = (labelChange) => {
    const newItem = {
      label: labelChange,
      important: false,
      active: true,
      id: Math.max(...state.todoData.map(el => el.id)) + 1
    }
    state.todoData = [...state.todoData, newItem];
    setTodoData([...todoDataList, newItem])
  }
  const searchTodo = (value) => {
    if (value) {
      setSearchInputEmpty(false);
      setTodoData([...todoDataList.filter(el => el.label.includes(value))]);
    } else {
      setSearchInputEmpty(true);
      buttons[state.activeButton]()
    }
  }
  return (
    <div className="App">
      <AppHeader toDo={2} done={1} />
      <div className='top-panel d-flex'>
        <SearchPanel searchTodo={searchTodo} searchInputEmpty={searchInputEmpty} />
        <ItemStatusBar buttons={state.buttons} buttonsHandler={buttonsHandler} active={state.activeButton}/>
      </div>
      <TodoList todoData={todoDataList} removeTodo={removeTodo} />
      <ItemAddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
