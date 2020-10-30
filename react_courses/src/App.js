import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TodoList } from './components/TodoList/TodoList'

function App() {
  const isLoggedIn = false;

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
      { isLoggedIn ? <div>welcome</div> : <div>please, login</div>}
      <AppHeader />
      <SearchPanel />
      <TodoList todoData={todoData} />
    </div>
  );
}

export default App;
