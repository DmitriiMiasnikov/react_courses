import React, { useState } from 'react';

export const HookSwitcher = ({}) => {
  const [color, setColor] = useState('grey')
  const greySwitch = () => setColor('grey');
  const blackSwitch = () => setColor('black');
  return (
    <div style={{ padding:'20px', backgroundColor: color, width: '200px' }}>
      <button onClick={() => greySwitch()}>grey</button>
      <button onClick={() => blackSwitch()}>black</button>
    </div>
  )
}