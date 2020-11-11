import React, { useState } from 'react';
import classnames from 'classnames';

import './ItemStatusBar.css';

export const ItemStatusBar = ({ buttonsHandler }) => {
  const buttons = ['All', 'Active', 'Done']
  const [active, setActive] = useState([true, false, false])
  const activeHandle = (item) => {
    switch (item) {
      case 0: {
        setActive([true, false, false])
        break
      }
      case 1: {
        setActive([false, true, false])
        break
      }
      case 2: {
        setActive([false, false, true])
        break
      }
      default: break
    }
    buttonsHandler(item)
  }
  return (
    <div className='btn-group'>
      {
        buttons.map((el, i) => {
          return <button type='button' className={classnames('btn', { 'btn-info': active[i], 'btn-outline-secondary': !active[i] })}
            onClick={() => activeHandle(i)} key={i}>{el}</button>
        })
      }
    </div>
  )
}