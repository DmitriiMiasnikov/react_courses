import React, { useEffect, useState } from 'react';
import './Todos.css';
import { Todo } from './Todo/Todo';

export const Todos = ({ getTodos, getUserInfo }) => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos()
      setTodoList(todos);
    }
    fetchData()
  }, [getTodos])
  return (
    <div className='todos'>
      {
        todoList.map((el, i) => {
          return (
            <Todo item={el} key={i} getUserInfo={getUserInfo}/>
          )
        })
      }
    </div>
  )
}