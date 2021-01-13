import React, { useEffect, useState } from 'react';
import './Todo.css';

export const Todo = ({ item, getUserInfo }) => {
  const [userName, setUserName] = useState('');
  const styles = {
    backgroundColor: item.completed ? '#F0F0F0' : '#F0F0FF',
    color: item.completed ? '#A0A0A0' : '#1A1A1A',
  }
  useEffect(() => {
     const fetchData = async () => {
      const user = await getUserInfo(item.userId);
      setUserName(user.name);
    }
    fetchData()
  }, [getUserInfo, item.userId])
  return (
    <div className='todo' style={styles}>
      <div className='name'>
        {userName}:
      </div>
      <div className='text'>
        {item.title}
      </div>

    </div>
  )
}