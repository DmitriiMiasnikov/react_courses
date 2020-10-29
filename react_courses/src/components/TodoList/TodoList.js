import React from 'react';

import { TodoListItem } from './TodoListItem/TodoListItem'

const items = ['first line', 'second line', 'third line']

export const TodoList = () => {
  return (
    <div>
      <ul>
        {
          items.map((el, i) => {
            return <li><TodoListItem item={el} important={true ? i === 1 : false} /></li>
          })
        }
      </ul>
    </div>
  )
}