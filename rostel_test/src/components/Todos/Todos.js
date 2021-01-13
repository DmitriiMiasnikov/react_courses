import React, { useEffect, useState } from 'react';

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
            <div key={i}>
              {el.id} - {el.title}
            </div>
          )
        })
      }
    </div>
  )
}