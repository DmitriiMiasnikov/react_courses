import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

const items = [0, 1, 2]

export const TodoList = () => {
  return (
    <div>
      <ul>
        {
          items.map(el => {
            return (
              <li>
                <TodoItem item={el} />
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}