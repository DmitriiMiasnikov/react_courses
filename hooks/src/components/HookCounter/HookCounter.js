import React, { useEffect, useState } from 'react';
import './HookCounter.css'

export const HookCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  })
  useEffect(() => {
    console.log('useEffect []');
  }, [])
  useEffect(() => {
    console.log('useEffect [count]');
    return () => console.log('unmount')
  }, [count])

  return (
    <div className='wrapper'>
      <div className='text'>
        {count}
      </div>
      <button onClick={() => {setCount((e) => e + 1)}}>+1</button>
      <button onClick={() => {setCount((e) => e - 1)}}>-1</button>
    </div>
  )
}