import './App.css';
import { Todos } from './components/Todos/Todos'

function App() {
  const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json();
    return todos
  }

  return (
    <div className="App">
      <Todos getTodos={getTodos}/>
    </div>
  );
}

export default App;
