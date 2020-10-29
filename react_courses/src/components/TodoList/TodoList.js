import React from 'react';

import { TodoListtItem } from './TodoListtItem/TodoListtItem'

const items = ['first line', 'second line', 'third line']

export const TodoList = () => {
  return (
    <div>
      <ul>
        {
          items.map(el => {
            return <li><TodoListtItem item={el} /></li>
          })
        }
      </ul>
    </div>
  )
}