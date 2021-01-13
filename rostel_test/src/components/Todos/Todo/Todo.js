import React from 'react';
import './Todo.css';

export const Todo = ({ item }) => {
  const styles = {
    backgroundColor: item.completed ? '#F0F0F0' : '#F0F0FF',
    color:  item.completed ? '#A0A0A0' : '#1A1A1A',
  }
  return (
    <div className='todo' style={styles}>
      <div className='number'>
        {item.id}
      </div>
      <div className='text'>
       {item.title}
      </div>

    </div>
  )
}