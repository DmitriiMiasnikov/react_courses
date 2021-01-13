import './App.css';
import { Todos } from './components/Todos/Todos';
import { ControlPanel } from './components/ControlPanel/ControlPanel';

function App() {
  const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json();
    return todos
  }

  return (
    <div className="App">
      <ControlPanel />
      <Todos getTodos={getTodos}/>
    </div>
  );
}

export default App;
