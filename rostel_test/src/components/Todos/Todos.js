import React, { useEffect, useState } from 'react';
import './Todos.css';
import { Todo } from './Todo/Todo';
import { Loading } from '../Loading/Loading';

export const Todos = ({ getTodos, getUserInfo }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos()
      setLoading(false);
      setTodoList(todos);
    }
    fetchData()
  }, [getTodos])
  return (
    <div className='todos'>
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