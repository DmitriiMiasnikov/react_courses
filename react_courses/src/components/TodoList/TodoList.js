import React from 'react';

import { TodoListItem } from './TodoListItem/TodoListItem'


export const TodoList = ({ todoData }) => {
  return (
    <div>
      <ul>
        {
          todoData.map((item, i) => {
            return <li key={i}><TodoListItem { ...item }/></li>
          })
        }
      </ul>
    </div>
  )
}