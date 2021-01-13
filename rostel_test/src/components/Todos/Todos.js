import React, { useEffect, useState } from 'react';
import './Todos.css';
import { Todo } from './Todo/Todo';
import { Loading } from '../Loading/Loading';

export const Todos = ({ getTodos, getUserInfo }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedByCompleted, setSortedByCompleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos()
      setLoading(false);
      setTodoList(todos);
    }
    fetchData()
  }, [getTodos])
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
  return (
    <div className='todos'>
      <div className='sort-buttons-block'>
        <div className='sort-button' onClick={() => sortByCompleted()}>
          <span>completed</span> {!sortedByCompleted ? <span>&#9660;</span> : <span>&#9650;</span>}
        </div>
      </div>
      {
        !loading ? todoList.map((el, i) => {
          return (
            <Todo item={el} key={i} getUserInfo={getUserInfo}/>
          )
        }) : <Loading />
      }
    </div>
  )
}