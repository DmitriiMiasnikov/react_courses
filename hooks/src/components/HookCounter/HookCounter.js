import React, { useEffect, useState } from 'react';
import './HookCounter.css'

export const HookCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  })

  return (
    <div className='wrapper'>
      <div className='text'>
        {count}
      </div>
      <button onClick={() => {setCount((e) => e + 1)}}>+1</button>
    </div>
  )
}