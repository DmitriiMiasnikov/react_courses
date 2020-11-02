import React, { useState } from 'react';
import classnames from 'classnames';

import './ItemStatusBar.css';

export const ItemStatusBar = ({ filterAll, filterActive, filterDone }) => {
  const buttons = ['All', 'Active', 'Done']
  const [active, setActive] = useState([true, false, false])
  const activeHandle = (item) => {
    switch(item) {
      case 0: {
        setActive([true, false, false])
        filterAll()
        break
      }
      case 1: {
        setActive([false, true, false])
        filterActive()
        break
      }
      case 2: {
        setActive([false, false, true])
        filterDone()
        break
      }
      default: break
    }
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