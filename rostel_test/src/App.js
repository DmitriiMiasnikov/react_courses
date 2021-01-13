import './App.css';
import { Todos } from './components/Todos/Todos';
import { ControlPanel } from './components/ControlPanel/ControlPanel';

function App() {
  const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json();
    return todos
  }
  const getUserInfo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userName = await res.json();
    return userName
  }

  return (
    <div className="App">
      <ControlPanel />
      <Todos getTodos={getTodos} getUserInfo={getUserInfo}/>
    </div>
  );
}

export default App;
