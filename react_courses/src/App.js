import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { ItemStatusBar } from './components/ItemStatusBar/ItemStatusBar';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList'

function App() {
  const todoData = [
    {
      label: 'first line',
      important: false
    },
    {
      label: 'second line',
      important: true
    },
    {
      label: 'third line',
      important: false
    },
  ]

  return (
    <div className="App">
      <AppHeader toDo={1} done={3}/>
      <div className='top-panel d-flex'>
      <SearchPanel />
      <ItemStatusBar />
      </div>
      <TodoList todoData={todoData} />
    </div>
  );
}

export default App;
