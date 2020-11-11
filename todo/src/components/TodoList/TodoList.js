import React from 'react';

import { TodoListItem } from './TodoListItem/TodoListItem';
import './TodoList.css';


export const TodoList = ({ todoData, removeTodo }) => {
  return (
    <ul className='list-group todo-list'>
      {
        todoData.map((item, i) => {
          return <li key={i} className='list-group-item todo-list-item'>
            <TodoListItem {...item} removeTodo={removeTodo} />
          </li>
        })
      }
    </ul>
  )
}