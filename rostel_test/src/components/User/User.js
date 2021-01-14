import React, { useEffect, useState } from 'react';
import { Loading } from '../Loading/Loading';
import './User.css';

export const User = ({ getUserInfo, userId }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserInfo(userId);
      setLoading(false);
      setUserInfo(user);
    }
    fetchData()
  }, [getUserInfo, userId])
  return (
    <div className='wrapper'>
      {
        !loading ?
          <div className='user'>
            <div className='name'>{userInfo.name}</div>
            <div>userName: {userInfo.username}</div>
            <div>email: {userInfo.email}</div>
            <div>phone: {userInfo.phone}</div>
            <div>website: {userInfo.website}</div>
          </div>
          : <Loading />
      }
    </div>
  )
}