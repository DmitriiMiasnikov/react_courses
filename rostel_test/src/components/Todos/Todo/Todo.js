import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from './../../Loading/Loading';
import './Todo.css';

export const Todo = ({ item, getUserInfo, setCurrentUser }) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const styles = {
    backgroundColor: item.completed ? '#F0F0F0' : '#F0F0FF',
    color: item.completed ? '#A0A0A0' : '#1A1A1A',
  }
  useEffect(() => {
     const fetchData = async () => {
      const user = await getUserInfo(item.userId);
      setLoading(false);
      setUserName(user.name);
    }
    fetchData()
  }, [getUserInfo, item.userId])
  return (
    <div className='todo' style={styles}>
      {!loading && userName ? <div className='name' onClick={() => setCurrentUser(item.id)}>
        <NavLink to={`/users/${item.id}`}>{userName}</NavLink>:
      </div> : <Loading />}
      <div className='text'>
        {item.title}
      </div>

    </div>
  )
}