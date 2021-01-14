import React, { useEffect, useState } from 'react';
import './Posts.css';
import { Post } from './Post/Post';
import { Loading } from '../Loading/Loading';

export const Posts = ({ getPosts, getUserInfo, setCurrentUser }) => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [sortedByCompleted, setSortedByCompleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts()
      setLoading(false);
      setPostList(posts);
    }
    fetchData()
  }, [getPosts])
  // const sortByCompleted = async () => {
  //   setLoading(true);
  //   const todos = await getPosts()
  //   setLoading(false);
  //   setTodoList(todos.sort((a, b) => {
  //     if (sortedByCompleted) {
  //       return (a.completed === b.completed)? 0 : a.completed? -1 : 1;
  //     } else return (a.completed === b.completed)? 0 : a.completed? 1 : -1;
  //   }));
  //   setSortedByCompleted((item) => !item)
  // }
  return (
    <div className='posts'>
      <div className='sort-buttons-block'>
        {/* <div className='sort-button' onClick={() => sortByCompleted()}>
          <span>completed</span> {!sortedByCompleted ? <span>&#9660;</span> : <span>&#9650;</span>}
        </div> */}
      </div>
      {
        !loading ? postList.map((el, i) => {
          return (
            <Post item={el} key={i} getUserInfo={getUserInfo} setCurrentUser={setCurrentUser}/>
          )
        }) : <Loading />
      }
    </div>
  )
}