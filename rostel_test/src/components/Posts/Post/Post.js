import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from './../../Loading/Loading';
import './Post.css';

export const Post = ({ item, getUserInfo, setCurrentUser }) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     const fetchData = async () => {
      const user = await getUserInfo(item.userId);
      setLoading(false);
      setUserName(user.name);
    }
    fetchData()
  }, [getUserInfo, item.userId])
  return (
    <div className='post'>
      {!loading && userName ? <div className='name' onClick={() => setCurrentUser(item.userId)}>
        <NavLink to={`/users/${item.userId}`}>{userName}</NavLink>
      </div> : <Loading />}
      <div className='text'>
        <div className='title'>{item.title}</div>
        <div className='body'>{item.body}</div>
      </div>

    </div>
  )
}