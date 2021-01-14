import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import './Users.css';
import { Search } from './../Search/Search';

export const Users = ({ setCurrentUser, getUsers }) => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedByName, setSortedByName] = useState(false);
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
  const sortByName = async () => {
    setLoading(true);
    const users = await getUsers()
    setLoading(false);
    setUserList(users.sort((a, b) => {
      if (sortedByName) {
        return (a.name === b.name) ? 0 : a.name > b.name ? -1 : 1;
      } else return (a.name === b.name) ? 0 : a.name > b.name ? 1 : -1;
    }))
    setSortedByName(item => !item);
  }
  const sortDefault = async () => {
    setLoading(true);
    const users = await getUsers()
    setLoading(false);
    setUserList(users.sort((a, b) => a.id - b.id))
  }
  const search = async (value) => {
    if (value) {
      setUserList((item) => item.filter(el => el.name.includes(value)))
    } else {
      const users = await getUsers()
      setUserList(users);
    }
  }
  return (
    <div className='users'>
      <div className='sort-buttons-block'>
      <div className='sort-button' onClick={() => sortDefault()}>
          <span>sort by default</span>
        </div>
        <div className='sort-button' onClick={() => sortByName()}>
          <span>sort by</span> {!sortedByName ? <span>A-Z</span> : <span>Z-A</span>}
        </div>
        <div className='search-panel'>
          <Search search={search} />
        </div>
      </div>
      {
        !loading ? userList.map((item, i) => {
          return (
            <div key={i} onClick={() => userHandler(item.id)}>
              <NavLink to={`/users/${item.id}`}>
                {item.id} - {item.name}
              </NavLink>
            </div>
          )
        }) : <Loading />
      }
    </div>
  )
}