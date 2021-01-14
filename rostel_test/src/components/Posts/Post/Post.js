import React from 'react';
import { NavLink } from 'react-router-dom';
import './Post.css';

export const Post = ({ item, setCurrentUser, usersList }) => {
  return (
    <div className='post'>
      <div className='name' onClick={() => setCurrentUser(item.userId)}>
        <NavLink to={`/users/${item.userId}`}>{usersList.find(el => el.id === item.userId).name}</NavLink>
      </div>
      <div className='text'>
        <div className='title'>{item.title}</div>
        <div className='body'>{item.body}</div>
      </div>

    </div>
  )
}