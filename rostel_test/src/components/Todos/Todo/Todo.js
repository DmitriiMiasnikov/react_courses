import React from 'react';
import { NavLink } from 'react-router-dom';
import './Todo.css';

export const Todo = ({ item, setCurrentUser, usersList }) => {
  const styles = {
    backgroundColor: item.completed ? '#F0F0F0' : '#F0F0FF',
    color: item.completed ? '#A0A0A0' : '#1A1A1A',
  }
  return (
    <div className='todo' style={styles}>
      <div className='name' onClick={() => setCurrentUser(item.userId)}>
        <NavLink to={`/users/${item.userId}`}>{usersList.find(el => el.id === item.userId).name}</NavLink>:
      </div>
      <div className='text'>
        {item.title}
      </div>

    </div>
  )
}