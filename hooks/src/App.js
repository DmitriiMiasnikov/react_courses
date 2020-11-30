import './App.css';
import { HookSwitcher } from './components/HookSwitcher/HookSwitcher';
import { Person } from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <HookSwitcher />
      <Person />
    </div>
  );
}

export default App;
