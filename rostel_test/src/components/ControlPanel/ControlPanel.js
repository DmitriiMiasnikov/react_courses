import React from 'react';
import './ControlPanel.css';
import { Button } from './../Button/Button'

export const ControlPanel = () => {
  return (
    <div className='control-panel'>
      <Button name={'main'} link={'/main'} />
      <Button name={'all todos'} link={'/todos'} />
      <Button name={'all posts'} link={'/posts'} />
    </div>
  )
}