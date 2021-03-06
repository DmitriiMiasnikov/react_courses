import React, { useEffect, useState } from 'react';
import './Todos.css';
import { Todo } from './Todo/Todo';
import { Loading } from '../Loading/Loading';
import { Search } from '../Search/Search';

export const Todos = ({ getTodos, setCurrentUser, getUsers }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [sortedByCompleted, setSortedByCompleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      const users = await getUsers();
      setLoading(false);
      setUsersList(users);
      setTodoList(todos);
    }
    fetchData()
  }, [getTodos, getUsers])
  const sortByCompleted = async () => {
    setLoading(true);
    const todos = await getTodos()
    setLoading(false);
    setTodoList(todos.sort((a, b) => {
      if (sortedByCompleted) {
        return (a.completed === b.completed)? 0 : a.completed? -1 : 1;
      } else return (a.completed === b.completed)? 0 : a.completed? 1 : -1;
    }));
    setSortedByCompleted((item) => !item)
  }
  const search = async (value) => {
    if (value) {
      setTodoList((item) => item.filter(el => el.title.includes(value)))
    } else {
      const todos = await getTodos()
      setTodoList(todos);
    }
  }
  return (
    <div className='todos'>
      <div className='sort-buttons-block'>
        <div className='sort-button' onClick={() => sortByCompleted()}>
          <span>completed</span> {!sortedByCompleted ? <span>&#9660;</span> : <span>&#9650;</span>}
        </div>
        <div className='search-panel'>
          <Search search={search}/>
        </div>
      </div>
      {
        !loading ? todoList.map((el, i) => {
          return (
            <Todo item={el} key={i} setCurrentUser={setCurrentUser} usersList={usersList}/>
          )
        }) : <Loading />
      }
    </div>
  )
}