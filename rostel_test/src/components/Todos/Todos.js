import React, { useEffect, useState } from 'react';
import { Todo } from './Todo/Todo'

export const Todos = ({ getTodos }) => {
  const [todoList, setTodoList] = useState([]);
  useEffect(async () => {
    const todos = await getTodos()
    setTodoList(todos);
  }, [])
  return (
    <div>
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