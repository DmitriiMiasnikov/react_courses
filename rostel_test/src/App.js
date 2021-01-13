import './App.css';
import { Redirect, Route } from 'react-router-dom';
import { Todos } from './components/Todos/Todos';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { Main } from './components/Main/Main';

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
      <div className='content'>
        <Redirect from='/' to='/main' />
        <Route path='/main' render={() => <Main />} />
        <Route path='/todos' render={() => <Todos getTodos={getTodos} getUserInfo={getUserInfo} />} />
      </div>
    </div>
  );
}

export default App;
