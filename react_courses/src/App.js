import './App.css';

import { AppHeader } from './components/AppHeader/AppHeader';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import {TodoList} from './components/TodoList/TodoList'

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      { isLoggedIn ? null : <div>please, login</div>}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

export default App;
