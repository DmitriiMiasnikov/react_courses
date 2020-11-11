import React, { useState } from 'react';
import classnames from 'classnames';

import './ItemStatusBar.css';

export const ItemStatusBar = ({ buttonsHandler, buttons, active }) => {
  const activeHandle = (item) => {
    buttonsHandler(item)
  }
  return (
    <div className='btn-group'>
      {
        buttons.map((el, i) => {
          return <button type='button' className={classnames('btn',
            { 'btn-info': el === active, 'btn-outline-secondary': el !== active })}
            onClick={() => activeHandle(el)} key={i}>{el}</button>
        })
      }
    </div>
  )
}