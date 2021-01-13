import React from 'react';
import './Todo.css';

export const Todo = ({ item }) => {
  const bgcolor = item.completed ? 'green' : 'red';
  return (
    <div className='todo' style={{ backgroundColor: bgcolor }}>
      <div className='number'>
        {item.id}
      </div>
      <div className='text'>
       {item.title}
      </div>

    </div>
  )
}