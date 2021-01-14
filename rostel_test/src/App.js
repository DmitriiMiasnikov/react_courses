import './App.css';
import { Redirect, Route } from 'react-router-dom';
import { Todos } from './components/Todos/Todos';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { Main } from './components/Main/Main';
import { User } from './components/User/User';
import { useState } from 'react';
import { Posts } from './components/Posts/Posts';
import { Users } from './components/Users/Users';

function App() {
  const [userId, setUserId] = useState(null);
  const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json();
    return todos
  }
  const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return posts
  }
  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return users
  }
  const getUserInfo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userName = await res.json();
    return userName
  }
  const setCurrentUser = async (id) => {
    await getUserInfo(id);
    setUserId(id);
  }

  return (
    <div className="App">
      <ControlPanel />
      <div className='content'>
        <Redirect from='/' to='/main' />
        <Route path='/main' render={() => <Main />} />
        <Route path='/todos' render={() => <Todos getTodos={getTodos} setCurrentUser={setCurrentUser} getUsers={getUsers}/>} />
        <Route path='/posts' render={() => <Posts getPosts={getPosts} setCurrentUser={setCurrentUser} getUsers={getUsers}/>} />
        <Route path={`/users/${userId}`} render={() => <User getUserInfo={getUserInfo} userId={userId}/>}/>
        <Route exact path='/users' render={() => <Users setCurrentUser={setCurrentUser} getUsers={getUsers}/>} />
      </div>
    </div>
  );
}

export default App;
