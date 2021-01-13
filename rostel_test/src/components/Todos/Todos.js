import React, { useEffect, useState } from 'react';
import './Todos.css';
import { Todo } from './Todo/Todo';

export const Todos = ({ getTodos }) => {
  const [todoList, setTodoList] = useState([]);
  useEffect(async () => {
    const todos = await getTodos()
    setTodoList(todos);
  }, [])
  return (
    <div className='todos'>
      {
        todoList.map((el, i) => {
          return (
            <Todo item={el} key={i}/>
          )
        })
      }
    </div>
  )
}