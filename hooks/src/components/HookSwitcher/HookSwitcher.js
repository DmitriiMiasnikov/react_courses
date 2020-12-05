import React, { useState } from 'react';
import './HookSwitcher.css'

export const HookSwitcher = ({}) => {
  const [color, setColor] = useState('grey');
  const [fontSize, setFontSize] = useState(14);
  const greySwitch = () => setColor('grey');
  const blackSwitch = () => setColor('black');
  return (
    <div className='wrapper' 
      style={{ backgroundColor: color, fontSize: `${fontSize}px` }}>
      <button onClick={() => greySwitch()}>grey</button>
      <button onClick={() => blackSwitch()}>black</button>
      <button onClick={() => setFontSize((s) => s + 2)}>+</button>
      <button onClick={() => setFontSize((s) => s - 2)}>-</button>
      <span style={{ color: color === 'grey' ? 'black' : 'grey' }} className='text'>just a text</span> 
    </div>
  )
}