import React from 'react';

import { TodoListItem } from './TodoListItem/TodoListItem'


export const TodoList = ({ todoData }) => {
  return (
    <div>
      <ul>
        {
          todoData.map((el, i) => {
            return <li><TodoListItem item={el.label} important={el.important} key={i}/></li>
          })
        }
      </ul>
    </div>
  )
}