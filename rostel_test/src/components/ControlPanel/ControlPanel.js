import React from 'react';
import './ControlPanel.css';
import { Button } from './../Button/Button'

export const ControlPanel = ({  }) => {
  return (
    <div className='control-panel'>
      <div className='line'>
        <Button name={'all todos'}/>
        <Button name={'all posts'}/>
      </div>
      <div className='line'>
        <Button name={'sort by complete'}/>
      </div>

    </div>
  )
}