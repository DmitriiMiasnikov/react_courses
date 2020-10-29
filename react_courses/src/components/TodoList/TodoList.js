import React from 'react';

const items = ['first line', 'second line']

export const TodoList = () => {
  return (
    <div>
      <ul>
        {
          items.map(el => {
            return <li>{el}</li>
          })
        }
      </ul>
    </div>
  )
}