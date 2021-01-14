import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import './Users.css';

export const Users = ({ setCurrentUser, getUsers }) => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
        const users = await getUsers();
        setUserList(users);
        setLoading(false);
      }
      fetchData()
  }, [getUsers])
  const userHandler = (id) => {
    setUserList([]);
    setCurrentUser(id);
  }
  return (
    <div className='users'>
      {
        !loading ? userList.map((item, i) => {
          return (
            <div key={i} onClick={() => userHandler(item.id)}>
              <NavLink to={`/users/${item.id}`}>
                {item.name}
              </NavLink>
            </div>
          )
        }) : <Loading />
      }
    </div>
  )
}