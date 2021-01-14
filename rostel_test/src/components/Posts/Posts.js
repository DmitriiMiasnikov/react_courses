import React, { useEffect, useState } from 'react';
import './Posts.css';
import { Post } from './Post/Post';
import { Loading } from '../Loading/Loading';

export const Posts = ({ getPosts, setCurrentUser, getUsers }) => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      const users = await getUsers();
      setLoading(false);
      setUsersList(users);
      setPostList(posts);
    }
    fetchData()
  }, [getPosts, getUsers])
  return (
    <div className='posts'>
      {
        !loading ? postList.map((el, i) => {
          return (
            <Post item={el} key={i} setCurrentUser={setCurrentUser} usersList={usersList}/>
          )
        }) : <Loading />
      }
    </div>
  )
}