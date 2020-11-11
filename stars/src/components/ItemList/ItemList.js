import React from 'react';
import './ItemList.css';

export const ItemList = ({ itemList }) => {
  return (
    <div>
      <ul className='item-list list-group'>
        {
          itemList.map((el, i) => {
            return <li key={i} className='list-group-item'><a href='#'>{el}</a></li>
          })
        }
      </ul>
    </div>
  )
}