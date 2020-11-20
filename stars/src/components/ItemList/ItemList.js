import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Loading } from './../../assets/Loading/Loading';

export const ItemList = ({ onItemSelected, data, children }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setList(data)
    setLoading(false)
  }, [])

  const loadingBlock = loading ? <Loading /> : null;
  const content = !loading ? <Content list={list} onItemSelected={onItemSelected} itemText={children}/> : null;
  return (
    <div>
      <ul className='item-list list-group'>
        {loadingBlock}
        {content}
      </ul>
    </div>
  )
}

const Content = ({ list, onItemSelected, itemText }) => {
  return (
    list.map((el, i) => {
      const label = itemText(el)
      return <li key={i} className='list-group-item' onClick={() => onItemSelected(el.id)}><a href='#'>{label}</a></li>
    })
  )
}